import { Component } from '@angular/core';
import { HeroHome } from "../../components/hero-home/hero-home";

@Component({
  selector: 'app-home',
  imports: [HeroHome],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
