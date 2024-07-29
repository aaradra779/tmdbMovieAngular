import {  Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SearchlistPageComponent } from './page/searchlist-page/searchlist-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';



export const routes: Routes = [

    {
        path : '',
        component : HomeComponent,
        title : 'Home Page'
    }, 
    {
        path: 'searchList' ,
        component: SearchlistPageComponent,
        title : 'Search Page'
    },
    {
        path: 'details' ,
        component: DetailsPageComponent,
        title : 'Details Page'
    }
];
