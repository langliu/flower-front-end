import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsModule} from './projects/projects.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login-register/login/login.component';
import {RegisterComponent} from './login-register/register/register.component';

import {LogInRegisterService} from './log-in-register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    ProjectsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [LogInRegisterService],
})
export class AppModule {
}
