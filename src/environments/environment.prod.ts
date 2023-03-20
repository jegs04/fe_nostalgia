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
    apiRoot: 'https://betestvm01.southeastasia.cloudapp.azure.com',
    production: true,
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
