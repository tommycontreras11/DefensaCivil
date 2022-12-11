import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reportar-situaciones',
  templateUrl: './reportar-situaciones.page.html',
  styleUrls: ['./reportar-situaciones.page.scss'],
})
export class ReportarSituacionesPage implements OnInit {

  titulo = "";
  descripcion = "";
  foto = "";
  latitud = "";
  longitud = "";
  data: Observable<any> | undefined;

  constructor(public http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(result:any) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  reportarSituacion(){
    if(this.titulo != "" &&  this.descripcion != "" &&  this.foto != "" &&  this.latitud != "" &&  this.longitud != ""){
      let url = "https://adamix.net/defensa_civil/def/nueva_situacion.php";
      let postData = new FormData();

      postData.append("token", localStorage.getItem("token")!);
      postData.append("titulo", this.titulo);
      postData.append("descripcion", this.descripcion);
      postData.append("foto", this.foto);
      postData.append("latitud", this.latitud);
      postData.append("longitud", this.longitud);

      this.data = this.http.post(url, postData);

      this.data.subscribe(res => {
        if(res["exito"] === false){
          this.presentToast(res["exito"]);
          console.log(res);
        }else{
          this.presentToast("Se ha reportado exitosamente");
        }
      })

    }else{
      this.presentToast("Debes de llenar los campos");
    }
  }
}
