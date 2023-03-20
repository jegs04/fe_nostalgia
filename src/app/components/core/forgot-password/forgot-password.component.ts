import { Component } from '@angular/core';
import { take } from 'rxjs';
import { IAuthService } from '../../services/auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
    constructor(private authService: IAuthService) {}
    email: string;

    onSubmit() {
        this.authService
            .forgotPassword(this.email)
            .pipe(take(1))
            .subscribe((res) => {
                if (res.statusCode == 404) alert(res.message);
                console.log(res);
            });
    }
}
