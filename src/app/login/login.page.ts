import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  cedula = "";
  clave = "";
  data: Observable<any> | undefined;
  data2: any = [];
  
  constructor(public http: HttpClient, private toastController: ToastController, public router: Router) { }
  
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

  iniciarSesion(){
    if(this.cedula != "" &&  this.clave != ""){
      let url = "https://adamix.net/defensa_civil/def/iniciar_sesion.php";
      let postData = new FormData();

      postData.append("cedula", this.cedula);
      postData.append("clave", this.clave);
      this.data = this.http.post(url, postData);

      this.data.subscribe(res => {
        if(res["exito"] === false){
          this.presentToast("Cédula o contraseña incorrectos");
          console.log(res);
        }else{
          this.presentToast("Se ha iniciado exitosamente");
          localStorage.setItem("token", res["datos"]["token"]);
          console.log(localStorage.getItem("token"))
        }
      })

    }else{
      this.presentToast("Debes de llenar los campos");
    }
  }

}
