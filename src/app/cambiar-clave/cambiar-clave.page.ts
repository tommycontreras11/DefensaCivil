import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {

  claveAnterior = "";
  claveNueva = "";
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

  cambiarClave(){
    if(this.claveAnterior != "" &&  this.claveNueva != ""){
      let url = "https://adamix.net/defensa_civil/def/cambiar_clave.php";
      let postData = new FormData();
      console.log(localStorage.getItem("token"));
      postData.append("token", localStorage.getItem("token")!);
      postData.append("clave_anterior", this.claveAnterior);
      postData.append("clave_nueva", this.claveNueva);
      this.data = this.http.post(url, postData);

      this.data.subscribe(res => {
        if(res["exito"] === false){
          this.presentToast(res["mensaje"]);
          console.log(res);
        }else{
        this.presentToast(res["mensaje"]);
        console.log(res);
        }
      })

    }else{
      this.presentToast("Debes de llenar los campos");
    }
    
  }

}
