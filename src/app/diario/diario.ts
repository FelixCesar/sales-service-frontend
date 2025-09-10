import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

interface Asesor {
  nombre: string;
  enCurso: number;
  activas: number;
  instaladas: number;
  canceladas: number;
  total: number;
  grupo: number;
}

@Component({
  selector: 'app-diario',
  imports: [CommonModule, FormsModule],
  templateUrl: './diario.html',
  styleUrl: './diario.css'
})
export class Diario implements OnInit {

  // asesores = signal<Asesor[]>([]);
  grupo1 = signal<Asesor[]>([]);
  grupo2 = signal<Asesor[]>([]);

  fechaHoy = new Date().toLocaleDateString();

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const datosGuardadosGrupo1 = localStorage.getItem("asesores_grupo1");
      const datosGuardadosGrupo2 = localStorage.getItem("asesores_grupo2");
      
      if (datosGuardadosGrupo1 && datosGuardadosGrupo2) {
        const loadedData1 = JSON.parse(datosGuardadosGrupo1);
        const loadedData2 = JSON.parse(datosGuardadosGrupo2);
        this.grupo1.set(this.sortAsesores(loadedData1));
        this.grupo2.set(this.sortAsesores(loadedData2));
      } else {
        this.inicializarDatos();
      }
    } else {
      this.inicializarDatos();
    }
  }

  inicializarDatos() {
    const grupo1: Asesor[] = [];
    const grupo2: Asesor[] = [];
    
    for (let i = 1; i <= 9; i++) {
      grupo1.push({
        nombre: `Asesor ${i}`,
        enCurso: 0,
        activas: 0,
        instaladas: 0,
        canceladas: 0,
        total: 0,
        grupo: 1
      });
    }
    
    for (let i = 10; i <= 18; i++) {
      grupo2.push({
        nombre: `Asesor ${i}`,
        enCurso: 0,
        activas: 0,
        instaladas: 0,
        canceladas: 0,
        total: 0,
        grupo: 2
      });
    }
    
    this.grupo1.set(this.sortAsesores(grupo1));
    this.grupo2.set(this.sortAsesores(grupo2));
    this.guardarDatos();
  }

  guardarDatos() {
    const sortedData1 = this.sortAsesores(this.grupo1());
    const sortedData2 = this.sortAsesores(this.grupo2());
    
    localStorage.setItem("asesores_grupo1", JSON.stringify(sortedData1));
    localStorage.setItem("asesores_grupo2", JSON.stringify(sortedData2));
    
    this.grupo1.set(sortedData1);
    this.grupo2.set(sortedData2);
  }

  actualizarTotal(asesor: Asesor) {
    asesor.total = asesor.activas;
    
    if (asesor.grupo === 1) {
      this.grupo1.set(this.sortAsesores([...this.grupo1()]));
    } else {
      this.grupo2.set(this.sortAsesores([...this.grupo2()]));
    }
    
    this.guardarDatos();
  }

  private sortAsesores(asesoresArray: Asesor[]): Asesor[] {
    return asesoresArray.sort((a, b) => {
      return b.activas - a.activas;
    });
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
