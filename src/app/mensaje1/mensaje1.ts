import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-mensaje1',
  imports: [],
  templateUrl: './mensaje1.html',
  styleUrl: './mensaje1.css'
})
export class Mensaje1 implements AfterViewInit {
   @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  videoSource: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Asegúrate de que la ruta al video sea correcta
    // Si el video está en la carpeta assets, usa: './assets/fino.mp4'
    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl('fino.mp4');
  }

  ngAfterViewInit(): void {
    this.setupVideo();
  }

  setupVideo(): void {
    const video = this.videoPlayer.nativeElement;
    
    // Configurar el video para que se reproduzca en bucle
    video.loop = true;
    
    // Forzar la reproducción si es necesario
    video.load();
    
    video.play().catch(error => {
      console.error('Error al reproducir el video:', error);
      // En algunos navegadores, la reproducción automática puede ser bloqueada
      // Podríamos mostrar un botón de reproducción en ese caso
    });
  }

  replayVideo(): void {
    // Función para reiniciar el video cuando termine
    const video = this.videoPlayer.nativeElement;
    video.currentTime = 0;
    video.play().catch(error => console.error('Error al reiniciar el video:', error));
  }

}
