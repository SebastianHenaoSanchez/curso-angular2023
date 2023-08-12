import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm! : FormGroup;
  public validationMessages = {
    name: [
      { type: 'required', message: 'Campo name es requerido' },
      //{ type: 'string', message: 'Este campo es de tipo string' }
    ],
    lastName: [
      { type: 'required', message: 'Campo lastname es requerido' },
    ],
    age: [
      { type: 'required', message: 'Campo age es requerido' },
    ],
    email: [
      { type: 'required', message: 'Campo email es requerido' },
      { type: 'email', message: 'Este campo es de tipo email' }
    ],
    password: [
      { type: 'required', message: 'Campo password es requerido' },
      { type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres'},

    ],
    repeatPassword: [
      { type: 'required', message: 'Campo repeat password es requerido' },
      { type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres'},
    ]
    
  }
  constructor(private formBuilder: FormBuilder, private router:Router, private http:HttpClient){

  }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group(
        {
          name: ['',
            [
              Validators.required,
              //Validators.email
            ]
  
          ],
          lastName: ['',
            [
              Validators.required,
            ]
  
          ],
          age: ['',
            [
              Validators.required,
            ]
  
          ],
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
          ],
          repeatPassword: ['',
            [
              Validators.required,
              //Validators.minLength(6),
              Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
            ]
          ]
  
        }, { validator: this.checkPasswords } 
      )
  }

  checkPasswords(group: FormGroup){
    let password = group.controls['password'].value;
    let confirmPassword = group.controls['repeatPassword'].value;
    return password === confirmPassword ? null : {notSame:true};

  }

  register() {
    if (this.registerForm.valid) {
      var name =this.registerForm.controls['name'].value;
      var lastName =this.registerForm.controls['lastName'].value;
      var age =this.registerForm.controls['age'].value;

      const headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('mi-header', 'mi-header-value')

      this.http.post('https://dummyjson.com/users/add', { firstName: name, lastName, age}, { headers }).subscribe((data: any) => {
        console.log(data);
      });
      this.router.navigate(['fullscreen/login']);
    } else {
      alert('formulario invalido')
    }
  }

  public get c(){
    return this.registerForm.controls;
  }

}
