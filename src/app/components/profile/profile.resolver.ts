import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { catchError, Observable, of, take, tap, throwError } from 'rxjs';
import { ProfileModel } from 'src/app/api-client/api-client';
import { IAuthService } from '../services/auth.service';
import { IProfileService } from '../services/profile.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<any> {
    constructor(
        private profileService: IProfileService,
        private authService: IAuthService,
        private router: Router
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ProfileModel> {
        return this.profileService.getUserProfile().pipe(
            catchError((error) => {
                console.log(error);
                if (error.status === 401 || error.statusCode === 401) {
                    this.authService.userLogOut();
                    this.router.navigate(['/login']);
                }
                return of(null);
            })
        );
    }
}
