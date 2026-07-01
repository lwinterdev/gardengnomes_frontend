import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { TokenStorageService } from './token-storage.service';

export const authGuard: CanActivateFn = () => {

    return inject(TokenStorageService)
            .isLoggedIn();

};