import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'app-beginner',
    templateUrl: './beginner.component.html',
    styleUrls: ['./beginner.component.scss'],
    standalone: true,
    imports: [PanelModule],
})
export class BeginnerComponent {}
