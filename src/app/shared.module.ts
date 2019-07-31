import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatRadioModule,
  MatSidenavModule, MatSliderModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule
  ]
})
export class SharedModule { }
