import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {

  miembros: any[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.listarMiembros();
  }

  listarMiembros(){
    this.http.get("https://adamix.net/defensa_civil/def/miembros.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        this.miembros.push({
          id: data["datos"][i]["id"],
          nombre: data["datos"][i]["nombre"],
          cargo: data["datos"][i]["cargo"],
          foto: data["datos"][i]["foto"]
        });
      }
    });
  }

}
