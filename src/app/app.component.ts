import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
  
export class AppComponent implements OnInit {
  hola = "";
  appPages:any;
  
  ngOnInit() {
    this.appPages = "";
    if(localStorage.getItem("token") != null){
      this.appPages = [
        { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
        { title: 'Reportar situaciones', url: '/reportar-situaciones', icon: 'receipt' },
        { title: 'Mis situaciones', url: '/mis-situaciones', icon: 'clipboard' },
        { title: 'Mapa de situaciones', url: '/mapa-mis-situaciones', icon: 'earth' },
        { title: 'Recuperar Clave', url: '/recuperar-clave', icon: 'repeat' },
        { title: 'Cambiar Clave', url: '/cambiar-clave', icon: 'key' },
        { title: 'Cerrar Sesión', url: '/cerrar-sesion', icon: 'exit' },
      ];
    }else{
      this.appPages = [
        { title: 'Inicio', url: '/inicio', icon: 'home' },
        { title: 'Historia', url: '/historia', icon: 'book' },
        { title: 'Servicios', url: '/servicios', icon: 'construct' },
        { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
        { title: 'Videos', url: '/videos', icon: 'videocam' },
        { title: 'Albergues', url: '/albergues', icon: 'document-text' },
        { title: 'Mapa de albergues', url: '/mapa-todos-albergues', icon: 'earth' },
        { title: 'Medidas', url: '/medidas-preventivas', icon: 'warning' },
        { title: 'Miembros', url: '/miembros', icon: 'people-circle' },
        { title: 'Iniciar Sesión', url: '/login', icon: 'enter' },
        { title: 'Registrarse', url: '/registrarse', icon: 'person-add' },
        { title: 'Acerca de', url: '/acerca-de', icon: 'bulb' },
      ];
    }  
  }
  
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
