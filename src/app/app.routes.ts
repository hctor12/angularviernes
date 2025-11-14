import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Personas } from './components/personas/personas';
import { Plantillafuncionsimple } from './components/plantillafuncionsimple/plantillafuncionsimple';
import { PlantillaMultiple } from './components/plantilla-multiple/plantilla-multiple';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'personas', component: Personas },
  { path: 'plantillasimple', component: Plantillafuncionsimple },
  { path: 'plantillamultiple', component: PlantillaMultiple },
];
