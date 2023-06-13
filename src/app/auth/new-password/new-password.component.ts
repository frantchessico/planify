import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  standalone: true
})
export class NewPasswordComponent {

}
