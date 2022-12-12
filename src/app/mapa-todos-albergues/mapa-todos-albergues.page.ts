import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marker } from '../models/marker.models';
import { MapControllerService } from '../services/map-controller.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mapa-todos-albergues',
  templateUrl: './mapa-todos-albergues.page.html',
  styleUrls: ['./mapa-todos-albergues.page.scss'],
})
export class MapaTodosAlberguesPage implements OnInit {

  constructor(public http: HttpClient, private toastController: ToastController, private router: Router, private map: MapControllerService) { }
  
  data: Observable<any> | undefined;

  ngOnInit() {
    this.sendMarker();
  }

  async presentToast(result: any) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  async sendMarker(){
    let url = "https://adamix.net/defensa_civil/def/situaciones.php";
    let postData = new FormData();

    postData.append("token", localStorage.getItem("token")!);

    this.data = this.http.post(url, postData);

    this.data.subscribe(res => {
      if (res["exito"] === false) {
        this.presentToast("Ha ocurrido un error");
      } else {

          var marker: Marker = {
            position: {
              lat: -69.89178,
              lng: 18.47893,
            },
            title: "Polideportivo San Carlos"
          }
          this.map.addMarker(marker);
          this.router.navigate(['./mapa-albergues']);
        }
        
      
    })

    }
  /*
  async sendMarker(){
    let url = "https://adamix.net/defensa_civil/def/albergues.php";
    
    this.http.get(url).subscribe((data:any) => {

      for(let i = 0; i < data.datos.length; i++){
          var marker: Marker = {
            position: {
              lat: parseFloat(data["datos"][0]["lat"]),
              lng: parseFloat(data["datos"][0]["lng"]),
            },
            title: data["datos"][0]["edificio"]
          }
          console.log("Lat: " + data["datos"][i]["edificio"]);
          this.map.addMarker(marker);
          this.router.navigate(['./mapa-albergues']);
        }
      

    });

    }*/
}
