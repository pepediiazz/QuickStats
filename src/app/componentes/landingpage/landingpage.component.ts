import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
