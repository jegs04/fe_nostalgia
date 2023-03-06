import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelingComponent } from './leveling.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LevelingRoutingRoutingModule } from './leveling-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PanelModule } from 'primeng/panel';

@NgModule({
    declarations: [LevelingComponent, FirstComponent, SecondComponent],
    imports: [CommonModule, LevelingRoutingRoutingModule, PanelModule],
})
export class LevelingModule {}
