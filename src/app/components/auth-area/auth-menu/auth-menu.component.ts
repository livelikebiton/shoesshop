import { UserModel } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import store from 'src/app/redux/store';
import { Unsubscribe } from 'redux';

@Component({
    selector: 'app-auth-menu',
    templateUrl: './auth-menu.component.html',
    styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {

    public user: UserModel;
    private unsubscribeMe: Unsubscribe;

    constructor() { }

    ngOnInit(): void {
        this.unsubscribeMe = store.subscribe(() => {
            this.user = store.getState().authState.user;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribeMe();
    }


}
