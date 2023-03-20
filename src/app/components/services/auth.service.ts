import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    catchError,
    map,
    Observable,
    of,
    take,
    throwError,
} from 'rxjs';
import {
    ApiClient,
    ProblemDetails,
    LoginResponseModel,
} from 'src/app/api-client/api-client';

@Injectable()
export abstract class IAuthService {
    abstract get displayLogout$(): Observable<boolean>;
    abstract get isUserLoggedIn$(): Observable<LoginResponseModel>;
    public abstract signIn(
        username: string,
        password: string
    ): Observable<LoginResponseModel | ProblemDetails>;
    public abstract userLogOut(): void;
    public abstract forgotPassword(email: string);
    public abstract resetPassword(token: string, password: string);
}

@Injectable()
export class AuthService extends IAuthService {
    private readonly AUTH_STATUS = 'fe';
    _isUserLoggedInSubject: BehaviorSubject<LoginResponseModel> =
        new BehaviorSubject<LoginResponseModel>(
            JSON.parse(sessionStorage.getItem(this.AUTH_STATUS))
        );
    _displayLogoutSubject: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(
            JSON.parse(sessionStorage.getItem('btn' || 'false'))
        );

    get isUserLoggedIn$(): Observable<LoginResponseModel> {
        return this._isUserLoggedInSubject.asObservable();
    }

    get displayLogout$(): Observable<boolean> {
        return this._displayLogoutSubject.asObservable();
    }

    constructor(private apiClient: ApiClient) {
        super();
    }
    public signIn(username: string, password: string) {
        return this.apiClient
            .userLogin({ userName: username, password: password })
            .pipe(
                take(1),
                map((res) => {
                    if (res.success && res.token == 'Ok') {
                        sessionStorage.setItem(
                            this.AUTH_STATUS,
                            JSON.stringify(res)
                        );
                        this._isUserLoggedInSubject.next(res);

                        sessionStorage.setItem('btn', JSON.stringify('true'));
                        this._displayLogoutSubject.next(true);
                    }

                    return res;
                }),
                catchError((error: Error) => {
                    return of(error);
                })
            );
    }

    public forgotPassword(email: string) {
        return this.apiClient.forgotPassword(email).pipe(
            take(1),
            map((res) => {
                return res;
            }),
            catchError((error) => {
                return of(error);
            })
        );
    }
    public resetPassword(token: string, password: string) {
        return this.apiClient.resetPassword(token, password).pipe(
            take(1),
            map((res) => {
                sessionStorage.removeItem('rt');
                return res;
            }),
            catchError((error) => {
                return of(error);
            })
        );
    }
    public userLogOut(): void {
        this._isUserLoggedInSubject.next(null);
        sessionStorage.removeItem('btn');
        this._displayLogoutSubject.next(false);
    }
}
