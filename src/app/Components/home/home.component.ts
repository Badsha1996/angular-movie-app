import { Component } from '@angular/core';
import { SlideShowComponent } from '../slide-show/slide-show.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideShowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
