import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service-plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  imports: [],
  providers: [ServicePlantilla],
  template: `
    <div>
      <select #selectFuncion>
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
})
export class Plantillafuncionsimple implements OnInit {
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  @ViewChild('selectFuncion') selectFuncion!: ElementRef;

  constructor(private _service: ServicePlantilla) {}

  mostrarTabla(): void {
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantilla(funcion).then((response) => (this.plantilla = response));
  }

  ngOnInit(): void {
    this._service.getFunciones().then((response) => (this.funciones = response));
  }
}
