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
    { 
      nombre: 'Anttuaneth', 
      ventas: 5, 
      producto: 'VODAFONE', 
      pizzas: 2,
      imagenes: ['kfc.png', 'cartman.png']
    },
    { 
      nombre: 'Melissa', 
      ventas: 7, 
      producto: 'VODAFONE', 
      pizzas: 2,
      imagenes: ['kfc.png', 'cartman.png']    
    }
  ];
}
