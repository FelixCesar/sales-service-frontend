import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje2',
  imports: [CommonModule],
  templateUrl: './mensaje2.html',
  styleUrl: './mensaje2.css'
})
export class Mensaje2 {
equipos = [
{ nombre: 'Anttaneth', ventas: 5, producto: 'VODAFONE', pizzas: 2 },
{ nombre: 'Melissa', ventas: 5, producto: 'VODAFONE', pizzas: 2 }
];
}
