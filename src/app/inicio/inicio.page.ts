import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  token = localStorage.getItem("token");
  constructor() {}

  ngOnInit() {
    if(this.token != ""){
      console.log("Hay algo " + this.token);
    }else{
      console.log("No hay algo");
    }
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
