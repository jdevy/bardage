import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { BardageComponent } from './colorpicker/bardage/bardage.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule,
  MatToolbarModule
} from '@angular/material';

import { MccColorPickerModule } from '../lib';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MccColorPickerModule,
    MatGridListModule
  ],
  declarations: [AppComponent, BardageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
