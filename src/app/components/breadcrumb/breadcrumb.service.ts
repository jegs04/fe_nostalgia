import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Data,
    NavigationEnd,
    Router,
} from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BreadcrumbService {
    private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

    readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

    constructor(private router: Router) {
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd))
            .subscribe((s) => {
                const root = this.router.routerState.snapshot.root;
                const breadcrumbs: Breadcrumb[] = [];
                this.addBreadcrumb(root, [], breadcrumbs);
                this._breadcrumbs$.next(breadcrumbs);
            });
    }

    private async addBreadcrumb(
        route: ActivatedRouteSnapshot,
        parentUrl: string[],
        breadcrumbs: Breadcrumb[]
    ) {
        if (route) {
            const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

            if (route.data['breadcrumb']) {
                const breadcrumb = {
                    label: this.getLabel(route.data),
                    url: '/' + routeUrl.join('/'),
                };

                if (!this.alreadyListed(breadcrumbs, breadcrumb)) {
                }
                breadcrumbs.push(breadcrumb);
            }

            this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
        }
    }

    private alreadyListed(
        breadcrumbs: Breadcrumb[],
        breadcrumb: { label: string; url: string }
    ): boolean {
        return breadcrumbs.find(
            (b) => b.label == breadcrumb.label && b.url == breadcrumb.url
        )
            ? true
            : false;
    }

    private getLabel(data: Data) {
        return typeof data['breadcrumb'] === 'function'
            ? data['breadcrumb']
            : data['breadcrumb'];
    }
}

export interface Breadcrumb {
    label: string;
    url: string;
}
