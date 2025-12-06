import { Routes } from '@angular/router';

import { Introduccion } from './pages/introduccion/introduccion';
import { Instalacion } from './pages/instalacion/instalacion';
import { Primerproyecto } from './pages/primerproyecto/primerproyecto';
import { Estructura } from './pages/estructura/estructura';
import { Componentes } from './pages/componentes/componentes';
import { Componentes2 } from './pages/componentes2/componentes2';
import { Publicacion } from './pages/publicacion/publicacion';

export const routes: Routes = [
  { path: 'introduccion', component: Introduccion },
  { path: 'instalacion', component: Instalacion },
  { path: 'primerproyecto', component: Primerproyecto },
  { path: 'estructura', component: Estructura },
  { path: 'componentes', component: Componentes },
  { path: 'componentes2', component: Componentes2 },
  { path: 'publicacion', component: Publicacion },
  { path: '', redirectTo: 'introduccion', pathMatch: 'full' }
];
