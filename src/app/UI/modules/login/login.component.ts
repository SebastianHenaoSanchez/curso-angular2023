import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder){

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
      alert('formulario valido')
    } else {
      alert('formulario invalido')
    }
  }

  public get c(){
    return this.loginForm.controls;
  }
}


