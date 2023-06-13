import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { resetPasswordCover } from 'src/app/images_url';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true
})
export class ResetPasswordComponent {
  public cover: string = resetPasswordCover
  public resetPasswordForm!: FormGroup

  constructor(
    private auth: AuthService,
    private fbuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
      this.resetPasswordForm = this.fbuilder.group({
        email: ['', Validators.required]
      })
  }
  async resetPassword() {
    const { email } = this.resetPasswordForm.value
    try {
      await this.auth.resetPassword(email)
      this.toastr.success(`Check your inbox, we've sent you an email to reset your password.`)
    } catch (error) {
      console.log(error)
      this.toastr.error('Something went wrong, please try again!')
    }
  }
}
