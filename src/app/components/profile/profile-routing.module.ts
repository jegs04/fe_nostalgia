import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent,
                resolve: {
                    profile: ProfileResolver,
                },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}
