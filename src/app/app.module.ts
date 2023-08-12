import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layauts/default/default.module';
import { FullscreenModule } from './UI/layauts/fullscreen/fullscreen.module';
import { Usergateway } from './domain/models/User/gateway/usergateway';
import { UserService } from './infraestructure/driven-adapter/services/user.service';
import { ProductGateway } from './domain/models/Products/gateway/productgateway';
import { ProductsService } from './infraestructure/driven-adapter/services/products/products.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule
  ],
  providers: [
    { provide: Usergateway, useClass: UserService},
    { provide: ProductGateway, useClass: ProductsService}], //inyeccion de dependencias
  bootstrap: [AppComponent]
})
export class AppModule { }
