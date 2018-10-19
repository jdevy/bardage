import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'color-picker',
    loadChildren: './color-picker/color-picker.module#ColorPickerModule',
  }
];
