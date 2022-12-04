import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Servicios', url: '/servicios', icon: 'construct' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Albergues', url: '/albergues', icon: 'document-text' },
    { title: 'Inicio de Sesión', url: '/login', icon: 'enter' },
    { title: 'Registrarse', url: '/registrarse', icon: 'person-add' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
