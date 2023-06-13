import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private auth: AuthService) {}

ngOnInit(): void {
  this.auth.getUser()
  .then(user => {
    console.log(user.status)
  })

}

logOut() {
  this.auth.logOutUser()
}
}
