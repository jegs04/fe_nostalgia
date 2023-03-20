import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ProblemDetails } from 'src/app/api-client/api-client';
import { IAuthService } from '../../services/auth.service';
import { NotifyService } from '../../services/notify.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
    constructor(
        private authService: IAuthService,
        private notifyService: NotifyService
    ) {}
    email: string;

    onSubmit() {
        this.authService
            .forgotPassword(this.email)
            .pipe(take(1))
            .subscribe((res) => {
                if (res.statusCode == 404) {
                    this.notifyService.error(res.status, res.message);
                    this.email = '';
                }

                this.notifyService.success(
                    'Success',
                    `An email has been sent to ${this.email}`
                );

                this.email = '';
            });
    }
}
