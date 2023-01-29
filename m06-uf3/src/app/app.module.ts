import { ComparePasswordsDirective } from './directives/compare-passwords.directive';
import { GenEventsService } from './services/gen-events.service';
import { LoginService } from 'src/app/services/login.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EventsComponent } from './components/events/events.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModifyeventComponent } from './components/modifyevent/modifyevent.component';
import { ValidateNameDirective } from './directives/validate-name.directive';
import { ValidateEmailDirective } from './directives/validate-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ComparePasswordsDirective,
    LoginComponent,
    PageNotFoundComponent,
    EventsComponent,
    ModifyeventComponent,
    ValidateNameDirective,
    ValidateEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [LoginService,
              CookieService,
              GenEventsService,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
