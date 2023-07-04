import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layauts/default/default.module';
import { FullscreenModule } from './UI/layauts/fullscreen/fullscreen.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
