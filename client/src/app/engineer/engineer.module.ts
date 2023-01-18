import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngControlPanelComponent } from './eng-control-panel/eng-control-panel.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    EngControlPanelComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
  ]
})
export class EngineerModule { }
