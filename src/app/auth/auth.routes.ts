import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';

export const AuthRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'new-account', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'new-password', component: NewPasswordComponent}
];


