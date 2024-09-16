import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import {PrimeNGConfig } from 'primeng/api';
import { HomePageComponent } from './pages/home-page/home-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig, ) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        
    }
    
  title = 'Uchenna Nwagbara Portfolio';
}
