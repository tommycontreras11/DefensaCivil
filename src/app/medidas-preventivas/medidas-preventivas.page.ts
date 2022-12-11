import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medidas-preventivas',
  templateUrl: './medidas-preventivas.page.html',
  styleUrls: ['./medidas-preventivas.page.scss'],
})
export class MedidasPreventivasPage implements OnInit {

  medidas: any[] = [];
  medidasDetalles: any[] = [];
  isModalOpen = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.listarMedidasPreventivas();
  }
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  listarMedidasPreventivas(){
    this.http.get("https://adamix.net/defensa_civil/def/medidas_preventivas.php").subscribe((data:any) => {
      
      for(let i = 0; i < data.datos.length; i++){
        console.log(data["datos"][i]["id"]);
        this.medidas.push({
          id: data["datos"][i]["id"],
          titulo: data["datos"][i]["titulo"],
          descripcion: data["datos"][i]["descripcion"],
          foto: data["datos"][i]["foto"]
        });
      }

    });
  }

  verDetalles(id:any){
    this.http.get("https://adamix.net/defensa_civil/def/medidas_preventivas.php").subscribe((data:any) => {
      
      for(let i = 0; i < data.datos.length; i++){
        console.log(data["datos"][i]["id"]);
        if(data["datos"][i]["id"] == id){
          this.medidasDetalles.push(data["datos"][i]["descripcion"]);
        }
      }
      this.isModalOpen = true;
    });
  }
}
