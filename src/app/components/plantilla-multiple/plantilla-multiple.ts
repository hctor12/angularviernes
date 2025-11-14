import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service-plantilla';

@Component({
  selector: 'app-plantilla-multiple',
  imports: [],
  providers: [ServicePlantilla],
  template: `
    <div>
      <select name="selectFunciones" #selectFunciones multiple [size]="5">
        @for (fun of funciones; track $index) {
        <option>{{ fun }}</option>
        }
      </select>
      <button class="bg-gray-300 p-2 rounded-md cursor-pointer" (click)="mostrarTabla()">
        Generar
      </button>
      <table>
        <thead>
          <tr>
            <th>idEmpleado</th>
            <th>idHospital</th>
            <th>idSala</th>
            <th>apellido</th>
            <th>funcion</th>
            <th>turno</th>
            <th>salario</th>
          </tr>
        </thead>
        <tbody>
          @for (emp of plantilla; track $index) {
          <tr>
            <td>{{ emp.idEmpleado }}</td>
            <td>{{ emp.idHospital }}</td>
            <td>{{ emp.idSala }}</td>
            <td>{{ emp.apellido }}</td>
            <td>{{ emp.funcion }}</td>
            <td>{{ emp.turno }}</td>
            <td>{{ emp.salario }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class PlantillaMultiple implements OnInit {
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  @ViewChild('selectFunciones') selectFunciones!: ElementRef;
  public funcionesSeleccionadas!: Array<string>;

  constructor(private _service: ServicePlantilla) {}

  ngOnInit(): void {
    this._service.getFunciones().then((response) => (this.funciones = response));
  }

  mostrarTabla(): void {
    let aux = new Array<string>();
    for (const option of this.selectFunciones.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service
      .getPlantillaFunciones(this.funcionesSeleccionadas)
      .then((response) => (this.plantilla = response));
  }
}
