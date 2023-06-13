import { Injectable } from '@angular/core';
import { Account, ID } from 'appwrite';
import { appwrite } from 'src/app/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public account = new Account(appwrite)
  constructor() { }

  createAccount(credentials: { name: string, email: string, password: string }) {
    const { name, email, password } = credentials;

    return this.account.create(
      ID.unique(),
      email,
      password,
      name,

    )
  }

  authentication(credentials: { email: string, password: string }) {
    const { email, password } = credentials
    return this.account.createEmailSession(email, password)
  }

  resetPassword(email: string) {
    return this.account.createRecovery(email, 'http://localhost:4200/auth/new-password')
  }

  logOutUser() {
    return this.account.deleteSessions()
  }
  getUser() {
    return this.account.get()
  }

}
