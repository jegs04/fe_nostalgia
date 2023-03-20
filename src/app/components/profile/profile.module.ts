import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        FieldsetModule,
        InputTextModule,
        RippleModule,
        ButtonModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        PasswordModule,
    ],
})
export class ProfileModule {}
