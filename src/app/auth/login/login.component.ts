import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterEvent, RouterFeature, RouterModule } from '@angular/router';
import { signInCover } from 'src/app/images_url';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  public cover: string = signInCover;
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fbuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {

    this.initForm()

  }

  async loginUser(): Promise<any> {
    const { email, password } = this.loginForm.value
    const credentials = {
      email,
      password
    }

    try {
      const user = await this.authService.authentication(credentials);
      console.log(user)
      return this.router.navigate(['dashboard'])
    } catch (error) {
      console.log(error)
      return this.toastr.error('Something went wrong! Make sure you are enter the correct credentials.')
    }
  }

  initForm() {
    this.loginForm = this.fbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async user() {
  try {
    const { email, $id } =  await this.authService.getUser();
    console.log(email)
  } catch (error) {
       console.log(error)
  }
  }



}

