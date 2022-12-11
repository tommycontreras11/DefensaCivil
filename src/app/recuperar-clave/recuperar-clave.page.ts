import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {

  cedula = "";
  correo = "";
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

  recuperarClave(){
    if(this.cedula != "" &&  this.correo != ""){
      let url = "https://adamix.net/defensa_civil/def/recuperar_clave.php";
      let postData = new FormData();

      postData.append("cedula", this.cedula);
      postData.append("correo", this.correo);
      this.data = this.http.post(url, postData);

      this.data.subscribe(res => {
        if(res["exito"] === false){
          this.presentToast("Ha ocurrido un error");
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
