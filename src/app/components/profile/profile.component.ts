import { Component, OnInit } from '@angular/core';
import ParticlesConfig from '../../particles.json'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  particlesConfig = ParticlesConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
