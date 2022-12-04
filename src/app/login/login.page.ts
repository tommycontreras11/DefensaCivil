import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cedula = "";
  clave = "";

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

  Loguearse(){
    if(this.cedula != "" &&  this.clave != ""){
      let body = {
        cedula : this.cedula,
        clave : this.clave
      }
      console.log(body);
      this.http.post("https://adamix.net/defensa_civil/def/iniciar_sesion.php", JSON.stringify(body)).subscribe((data:any) => {
        if(data["exito"] === false){
          this.presentToast("Ha ocurrido un error");
        }else{
        this.presentToast("Se ha iniciado exitosamente");
        }
      })
    }else{
      this.presentToast("Debes de llenar los campos");
    }
  }

}
