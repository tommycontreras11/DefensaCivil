import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen = false;

  slideOpts={
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000
    }
  } 
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
