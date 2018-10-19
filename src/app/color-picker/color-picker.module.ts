import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';
import { MccColorPickerModule } from '../../lib';

import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerExamplesComponent } from './components/color-picker-examples.component';

import { routes } from './color-picker.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
  declarations: [ColorPickerComponent, ColorPickerExamplesComponent],
})
export class ColorPickerModule {}
