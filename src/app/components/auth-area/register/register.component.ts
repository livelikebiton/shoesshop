import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { UserModel } from './../../../models/user.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    public user = new UserModel();

    constructor(
        private myAuthService: AuthService,
        private notify: NotifyService,
        private myRouter: Router) { }

    public async register() {
        try {
            await this.myAuthService.register(this.user);
            this.notify.success("You are registered :-)");
            this.myRouter.navigateByUrl("/home");
        }
        catch (err) {
            this.notify.error(err);
        }
    }


}
