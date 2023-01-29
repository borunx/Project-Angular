import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/events/events.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,

  },
  {
    path:'register',
    component: RegisterComponent,

  },
  {
    path:'events',
    component: EventsComponent,

  },
  { path: '', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', 
   component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
