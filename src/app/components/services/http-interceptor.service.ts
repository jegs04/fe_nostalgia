import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const resetToken = JSON.parse(sessionStorage.getItem('rt'));

        if (resetToken) {
            if (request.url.includes('resetPassword')) {
                const modRequest = request.clone({
                    withCredentials: true,
                    setHeaders: {
                        Authorization: `Bearer ${resetToken.token}`,
                    },
                });
                return next.handle(modRequest);
            }
        }

        request = request.clone({
            withCredentials: true,
        });

        return next.handle(request);
    }
}

export interface TokenModel {
    token: string;
    success: boolean;
}
