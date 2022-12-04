import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  video: any[] = [];

  constructor(public http: HttpClient, private dom: DomSanitizer) { }

  ngOnInit() {
    this.listarVideos();
  }

  listarVideos(){
    this.http.get("https://adamix.net/defensa_civil/def/videos.php").subscribe((data:any) => {
      for(let i = 0; i < data.datos.length; i++){
        console.log(data["datos"][i]["titulo"]);
        if(data["datos"][i]["descripcion"] == null){
          this.video.push({
            id: data["datos"][i]["id"],
            fecha: data["datos"][i]["fecha"],
            titulo: data["datos"][i]["titulo"],
            descripcion: "",
            link: data["datos"][i]["link"]
          });
        }else{
          this.video.push({
            id: data["datos"][i]["id"],
            fecha: data["datos"][i]["fecha"],
            titulo: data["datos"][i]["titulo"],
            descripcion: data["datos"][i]["descripcion"],
            link: data["datos"][i]["link"]
          });
        }
      }
    });
  }

  sanitize(vid:any){
    return this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${vid}`);
  }
}
