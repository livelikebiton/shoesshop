import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { CredentialsModel } from './../../../models/credentials.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public credentials = new CredentialsModel();

    constructor(
        private myAuthService: AuthService,
        private notify: NotifyService,
        private myRouter: Router) { }

    public async login() {
        try{
            await this.myAuthService.login(this.credentials);
            this.notify.success("you are logged in  :-)");
            this.myRouter.navigateByUrl("/home");
        }
        catch (err) {
            this.notify.error(err)
        }
    }

}
