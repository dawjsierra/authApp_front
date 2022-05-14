import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {


  miFormulario: FormGroup = this.fb.group({
    name: ['Javier',[Validators.required]],
    email: ['pgrillo@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(4)]]
  })



  constructor(private fb: FormBuilder, private router: Router) { }

  register(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    this.router.navigateByUrl('/dashboard');
  }

}
