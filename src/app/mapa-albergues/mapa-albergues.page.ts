import { Component, OnInit } from '@angular/core';
import { Marker } from '../models/marker.models';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CoordInfo } from '../models/coord-info.model';
import { MapControllerService } from '../services/map-controller.service';

declare var google: any;
let coordInfo: CoordInfo;

@Component({
  selector: 'app-mapa-albergues',
  templateUrl: './mapa-albergues.page.html',
  styleUrls: ['./mapa-albergues.page.scss'],
})
export class MapaAlberguesPage implements OnInit {

  map = null;
  data: Observable<any> | undefined;
  //markers: Marker[] = [];

  marker: Marker = {
    position: {
      lat: 4.658383846282959,
      lng: -74.09394073486328,
    },
    title: 'Parque Simón Bolivar'
  }

  constructor(public http: HttpClient, private toastController: ToastController, private mapC: MapControllerService) { }

  ngOnInit() {
    this.marker = this.mapC.getMarker()!;
    this.loadMap();
    /*
    this.loadMap();
    this.getData();*/
  }

  async presentToast(result: any) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  /*
  getData() {
    let url = "https://adamix.net/defensa_civil/def/situaciones.php";
    let postData = new FormData();

    postData.append("token", localStorage.getItem("token")!);

    this.data = this.http.post(url, postData);

    this.data.subscribe(res => {
      if (res["exito"] === false) {
        this.presentToast("Ha ocurrido un error");
      } else {
        for (let i = 0; i < res.datos.length; i++) {
          this.markers.push({
            position: {
              lat: res["datos"][i]["latitud"],
              lng: res["datos"][i]["longitud"],
            },
            title: res["datos"][i]["title"]
          });
        }
      }
    })
  }
  */

  loadMap() {
    // create a new map by passing HTMLElement
    const input = document.getElementById('map');
    const mapEle: HTMLElement = input!;
    // create LatLng object
    const myLatLng = {lat: this.marker.position.lat, lng: this.marker.position.lng};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.addMarker(this.marker);
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker: Marker){
    var mapMarker =  new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
    this.addInfoToMarker(marker, mapMarker);
    return mapMarker;
  }

  addInfoToMarker(marker: Marker, mapMarker: any){
    this.mapC.getHttpData(marker).subscribe((coord:any) => {
      coordInfo = {
        country: coord.items[0].address.countryName,
        city: coord.items[0].address.city,
        marker: marker
      };

      let infoWindowContent = `<div id="content" style="color: black">
                              <h2 id="firstHeading" class="firstHeading">${marker.title}</h2>
                              <p>País ${coordInfo.country}</p>
                              <p>Ciudad ${coordInfo.city}</p>
                              </div>`;
      let infoWindow = new google.maps.InfoWindow({content: infoWindowContent});

      mapMarker.addListener('click', () => {
        infoWindow.open(this.map, mapMarker);
      })

    })
  }
}
