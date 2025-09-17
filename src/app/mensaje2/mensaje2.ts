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
    { nombre: 'Anttuaneth', ventas: 2, producto: 'VODAFONE' },
    { nombre: 'Melissa', ventas: 2, producto: 'VODAFONE' },
    { nombre: 'Brandon', ventas: 2, producto: 'VODAFONE' },
  ];

  precioPorVenta = 12.5; 
}
