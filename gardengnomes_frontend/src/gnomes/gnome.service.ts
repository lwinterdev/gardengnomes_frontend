import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Gnome } from './models/gnome.model';

import { CreateGnomeRequest } from './dto/create-gnome-request';

import { UpdateGnomeRequest } from './dto/update-gnome-request';

@Injectable({
    providedIn:'root'
})
export class GnomeService{

    private readonly api = "http://localhost:8080/gnomes";

    constructor(private readonly http:HttpClient){}

    getAll():Observable<Gnome[]>{

        return this.http.get<Gnome[]>(this.api);

    }

    getById(id:string):Observable<Gnome>{

        return this.http.get<Gnome>(`${this.api}/${id}`);

    }

    create(request:CreateGnomeRequest):Observable<Gnome>{

        return this.http.post<Gnome>(this.api,request);

    }

    update(id:string,request:UpdateGnomeRequest):Observable<Gnome>{

        return this.http.put<Gnome>(
            `${this.api}/${id}`,
            request
        );

    }

    delete(id:string){

        return this.http.delete(`${this.api}/${id}`);

    }

}