import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { RadioLiveComponent } from '../radio-live/radio-live.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RadioLiveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
