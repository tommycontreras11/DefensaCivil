import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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
  array: any[] = [];
  array2: any[] = [];
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

  Registro(){
    if(this.cedula != "" && this.nombre != "" && this.apellido != "" && this.telefono != "" && this.correo != "" &&  this.clave != ""){
      let body = {
        "datos": {
          cedula: this.cedula,
          nombre: this.nombre,
          apellido: this.apellido,
          clave: this.clave,
          correo: this.correo,
          telefono: this.telefono
        }
        
      }
      const header = new HttpHeaders({
        'Accept':'application/json',
        'Content-Type':'application/json'});

      let url = "https://adamix.net/defensa_civil/def/registro.php";

      this.http.post(url, JSON.stringify(body), {responseType:"json"}).subscribe((res) => {
        console.log(res);
      })

    }else{
      this.presentToast("Debes de llenar los campos");
    }
  }

  Registrarse(data:any){
    var url = "https://adamix.net/defensa_civil/def/registro.php";
    console.log("Datos " + JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
