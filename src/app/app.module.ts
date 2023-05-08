import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceInterceptor } from './service.interceptor';
import { MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import { MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavBarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
