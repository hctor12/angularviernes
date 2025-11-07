import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersona } from '../../services/service-persona';

@Component({
  selector: 'app-personas',
  imports: [],
  template: `
    <div>
      <h1 class="text-2xl text-blue-500">Personas API</h1>
      @if (personas.length > 0) {
      <ul>
        @for (per of personas; track $index) {
        <li>{{ per.Nombre }}, {{ per.Edad }}</li>
        }
      </ul>
      }
    </div>
  `,
  providers: [ServicePersona],
})
export class Personas implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersona) {}

  ngOnInit(): void {
    // this._service.getPersonas().subscribe((response) => {
    //   this.personas = response;
    // });

    //AXIOS
    // this._service.getPersonasV2().then((response) => {
    //   this.personas = response.data;
    // });

    //WITH FETCH
    this._service.getPersonasV3().then((data) => {
      this.personas = data;
    });
  }
}
