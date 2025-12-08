import { Routes } from '@angular/router';
import { PolicyOfProvacityComponent } from './components/policy-of-provacity/policy-of-provacity.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'privacy-policy',
        component: PolicyOfProvacityComponent
    }
];
