import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

interface Asesor {
  nombre: string;
  ventas: number;
}

@Component({
  selector: 'app-diario',
  imports: [CommonModule, FormsModule],
  templateUrl: './diario.html',
  styleUrl: './diario.css'
})
export class Diario implements OnInit {

  asesores = signal<Asesor[]>([]);
  fechaHoy = new Date().toLocaleDateString();

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const datosGuardados = localStorage.getItem("asesores");
      if (datosGuardados) {
        const loadedData = JSON.parse(datosGuardados);
        this.asesores.set(this.sortAsesores(loadedData));
      } else {
        this.inicializarDatos();
      }
    } else {
      this.inicializarDatos();
    }
  }

  inicializarDatos() {
    const inicial: Asesor[] = [];
    for (let i = 1; i <= 18; i++) {
      inicial.push({
        nombre: `Asesor ${i}`,
        ventas: 0
      });
    }
    this.asesores.set(this.sortAsesores(inicial));
    this.guardarDatos();
  }

  guardarDatos() {
    const sortedData = this.sortAsesores(this.asesores());
    localStorage.setItem("asesores", JSON.stringify(sortedData));
    this.asesores.set(sortedData);
  }

  actualizarTotal(asesor: Asesor) {
    this.guardarDatos();
  }

  private sortAsesores(asesoresArray: Asesor[]): Asesor[] {
    return asesoresArray.sort((a, b) => b.ventas - a.ventas);
  }

  getRowClass(ventas: number): string {
    if (ventas <= 0) return "low-performer";
    if (ventas <= 1) return "medium-performer";
    return "high-performer";
  }

  getStatusEmoji(ventas: number, index: number): string {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    if (ventas <= 0) return '😥';
    if (ventas <= 1) return '⚠️';
    return '✔️';
  }
}
