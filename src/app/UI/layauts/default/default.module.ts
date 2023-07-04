import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from '../../modules/contact/contact.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule //se importan los componentes shared comiunes como header, footer etc
  ]
})
export class DefaultModule { }
