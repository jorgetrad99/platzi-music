import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
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
  ];
  constructor(private router: Router, private storage: Storage) {}
  finish() {
    this.storage.create();
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
