import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { IAccountService } from '../../services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    valCheck: string[] = ['remember'];
    registerForm: FormGroup;

    constructor(
        public layoutService: LayoutService,
        private accountService: IAccountService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            userName: new FormControl(''),
            password: new FormControl(''),
            confirmPassword: new FormControl(''),
            email: new FormControl(''),
        });
    }

    onSubmit() {
        const data = {
            ...this.registerForm.value,
        };

        if (data.password === data.confirmPassword) {
            this.accountService
                .createUser(data.userName, data.password, data.email)
                .pipe(take(1))
                .subscribe((res) => {
                    if (res.statusCode === 200) {
                        console.log(res);
                        this.router.navigate(['/login']);
                    }
                });
        }
    }
}
