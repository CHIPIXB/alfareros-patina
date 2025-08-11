import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Rutas } from './pages/rutas/rutas';
import { Tienda } from './pages/tienda/tienda';
import { Contacto } from './pages/contacto/contacto';
import { Alfareros } from './pages/alfareros/alfareros';
import { Eventos } from './pages/eventos/eventos';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: Home },
    { path: 'rutas', component: Rutas },
    { path: 'tienda', component: Tienda },
    { path: 'eventos', component: Eventos },
    { path: 'alfareros', component: Alfareros },
    { path: 'contacto', component: Contacto }
];
