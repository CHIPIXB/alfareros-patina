import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wikiloc-rutas',
  imports: [RouterLink],
  templateUrl: './wikiloc-rutas.html',
  styleUrl: './wikiloc-rutas.css'
})
export class WikilocRutas {
  
  activo: 'info' | 'mapa' | null = null;

  toggle(estacion: 'info' | 'mapa') {
    this.activo = this.activo === estacion ? null : estacion;
  }
}


