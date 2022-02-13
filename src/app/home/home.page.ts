import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [
    {
      title: 'Escucha tu música',
      subtitle: 'Este es el subtitle',
      description: 'Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas',
      icon: 'play'
    },
    {
      title: 'Disfruta de nuestro incrible reproductor',
      subtitle: 'DE VIDEOS INCREIBLES',
      description: 'Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increibles de tu artista favorito.',
      icon: 'videocam'
    },
    {
      title: 'ACCEDE al exclusivo',
      subtitle: 'MODO DEPORTE',
      description: 'Crea una playlist basada enn tu actividad física. Ten reportes y acceso a lo que necesites, integrado conn GPS',
      icon: 'bicycle'
    }
  ]
  constructor() {}

}
