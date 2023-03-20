import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class NotifyService {
    constructor(private messageService: MessageService) {}

    public success(summary: string, message: string) {
        this.messageService.add({
            key: 'success',
            severity: 'success',
            summary: summary,
            detail: message,
        });
    }

    public error(summary: string, message: string) {
        this.messageService.add({
            key: 'error',
            severity: 'error',
            summary: summary,
            detail: message,
        });
    }
}
