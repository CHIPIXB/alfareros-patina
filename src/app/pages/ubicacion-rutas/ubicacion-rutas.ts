import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion-rutas',
  imports: [],
  templateUrl: './ubicacion-rutas.html',
  styleUrl: './ubicacion-rutas.css'
})
export class UbicacionRutas {
    activo: 'verano' | 'invierno' | null = null;

  toggle(estacion: 'verano' | 'invierno') {
    this.activo = this.activo === estacion ? null : estacion;
  }
}
