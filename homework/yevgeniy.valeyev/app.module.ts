import { UserValidators } from './validators/user.validator';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { EmailsService } from './emails.service';
import { APP_CONFIG_DATA } from './config/config';
import { APP_CONFIG } from './config/tokens';
import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, InjectionToken, ReflectiveInjector, Injector, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { UserCardDetailedComponent } from './user-card-detailed/user-card-detailed.component';
import { MyDateFormatPipe } from './date-format.pipe';
import { AddUserComponent } from './add-user/add-user.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EmailsNavigationComponent } from './emails-page/navigation/navigation.component';
import { EmailComponent } from './email/email.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { UserCardShortComponent } from './user-card-short/user-card-short.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EmailsPageComponent } from './emails-page/emails-page.component';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: '/emails/inbox', pathMatch: 'full' },
      {
        path: 'emails',
        component: EmailsPageComponent,
        children: [
          { path: '', redirectTo: 'inbox', pathMatch: 'full' },
          {
            path: ':type', children: [
              { path: '', component: EmailsListComponent },
              { path: ':id', component: EmailComponent }
            ]
          }
        ]
      },
      {
        path: 'users',
        children: [
          { path: '', component: UsersListComponent },
          { path: ':id', component: UserDetailsComponent }
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserCardDetailedComponent,
    MyDateFormatPipe,
    AddUserComponent,
    EmailsListComponent,
    LoginComponent,
    UsersListComponent,
    EmailsNavigationComponent,
    EmailComponent,
    MainNavigationComponent,
    UserCardShortComponent,
    UserDetailsComponent,
    EmailsPageComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsersService,
    EmailsService,
    AuthGuardService,
    AuthService,
    UserValidators,
    { provide: APP_CONFIG, useValue: APP_CONFIG_DATA }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
