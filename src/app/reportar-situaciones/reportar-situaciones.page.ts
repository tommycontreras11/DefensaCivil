import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-reportar-situaciones',
  templateUrl: './reportar-situaciones.page.html',
  styleUrls: ['./reportar-situaciones.page.scss'],
})
export class ReportarSituacionesPage implements OnInit {

  titulo = "";
  descripcion = "";
  foto:string = "";
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

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // Here you get the image as result.
    const theActualPicture = image.dataUrl;
    this.foto = image.dataUrl!;
    console.log(this.foto);
  }

  reportarSituacion(){
    if(this.titulo != "" &&  this.descripcion != "" &&  this.foto != "" &&  this.latitud != "" &&  this.longitud != ""){
      let url = "https://adamix.net/defensa_civil/def/nueva_situacion.php";
      let postData = new FormData();

      postData.append("titulo", this.titulo);
      postData.append("descripcion", this.descripcion);
      postData.append("foto", this.foto);
      postData.append("latitud", this.latitud);
      postData.append("longitud", this.longitud);
      postData.append("token", localStorage.getItem("token")!);

      this.data = this.http.post(url, postData);

      this.data.subscribe(res => {
        if(res["exito"] === false){
            this.presentToast("Ha ocurrido un error");
        }else{
          this.presentToast("Se ha reportado exitosamente");
        }
      })

    }else{
      this.presentToast("Debes de llenar los campos");
    }
  }
}
