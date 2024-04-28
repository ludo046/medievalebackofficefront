import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule, NgForOf, NgIf } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { AuthInterceptor } from "./auth-interceptor";
import { HomeAnimationComponent } from "./component/Animation/home-animation/home-animation.component";
import { HomeArtisansComponent } from "./component/Artisans/home-artisans/home-artisans.component";
import { LoginComponent } from "./component/auth/login/login.component";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { PasswordComponent } from "./component/auth/password/password.component";
import { HomeCampementComponent } from "./component/campements/home-campement/home-campement.component";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { NgxDropzoneModule } from "ngx-dropzone";
import { AddUserComponent } from "./component/dialog/add-user/add-user.component";
import { HomeComponent } from "./component/home/home.component";
import { NavComponent } from "./component/nav/nav.component";
import { HomeMarcheComponent } from "./component/marche/home-marche/home-marche.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomePartenairesComponent } from "./component/partenaires/home-partenaires/home-partenaires.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({  
    declarations: [
        AppComponent,
        HomeAnimationComponent,
        HomeArtisansComponent,
        LoginComponent,
        PasswordComponent,
        HomeCampementComponent,
        AddUserComponent,
        HomeComponent,
        HomeMarcheComponent,
        NavComponent,
        HomePartenairesComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule, 
        RouterOutlet,
        MatFormFieldModule, 
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle,
        MatIcon,
        NgxDropzoneModule,
        NgForOf,
        MatFormField,
        MatLabel,
        NavComponent, 
        RouterLink,
        NgIf,
        MatToolbarModule,
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},HttpClient],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  