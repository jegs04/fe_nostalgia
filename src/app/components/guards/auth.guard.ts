import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { IAuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: IAuthService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isUserLoggedIn$.pipe(
            take(1),
            map((res) => {
                if (res !== null && res.success) return true;

                this.router.navigate(['/login']);
                return false;
            })
        );
    }
}
