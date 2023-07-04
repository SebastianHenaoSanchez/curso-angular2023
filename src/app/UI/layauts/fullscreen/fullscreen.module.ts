import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen.component';
import { LoginComponent } from '../../modules/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../modules/register/register.component';



@NgModule({
  declarations: [
    FullscreenComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class FullscreenModule { }
