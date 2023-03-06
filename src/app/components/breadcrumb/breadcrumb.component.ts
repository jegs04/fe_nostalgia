import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb, BreadcrumbService } from './breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
    breadcrumbs$: Observable<Breadcrumb[]>;
    constructor(private readonly breadcrumbService: BreadcrumbService) {
        this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
    }
}
