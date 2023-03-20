import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProblemDetails } from 'src/app/api-client/api-client';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { IAuthService } from '../../services/auth.service';
import { NotifyService } from '../../services/notify.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];
    loginForm: FormGroup;
    password!: string;

    constructor(
        public layoutService: LayoutService,
        private authService: IAuthService,
        private router: Router,
        private notifyService: NotifyService
    ) {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            userName: new FormControl(''),
            password: new FormControl(''),
        });
    }

    onFormSubmit() {
        const values = {
            ...this.loginForm.value,
        };

        this.authService
            .signIn(values.userName, values.password)
            .pipe(take(1))
            .subscribe((res) => {
                if (!res.success) {
                    this.notifyService.error(
                        (res as ProblemDetails).title,
                        (res as ProblemDetails).detail
                    );
                    this.loginForm.patchValue({ password: '' });
                    // alert((res as ProblemDetails).detail);
                }

                this.notifyService.success('Success', 'Signed In');

                this.router.navigate(['profile']);
            });
    }
}
