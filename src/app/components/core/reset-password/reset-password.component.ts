import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { IAuthService } from '../../services/auth.service';
import { NotifyService } from '../../services/notify.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
    resetToken: string;
    token: string;
    resetForm: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private authService: IAuthService,
        private router: Router,
        private notifyService: NotifyService
    ) {}

    ngOnInit(): void {
        this.resetForm = new FormGroup({
            newPassword: new FormControl(''),
            confirmNewPassword: new FormControl(''),
        });
        this.resetToken = this.route.snapshot.queryParamMap.get('reset_token');
        this.token = this.route.snapshot.queryParamMap.get('token');
        if (this.resetToken === null) {
            this.router.navigate(['/login']);
        }
        sessionStorage.setItem('rt', JSON.stringify({ token: this.token }));
    }

    resetPassword() {
        const data = {
            ...this.resetForm.value,
        };
        if (data.newPassword === data.confirmNewPassword) {
            this.authService
                .resetPassword(this.resetToken, data.newPassword)
                .pipe(take(1))
                .subscribe((res) => {
                    this.resetForm.reset();

                    if (res.statusCode === 200) {
                        this.router.navigate(['/login']);
                        this.notifyService.success(
                            'Success',
                            'Password changed successfully'
                        );
                    }
                    if (res.statusCode === 401) {
                        this.notifyService.error(
                            'Invalid Operation',
                            'An error has occured. Please try again'
                        );
                        this.router.navigate(['/forgot-password']);
                    }
                });
        }
    }
}
