import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './UI/layauts/default/default.component';
import { HomeComponent } from './UI/modules/home/home.component';
import { FullscreenComponent } from './UI/layauts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/modules/login/login.component';
import { RegisterComponent } from './UI/modules/register/register.component';
import { Defaultauth } from './UI/shared/guards/defaultauth';
import { ContactComponent } from './UI/modules/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [Defaultauth],
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path: 'fullscreen',
    component: FullscreenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
