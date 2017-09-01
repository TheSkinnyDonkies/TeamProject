import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdministrationRoutingModule } from './user-administration-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  imports: [
    CommonModule,
    UserAdministrationRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    MembersComponent
],
  exports: [
    LoginComponent,
    SignupComponent,
    MembersComponent
  ]
})
export class UserAdministrationModule { }
