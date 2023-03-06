import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LevelingComponent } from './leveling.component';
import { SecondComponent } from './second/second.component';

const levelRoutes: Routes = [
    {
        path: '',
        component: LevelingComponent,
        children: [
            {
                path: 'first',
                component: FirstComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(levelRoutes)],
    exports: [RouterModule],
})
export class LevelingRoutingRoutingModule {}
