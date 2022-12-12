import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(public http: HttpClient) { }

  noticia: any[] = [];
  noticiaDetalles: any[] = [];
  isModalOpen = false;

  ngOnInit() {
    //localStorage.clear();
    console.log(localStorage.getItem("token"));
    this.listarNoticias();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  listarNoticias(){
    this.http.get("https://adamix.net/defensa_civil/def/noticias.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        this.noticia.push({
          id: data["datos"][i]["id"],
          titulo: data["datos"][i]["titulo"],
          fecha: data["datos"][i]["fecha"],
          contenido: data["datos"][i]["contenido"],
          foto: data["datos"][i]["foto"],
        });
      }
    })
  }

  verDetalles(id:any){
    this.noticiaDetalles.splice(0, this.noticiaDetalles.length)
    this.http.get("https://adamix.net/defensa_civil/def/noticias.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        if(data["datos"][i]["id"] == id){
          console.log(data["datos"][i]["contenido"]);
          this.noticiaDetalles.push(data["datos"][i]["contenido"]);
        }
      }
      this.isModalOpen = true;
    })
    
    
    
    /*
    for(let i = 0; i < this.noticia.length; i++){
      if(console.log(this.noticia[id]["id"]) == id){
        console.log(this.noticia[id]["contenido"]);
      }
    }*/
  }
}
