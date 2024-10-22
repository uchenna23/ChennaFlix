import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNGConfig } from 'primeng/api';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, MenuBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig, ) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        
    }
    
  title = 'ChennaFlix';

  componentDidMount(){
    console.log('testing')
    fetch('http://localhost:8080/users/create',
    {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    }).then(response =>{
      response.json().then(json=> {
        console.log("Response :",json);
      });
    });
  }
}
