import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';
import { TokenStorageService } from '../../token-storage.service';



@Component({
    selector:'app-login',
    standalone:true,
    imports:[FormsModule],
    templateUrl:'./login.component.html',
    styleUrl:'./login.component.css'
})
export class LoginComponent{

    username="";

    password="";

    constructor(

        private readonly auth:AuthService,

        private readonly storage:TokenStorageService,

        private readonly router:Router

    ){}

    login(){

        this.auth.login({

            username:this.username,

            password:this.password

        }).subscribe(response=>{

            this.storage.save(response.token);

            this.router.navigate(['/']);

        });

    }

}