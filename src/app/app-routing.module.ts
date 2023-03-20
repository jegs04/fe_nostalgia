import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { BeginnerComponent } from './components/game-guide/beginner/beginner.component';
import { LoginComponent } from './components/core/login/login.component';
import { RegisterComponent } from './components/core/register/register.component';
import { AuthGuard } from './components/guards/auth.guard';
import { NoAuthGuard } from './components/guards/no-auth.guard';
import { ResetPasswordComponent } from './components/core/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/core/forgot-password/forgot-password.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import('./components/home/home.module').then(
                                    (m) => m.HomeModule
                                ),
                        },

                        {
                            path: 'profile',
                            canActivate: [AuthGuard],
                            loadChildren: () =>
                                import(
                                    './components/profile/profile.module'
                                ).then((m) => m.ProfileModule),
                        },

                        {
                            path: 'reset-password',
                            component: ResetPasswordComponent,
                        },

                        {
                            path: 'forgot-password',
                            component: ForgotPasswordComponent,
                        },

                        {
                            path: 'login',
                            component: LoginComponent,
                            canActivate: [NoAuthGuard],
                        },
                        { path: 'register', component: RegisterComponent },
                        {
                            path: 'beginner',
                            component: BeginnerComponent,
                        },
                        {
                            path: 'level',
                            loadChildren: () =>
                                import(
                                    './components/game-guide/leveling/leveling.module'
                                ).then((m) => m.LevelingModule),
                        },
                    ],
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
