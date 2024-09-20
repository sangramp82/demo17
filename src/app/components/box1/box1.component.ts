import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'box1',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './box1.component.html',
  styleUrl: './box1.component.css',
})
export class Box1Component {
  elemArr: Number[] = [];
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.elemArr.push(i);
    }
  }
}
