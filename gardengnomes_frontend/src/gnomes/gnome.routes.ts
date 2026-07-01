import { Routes } from '@angular/router';
import { CreateGnomeComponent } from './pages/create-gnome/create-gnome.component';
import { EditGnomeComponent } from './pages/edit-gnome/edit-gnome.component';
import { GnomeDetailComponent } from './pages/gnome-detail/gnome-detail.component';
import { GnomeListComponent } from './pages/gnome-list/gnome-list.component';



export const GNOME_ROUTES:Routes=[

    {
        path:'',
        component:GnomeListComponent
    },

    {
        path:'create',
        component:CreateGnomeComponent
    },

    {
        path:':id',
        component:GnomeDetailComponent
    },

    {
        path:':id/edit',
        component:EditGnomeComponent
    }

];