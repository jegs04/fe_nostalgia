import { NgModule } from '@angular/core';
import {
    CommonModule,
    HashLocationStrategy,
    LocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { CoreModule } from './components/core/core.module';
import { API_BASE_URL } from './api-client/api-client';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './components/services/http-interceptor.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        CommonModule,
        CoreModule,
        AppRoutingModule,
        ToastModule,
        AppLayoutModule,
    ],
    providers: [
        { provide: API_BASE_URL, useValue: environment.apiRoot },
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true,
        },
        MessageService,
        ...environment.providers,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
