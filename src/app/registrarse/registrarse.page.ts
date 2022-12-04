import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})

export class RegistrarsePage implements OnInit {
  
  cedula = "";
  nombre = "";
  apellido = "";
  correo = "";
  clave = "";
  telefono = "";

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

  crearCuenta(){
    if(this.cedula != "" && this.nombre != "" && this.apellido != "" && this.telefono != "" && this.correo != "" &&  this.clave != ""){

      let url = "https://adamix.net/defensa_civil/def/registro.php";
      let postData = new FormData();

      postData.append("cedula", this.cedula);
      postData.append("nombre", this.nombre);
      postData.append("apellido", this.apellido);
      postData.append("clave", this.clave);
      postData.append("correo", this.correo);
      postData.append("telefono", this.telefono);
      this.data = this.http.post(url, postData);

      this.data.subscribe(res => {
          console.log(res);
      })

    }else{
      this.presentToast("Debes de llenar los campos");
    }
  }
}
