import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  miFormulario: FormGroup = this.fb.group({
    email: ['pgrillo@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  login(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid); //devuelve true o false si está rellenado el form o no
    this.router.navigateByUrl('/dashboard');
  }
}
