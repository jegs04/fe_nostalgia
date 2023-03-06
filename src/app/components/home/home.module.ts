import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingRoutingModule } from './home-routing-routing.module';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
		GalleriaModule,
		CarouselModule,
    HomeRoutingRoutingModule
  ]
})
export class HomeModule { }
