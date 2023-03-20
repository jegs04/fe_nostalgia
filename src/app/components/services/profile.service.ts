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
    ApiException,
    ProfileModel,
} from 'src/app/api-client/api-client';

@Injectable()
export abstract class IProfileService {
    abstract get userProfile$(): Observable<ProfileModel>;
    abstract getUserProfile(): Observable<ProfileModel>;
    abstract changePassword(
        userName: string,
        email: string,
        oldPassword: string,
        newPassword: string
    );
}

@Injectable()
export class ProfileService extends IProfileService {
    _userProfileSubject: BehaviorSubject<ProfileModel> =
        new BehaviorSubject<ProfileModel>({});
    get userProfile$(): Observable<ProfileModel> {
        return this._userProfileSubject.asObservable();
    }
    getUserProfile(): Observable<ProfileModel> {
        return this.apiClient.profileGET().pipe(
            take(1),
            map((res) => {
                this._userProfileSubject.next(res);
                return res;
            })
        );
    }

    changePassword(
        userName: string,
        email: string,
        oldPassword: string,
        newPassword: string
    ) {
        return this.apiClient
            .profilePOST(userName, email, oldPassword, newPassword)
            .pipe(
                take(1),
                map((res) => {
                    return res;
                }),
                catchError((error) => {
                    return of(error);
                })
            );
    }
    constructor(private apiClient: ApiClient) {
        super();
    }
}
