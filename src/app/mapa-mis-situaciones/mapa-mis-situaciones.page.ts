import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marker } from '../models/marker.models';
import { MapControllerService } from '../services/map-controller.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mapa-mis-situaciones',
  templateUrl: './mapa-mis-situaciones.page.html',
  styleUrls: ['./mapa-mis-situaciones.page.scss'],
})
export class MapaMisSituacionesPage implements OnInit {

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
        for (let i = 0; i < res.datos.length; i++) {
          var marker: Marker = {
            position: {
              lat: parseFloat(res["datos"][i]["latitud"]),
              lng: parseFloat(res["datos"][i]["longitud"]),
            },
            title: res["datos"][i]["title"]
          }
          this.map.addMarker(marker);
          this.router.navigate(['./mapa-situaciones']);
        }
        }
      
    })

    }
  

}
