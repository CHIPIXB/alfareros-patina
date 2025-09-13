import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Rutas } from './pages/rutas/rutas';
import { Tienda } from './pages/tienda/tienda';
import { Contacto } from './pages/contacto/contacto';
import { Alfareros } from './pages/alfareros/alfareros';
import { Eventos } from './pages/eventos/eventos';

//Rutas hijas de "Rutas"
import { HorarioRutas } from './pages/horario-rutas/horario-rutas';
import { UbicacionRutas } from './pages/ubicacion-rutas/ubicacion-rutas';
import { WikilocRutas } from './pages/wikiloc-rutas/wikiloc-rutas';
import { RutasAlfareras } from './pages/rutas-alfareras/rutas-alfareras';
import { AlfarerosEnRutas } from './pages/alfareros-en-rutas/alfareros-en-rutas';
import { PeriodicoRutas } from './pages/periodico-rutas/periodico-rutas';

export const routes: Routes = [

    { path: '', pathMatch: 'full', component: Home },
    { path: 'rutas', component: Rutas,
        children: [
            { path: 'horario', component: HorarioRutas },
            { path: 'ubicacion', component: UbicacionRutas },
            { path: 'wikiloc', component: WikilocRutas },
            { path: 'rutas-alfareras', component: RutasAlfareras },
            { path: 'alfareros-en-ruta', component: AlfarerosEnRutas },
            { path: 'periodico', component: PeriodicoRutas },
        ]
    },

    { path: 'tienda', component: Tienda },
    { path: 'eventos', component: Eventos },
    { path: 'alfareros', component: Alfareros },
    { path: 'contacto', component: Contacto },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
