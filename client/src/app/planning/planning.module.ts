import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreLoggingComponent } from './store-logging/store-logging.component';
import { CreateShipmentTagComponent } from '../userform/create-shipment-tag/create-shipment-tag.component';
import { ShipmentPlanningComponent } from '../userform/shipment-planning/shipment-planning.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductionComponent } from './production/production.component';
import { ProductionPlanCrudComponent } from '../userform/production-plan-crud/production-plan-crud.component';

@NgModule({
  declarations: [
    StoreLoggingComponent,
    CreateShipmentTagComponent,
    ShipmentPlanningComponent,
    ProductionComponent,
    ProductionPlanCrudComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
  ]
})
export class PlanningModule { }
