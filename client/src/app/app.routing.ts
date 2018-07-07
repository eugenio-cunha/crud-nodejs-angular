import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ReadUserComponent} from './user/read-user/read-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';

const URLS: Routes = [
  {
    path: '', 
    redirectTo: 'user/read',
    pathMatch: 'full'
  },
  {
    path: 'user/create',
    component: CreateUserComponent
  },
  {
    path: 'user/read',
    component: ReadUserComponent
  },
  {
    path: 'user/update/:id',
    component: UpdateUserComponent
  },
  {
    path: 'user/delete/:id',
    component: DeleteUserComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(URLS, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
