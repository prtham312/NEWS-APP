import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { TechComponent } from './pages/tech/tech.component';
import { BusinessComponent } from './pages/business/business.component';
import { SportsComponent } from './pages/sports/sports.component';
import { CoffeeLoaderComponent } from './shared/coffee-loader/coffee-loader.component';

export const routes: Routes = [
    {path:'' , pathMatch : 'full', redirectTo:'home'},
    {
        path:'' , component :  DashboardComponent , children : [
            {path : 'home' , component : HomeComponent},
            {path : 'tech' , component : TechComponent},
            {path : 'business' , component : BusinessComponent},
            {path : 'sports' , component : SportsComponent},
            {path : 'load', component:CoffeeLoaderComponent}
        ]
    }
];
