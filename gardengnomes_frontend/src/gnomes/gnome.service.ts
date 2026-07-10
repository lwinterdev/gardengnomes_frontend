import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

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

    getAll(
    page: number,
    size: number,
    sort: string,
    search: string
  ): Observable<Gnome[]> {

    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort', sort)
      .set('search', search);

    return this.http.get<Gnome[]>(this.api, { params });
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