import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

    save(token: string) {
        localStorage.setItem("jwt", token);
    }

    get(): string | null {
        return localStorage.getItem("jwt");
    }

    clear() {
        localStorage.removeItem("jwt");
    }

    isLoggedIn(): boolean {
        return this.get() != null;
    }

}