import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';

import { routes } from './app.router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
