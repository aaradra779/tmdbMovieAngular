import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchlistPageComponent } from './searchlist-page/searchlist-page.component';



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
    }
];
