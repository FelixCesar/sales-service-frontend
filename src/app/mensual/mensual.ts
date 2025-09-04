import { CommonModule } from "@angular/common";
import { Component, OnInit, signal, AfterViewInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

interface Asesor {
  nombre: string;
  enCurso: number;
  activas: number;
  instaladas: number;
  canceladas: number;
  total: number;
}
@Component({
  selector: 'app-mensual',
  imports: [CommonModule, FormsModule],
  templateUrl: './mensual.html',
  styleUrl: './mensual.css'
})
export class Mensual implements OnInit{

  asesores = signal<Asesor[]>([]);

ngOnInit() {
  this.cargarDatos();
}

  // ngAfterViewInit() {
  //   this.generarFuegos(); 
  // }


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
        enCurso: 0,
        activas: 0,
        instaladas: 0,
        canceladas: 0,
        total: 0,
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
    asesor.total = asesor.activas;
    this.guardarDatos();
  }

  private sortAsesores(asesoresArray: Asesor[]): Asesor[] {
    return asesoresArray.sort((a, b) => {
      return b.activas - a.activas;
    });
  }

  getRowClass(activas: number): string {
    if (activas <= 3) return "low-performer";
    if (activas <= 6) return "medium-performer";
    return "high-performer";
  }
  getStatusEmoji(activas: number, index: number): string {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    if (activas <= 3) return '😥';
    if (activas <= 6) return '⚠️';
    return '✔️';
  }

// generarFuegos() {
//     const container = document.querySelector(".fire-container") as HTMLElement;
//     if (!container) return;

//     setInterval(() => {
//       const emoji = document.createElement("div");
//       emoji.classList.add("fire-emoji");
//       emoji.innerText = "🔥";

//       emoji.style.left = Math.random() * 100 + "vw";
//       emoji.style.animationDuration = 3 + Math.random() * 2 + "s";
//       emoji.style.fontSize = 1 + Math.random() * 2 + "rem";

//       container.appendChild(emoji);

//       setTimeout(() => {
//         emoji.remove();
//       }, 5000);
//     }, 300);
//   }

}
