import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoFoundComponent } from './no-found/no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PagesComponent,
    SharedComponent,
    NoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
