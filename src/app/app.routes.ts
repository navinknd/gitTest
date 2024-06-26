import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../app/components/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('../app/components/dashboard/dashboard.component').then(c => c.DashboardComponent)
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
