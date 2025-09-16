import { Component } from '@angular/core';

@Component({
  selector: 'app-wikiloc-rutas',
  imports: [],
  templateUrl: './wikiloc-rutas.html',
  styleUrl: './wikiloc-rutas.css'
})
export class WikilocRutas {
      activo: 'info' | 'mapa' | null = null;

  toggle(estacion: 'info' | 'mapa') {
    this.activo = this.activo === estacion ? null : estacion;
  }
}
