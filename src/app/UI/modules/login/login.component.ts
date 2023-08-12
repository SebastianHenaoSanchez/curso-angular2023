import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserUseCase } from '../../../domain/models/User/usecase/userUseCase';
import { User } from 'src/app/domain/models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//OnInit se ejecuta mientras se esta inicializando el componente
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  public validationMessages = {
    email: [
      { type: 'required', message: 'Campo email es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Campo password es requerido' },
      { type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres'}
    ]
    
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private _userUseCase : UserUseCase ){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',
          [
            Validators.required,
            Validators.email
          ]

        ],
        password: ['',
          [
            Validators.required,
            //Validators.minLength(6),
            Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
          ]
        ]

      }
    )
  }

  login () {

    if (this.loginForm.valid){
      var correo = this.loginForm.controls['email'].value;
      var contraseña = this.loginForm.controls['password'].value;

      this._userUseCase.login(correo, contraseña).subscribe((response:User) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);

      });
    } else {
      alert('formulario invalido')
    }
  }

  public get c(){
    return this.loginForm.controls;
  }
}


