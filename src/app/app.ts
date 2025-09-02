import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mensual } from './mensual/mensual';
import { Diario } from './diario/diario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mensual, Diario, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit{
  mostrarDiario = true;
  private intervalo: any;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.mostrarDiario = !this.mostrarDiario;
    }, 5000);
  }


}
