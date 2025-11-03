import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  corazones: { x: number; duracion: number }[] = [];
  helados = Array(20).fill(0);

  lanzarCorazones() {
    console.log('Click: lanzando corazones'); // debug
    const width = document.documentElement.clientWidth || window.innerWidth;

    for (let i = 0; i < 20; i++) {
      this.corazones.push({
        x: Math.random() * width,
        duracion: 2 + Math.random() * 3
      });
    }

    setTimeout(() => {
      this.corazones = [];
    }, 4000);
  }
}