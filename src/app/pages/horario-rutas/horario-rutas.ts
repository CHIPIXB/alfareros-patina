import { Component } from '@angular/core';

@Component({
  selector: 'app-horario-rutas',
  imports: [],
  templateUrl: './horario-rutas.html',
  styleUrl: './horario-rutas.css'
})
export class HorarioRutas {
  activo: 'verano' | 'invierno' | null = null;

  toggle(estacion: 'verano' | 'invierno') {
    this.activo = this.activo === estacion ? null : estacion;
  }
}
