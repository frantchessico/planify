import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { signUpCover } from 'src/app/images_url';
import { AuthService } from '../service/auth.service';
import {  ToastrService } from 'ngx-toastr';

@Component({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    
  ],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true
})
export class RegisterComponent {
  cover: string = signUpCover
  registerForm!: FormGroup

  constructor(
    private auth: AuthService,
    private fbuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
      this.registerForm = this.fbuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
  }



  async signUp(): Promise<any> {
    const { firstName, lastName, email, password } = this.registerForm.value;
    if(firstName.trim() === "" || firstName.length < 3) {
      return this.toastr.error("Please, enter valid value!")
    }

    if(firstName.trim() === "" || firstName.length < 3) {
      return this.toastr.error("Please, enter valid value!")
    }
    console.log(this.registerForm.value)
    const credentials = {
      name: `${firstName} ${lastName}`,
      email,
      password
    }
    try {
       await this.auth.createAccount(credentials)
       return this.router.navigate(['/dashboard'])
    } catch (error) {
        this.toastr.error("A user with the same email already exists on Planify")
        console.log(error)
        return error
    }
  }
}
