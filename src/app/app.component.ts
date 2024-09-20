import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Box1Component } from './components/box1/box1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Box1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testAng17';
}
