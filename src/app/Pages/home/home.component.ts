import { Component } from '@angular/core';
import { SlideShowComponent } from '../../Components/slide-show/slide-show.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TabsComponent } from '../../Components/tabs/tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    CommonModule,
    SlideShowComponent,
    FooterComponent,
    NgOptimizedImage,
    TabsComponent,
  ],
})
export class HomeComponent {}
