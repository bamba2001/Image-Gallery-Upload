import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ParametresComponent } from './parametres/parametres.component';
import { PhotosComponent } from './photos/photos.component';
import { RegisterComponent } from './register/register.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {path: 'whateva', component: XyzComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'parametres', component: ParametresComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'photos', component: PhotosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
