import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable, take } from 'rxjs';
import { ProfileModel } from 'src/app/api-client/api-client';
import { NotifyService } from '../services/notify.service';
import { IProfileService, ProfileService } from '../services/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    profile$: Observable<ProfileModel>;
    changePasswordForm: FormGroup;
    constructor(
        private profileService: IProfileService,
        private notifyService: NotifyService
    ) {}

    ngOnInit(): void {
        this.changePasswordForm = new FormGroup({
            oldPassword: new FormControl(''),
            newPassword: new FormControl(''),
            confirmNewPassword: new FormControl(''),
        });
        this.profile$ = this.profileService.userProfile$;
    }

    onSubmit(userName: string, email: string) {
        const data = {
            ...this.changePasswordForm.value,
        };
        if (data.newPassword != data.confirmNewPassword)
            alert('Password and Confirm Password did not match');

        this.profileService
            .changePassword(userName, email, data.oldPassword, data.newPassword)
            .pipe(take(1))
            .subscribe((res) => {
                this.notifyService.success(
                    'Change Password',
                    'Successfully changed password.'
                );

                this.changePasswordForm.reset();
            });
    }
}
