import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HomeTroupesComponent } from './component/troupes/home-troupes/home-troupes.component';
import { HomeCampementComponent } from './component/campements/home-campement/home-campement.component';
import { HomeArtisansComponent } from './component/Artisans/home-artisans/home-artisans.component';
import { HomeAnimationComponent } from './component/Animation/home-animation/home-animation.component';
import { HomeMarcheComponent } from './component/marche/home-marche/home-marche.component';
import { HomePartenairesComponent } from './component/partenaires/home-partenaires/home-partenaires.component';
import { LoginComponent } from './component/auth/login/login.component';
import { UsersComponent } from './component/users/users.component';
import { PasswordComponent } from './component/auth/password/password.component';

export const routes: Routes = [
    {path : 'createpassword', component : PasswordComponent},
    {path : 'users', component : UsersComponent},
    {path : 'homePartenaires', component : HomePartenairesComponent},
    {path : 'homeMarche', component : HomeMarcheComponent},
    {path : 'homeAnimations', component : HomeAnimationComponent},
    {path : 'homeArtisans', component : HomeArtisansComponent},
    {path : 'homeCampements', component : HomeCampementComponent},
    {path : 'homeTroupes', component : HomeTroupesComponent},
    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : '', component : LoginComponent},
    {path : '**', component : LoginComponent}
];
