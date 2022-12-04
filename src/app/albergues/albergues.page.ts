import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {

  albergue: any[] = [];
  albergueDetalles: any[] = [];
  isModalOpen = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.albergues();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  albergues(){
    this.http.get("https://adamix.net/defensa_civil/def/albergues.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        this.albergue.push({
          ciudad: data["datos"][i]["ciudad"],
          codigo: data["datos"][i]["codigo"],
          edificio: data["datos"][i]["edificio"],
          coordinador: data["datos"][i]["coordinador"],
          telefono: data["datos"][i]["telefono"],
          capacidad: data["datos"][i]["capacidad"],
          lat: data["datos"][i]["lat"],
          lng: data["datos"][i]["lng"],
        });
      }
    });
  }

  Details(id:any){
    this.albergueDetalles.splice(0, this.albergueDetalles.length);
    this.http.get("https://adamix.net/defensa_civil/def/albergues.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        if(data["datos"][i]["codigo"] == id){
          this.albergueDetalles.push({
            ciudad: data["datos"][i]["ciudad"],
            codigo: data["datos"][i]["codigo"],
            edificio: data["datos"][i]["edificio"],
            coordinador: data["datos"][i]["coordinador"],
            telefono: data["datos"][i]["telefono"],
            capacidad: data["datos"][i]["capacidad"],
            lat: data["datos"][i]["lat"],
            lng: data["datos"][i]["lng"],
          });
          console.log(data["datos"][i]["coordinador"]);
        }
      }
      this.isModalOpen = true;
    });
  }
}
