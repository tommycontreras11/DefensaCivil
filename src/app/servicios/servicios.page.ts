import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  services: any[] =[];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.listarServicios();
  }

  listarServicios(){
    this.http.get("https://adamix.net/defensa_civil/def/servicios.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        this.services.push({
          id: data["datos"][i]["id"],
          nombre: data["datos"][i]["nombre"],
          descripcion: data["datos"][i]["descripcion"],
          foto: data["datos"][i]["foto"]
        });
      }
    });
  }
}
