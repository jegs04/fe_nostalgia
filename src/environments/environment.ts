// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {
    AccountService,
    IAccountService,
} from 'src/app/components/services/account.service';
import {
    AuthService,
    IAuthService,
} from 'src/app/components/services/auth.service';
import {
    IProfileService,
    ProfileService,
} from 'src/app/components/services/profile.service';

export const environment = {
    auth_status: 'fe',
    apiRoot: 'http://localhost:5198',
    production: false,
    providers: [
        {
            provide: IAuthService,
            useClass: AuthService,
        },
        {
            provide: IProfileService,
            useClass: ProfileService,
        },
        {
            provide: IAccountService,
            useClass: AccountService,
        },
    ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
