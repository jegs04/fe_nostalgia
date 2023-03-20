import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, take } from 'rxjs';
import { IAuthService } from '../components/services/auth.service';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    displayLogout$: Observable<boolean>;
    constructor(
        public layoutService: LayoutService,
        private authService: IAuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.displayLogout$ = this.authService.displayLogout$;
    }

    logOut() {
        this.authService
            .userLogOut()
            .pipe(take(1))
            .subscribe((res) => {
                if (res.statusCode === 200) {
                    this.router.navigate(['/login']);
                }
            });
    }
}
