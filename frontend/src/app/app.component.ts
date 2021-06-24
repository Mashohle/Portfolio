import { Component } from '@angular/core';
import ParticlesConfig from './particles.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  particlesConfig = ParticlesConfig;

}
