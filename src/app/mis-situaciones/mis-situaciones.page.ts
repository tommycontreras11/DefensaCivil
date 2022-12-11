import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-situaciones',
  templateUrl: './mis-situaciones.page.html',
  styleUrls: ['./mis-situaciones.page.scss'],
})
export class MisSituacionesPage implements OnInit {

  situaciones: any[] = [];
  situacionDetalles: any[] = [];
  data: Observable<any> | undefined;
  isModalOpen = false;

  constructor(public http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
    this.listarSituaciones();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async presentToast(result: any) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  listarSituaciones() {

    let url = "https://adamix.net/defensa_civil/def/situaciones.php";
    let postData = new FormData();

    postData.append("token", localStorage.getItem("token")!);

    this.data = this.http.post(url, postData);

    this.data.subscribe(res => {
      if (res["exito"] === false) {
        this.presentToast("Ha ocurrido un error");
      } else {
        for (let i = 0; i < res.datos.length; i++) {
          this.situaciones.push({
            id: res["datos"][i]["id"],
            voluntario: res["datos"][i]["voluntario"],
            titulo: res["datos"][i]["titulo"],
            descripcion: res["datos"][i]["descripcion"],
            foto: res["datos"][i]["foto"]
          });
        }
      }
    })
  }
  verDetalles(id: any) {
    this.situacionDetalles.splice(0, this.situacionDetalles.length);
    
    let url = "https://adamix.net/defensa_civil/def/situaciones.php";
    let postData = new FormData();

    postData.append("token", localStorage.getItem("token")!);

    this.data = this.http.post(url, postData);

    this.data.subscribe(res => {
      if (res["exito"] === false) {
        this.presentToast("Ha ocurrido un error");
      } else {
        for (let i = 0; i < res.datos.length; i++) {
          if(res["datos"][i]["id"] == id){
            this.situacionDetalles.push({
              id: res["datos"][i]["id"],
              voluntario: res["datos"][i]["voluntario"],
              titulo: res["datos"][i]["titulo"],
              descripcion: res["datos"][i]["descripcion"],
              foto: res["datos"][i]["foto"]
            });
          }
        }
        this.isModalOpen = true;
      }
    })
  }
}
