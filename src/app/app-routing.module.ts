import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: NavbarComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'dashboard', loadChildren: async() => (await import('src/app/dashboard/dashboard.routes')).dashRoutes}
  ]},
  {path: 'auth', loadChildren: async() => (await import('src/app/auth/auth.routes')).AuthRoutes, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
