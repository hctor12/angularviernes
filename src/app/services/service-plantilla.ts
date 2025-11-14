import { Injectable } from '@angular/core';
import { Plantilla } from '../models/plantilla';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePlantilla {
  getFunciones(): Promise<Array<string>> {
    let request = 'api/Plantilla/Funciones';
    let url = environment.urlApiPlantilla + request;

    const funciones = fetch(url).then((response) => response.json());
    return funciones;
  }

  getPlantilla(funcion: string): Promise<Array<Plantilla>> {
    let request = 'api/Plantilla/PlantillaFuncion/' + funcion;
    let url = environment.urlApiPlantilla + request;

    const plantilla = fetch(url).then((response) => response.json());
    return plantilla;
  }

  getPlantillaFunciones(funciones: Array<string>): Promise<Array<Plantilla>> {
    let datos = '';
    for (const funcion of funciones) {
      datos += 'funcion=' + funcion + '&';
    }
    datos = datos.substring(0, datos.length - 1);
    let request = 'api/Plantilla/Plantillafunciones?' + datos;
    let url = environment.urlApiPlantilla + request;
    const plantilla = fetch(url).then((response) => response.json());
    return plantilla;
  }
}
