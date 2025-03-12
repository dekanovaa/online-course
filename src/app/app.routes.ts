import { Routes } from '@angular/router';
import { KursIdComponent } from './kurs-id/kurs-id.component';
import { KursComponent } from './kurs/kurs.component';

export const routes: Routes = [
    {
        path: '',
        component: KursComponent

    },
    {
        path: 'curslar',
        component: KursComponent

    },
    {
        path: 'cursid',
        component: KursIdComponent
    }
];
