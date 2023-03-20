import { Injectable } from '@angular/core';
import { catchError, map, of, take } from 'rxjs';
import { ApiClient, UserProfileModel } from 'src/app/api-client/api-client';

@Injectable()
export abstract class IAccountService {
    public abstract createUser(
        userName: string,
        password: string,
        email: string
    );
}

@Injectable()
export class AccountService extends IAccountService {
    constructor(private apiClient: ApiClient) {
        super();
    }
    public createUser(userName: string, password: string, email: string) {
        const accountData: UserProfileModel = {
            userId: userName,
            userPwd: password,
            userMail: email,
        };
        return this.apiClient.createUser(accountData).pipe(
            take(1),
            map((res) => {
                return res;
            }),
            catchError((err) => {
                return of(err);
            })
        );
    }
}
