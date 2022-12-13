import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

let routes: Routes = [];

if(localStorage.getItem("token") != null){
  routes = [
    {
      path: '',
      redirectTo: 'noticias',
      pathMatch: 'full'
    },
    {
      path: 'folder/:id',
      loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    },
    {
      path: 'noticias',
      loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
    },
    {
      path: 'videos',
      loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
    },
    {
      path: 'albergues',
      loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'registrarse',
      loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
    },
    {
      path: 'historia',
      loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'servicios',
      loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
    },
    {
      path: 'recuperar-clave',
      loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
    },
    {
      path: 'recuperar-clave',
      loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
    },
    {
      path: 'acerca-de',
      loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
    },
    {
      path: 'reportar-situaciones',
      loadChildren: () => import('./reportar-situaciones/reportar-situaciones.module').then( m => m.ReportarSituacionesPageModule)
    },
    {
      path: 'mis-situaciones',
      loadChildren: () => import('./mis-situaciones/mis-situaciones.module').then( m => m.MisSituacionesPageModule)
    },
    {
      path: 'mapa-situaciones',
      loadChildren: () => import('./mapa-situaciones/mapa-situaciones.module').then( m => m.MapaSituacionesPageModule)
    },
    {
      path: 'cambiar-clave',
      loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule)
    },
    {
      path: 'medidas-preventivas',
      loadChildren: () => import('./medidas-preventivas/medidas-preventivas.module').then( m => m.MedidasPreventivasPageModule)
    },
    {
      path: 'miembros',
      loadChildren: () => import('./miembros/miembros.module').then( m => m.MiembrosPageModule)
    },
    {
      path: 'mapa-mis-situaciones',
      loadChildren: () => import('./mapa-mis-situaciones/mapa-mis-situaciones.module').then( m => m.MapaMisSituacionesPageModule)
    },
    {
      path: 'mapa-albergues',
      loadChildren: () => import('./mapa-albergues/mapa-albergues.module').then( m => m.MapaAlberguesPageModule)
    },
    {
      path: 'mapa-todos-albergues',
      loadChildren: () => import('./mapa-todos-albergues/mapa-todos-albergues.module').then( m => m.MapaTodosAlberguesPageModule)
    },
    {
      path: 'cerrar-sesion',
      loadChildren: () => import('./cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
    },

  ];
}else{
  routes = [
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: 'folder/:id',
      loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    },
    {
      path: 'noticias',
      loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
    },
    {
      path: 'videos',
      loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
    },
    {
      path: 'albergues',
      loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'registrarse',
      loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
    },
    {
      path: 'historia',
      loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'servicios',
      loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
    },
    {
      path: 'recuperar-clave',
      loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
    },
    {
      path: 'recuperar-clave',
      loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
    },
    {
      path: 'acerca-de',
      loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
    },
    {
      path: 'reportar-situaciones',
      loadChildren: () => import('./reportar-situaciones/reportar-situaciones.module').then( m => m.ReportarSituacionesPageModule)
    },
    {
      path: 'mis-situaciones',
      loadChildren: () => import('./mis-situaciones/mis-situaciones.module').then( m => m.MisSituacionesPageModule)
    },
    {
      path: 'mapa-situaciones',
      loadChildren: () => import('./mapa-situaciones/mapa-situaciones.module').then( m => m.MapaSituacionesPageModule)
    },
    {
      path: 'cambiar-clave',
      loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule)
    },
    {
      path: 'medidas-preventivas',
      loadChildren: () => import('./medidas-preventivas/medidas-preventivas.module').then( m => m.MedidasPreventivasPageModule)
    },
    {
      path: 'miembros',
      loadChildren: () => import('./miembros/miembros.module').then( m => m.MiembrosPageModule)
    },
    {
      path: 'mapa-mis-situaciones',
      loadChildren: () => import('./mapa-mis-situaciones/mapa-mis-situaciones.module').then( m => m.MapaMisSituacionesPageModule)
    },
    {
      path: 'mapa-albergues',
      loadChildren: () => import('./mapa-albergues/mapa-albergues.module').then( m => m.MapaAlberguesPageModule)
    },
    {
      path: 'mapa-todos-albergues',
      loadChildren: () => import('./mapa-todos-albergues/mapa-todos-albergues.module').then( m => m.MapaTodosAlberguesPageModule)
    },
    {
      path: 'cerrar-sesion',
      loadChildren: () => import('./cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
    },
  ];
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
