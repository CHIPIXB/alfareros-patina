import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Alfareros Patina';
  showButton = false;

  // Detecta scroll de la ventana
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton = window.scrollY > 500; // aparece al bajar 200px
  }

  // Función para volver arriba
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
