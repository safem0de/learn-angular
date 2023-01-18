import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { QRCodeModule } from 'angularx-qrcode';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CreateScrapInputComponent } from '../userform/create-scrap-input/create-scrap-input.component';
import { CreateScrapFlangeComponent } from '../userform/create-scrap-flange/create-scrap-flange.component';
import { ScrapComponent } from './scrap/scrap.component';
import { ScrapReportsComponent } from '../userform/scrap-reports/scrap-reports.component';
import { NgChartsModule } from 'ng2-charts';

import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    CreateScrapFlangeComponent,
    CreateScrapInputComponent,
    ScrapComponent,
    ScrapReportsComponent,
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    NgChartsModule,
    QRCodeModule,
    ScrollingModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class CostModule { }
