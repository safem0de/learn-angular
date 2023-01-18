import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { PatrolComponent } from './patrol/patrol.component';
import { OutgoingComponent } from './outgoing/outgoing.component';

import { CreateRejectTagComponent } from '../userform/create-reject-tag/create-reject-tag.component';

@NgModule({
  declarations: [
    PatrolComponent,
    OutgoingComponent,
    CreateRejectTagComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatStepperModule,
  ]
})
export class QualityModule { }
