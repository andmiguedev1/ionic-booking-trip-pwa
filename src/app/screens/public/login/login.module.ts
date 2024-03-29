import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { DisplayErrorComponent } from "./../../../components/display-error/display-error";
import { LoginPage } from "./login.page";

import { FacebookService } from "./../../../services/auth/facebook/facebook.service";

const routes: Routes = [
  {
    path: "",
    component: LoginPage,
  },
];

@NgModule({
  declarations: [DisplayErrorComponent, LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  providers: [FacebookService],
})
export class LoginPageModule {}
