import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ClientComponent} from './client/client.component'

const routes: Routes = [
  
  {path:'client',
  component:ClientComponent
  },
  {
    path:'',
    redirectTo:'/client',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
