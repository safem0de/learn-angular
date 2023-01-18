import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrapComponent } from './cost/scrap/scrap.component';
import { EngControlPanelComponent } from './engineer/eng-control-panel/eng-control-panel.component';
import { ProductionComponent } from './planning/production/production.component';
import { StoreLoggingComponent } from './planning/store-logging/store-logging.component';
import { OutgoingComponent } from './quality/outgoing/outgoing.component';
import { PatrolComponent } from './quality/patrol/patrol.component';

const routes: Routes = [
  {path: 'engineer',  component: EngControlPanelComponent },
  {path: 'outgoing',  component: OutgoingComponent },
  {path: 'production-plan', component: ProductionComponent },
  {path: 'patrol',    component: PatrolComponent },
  {path: 'scrap',     component: ScrapComponent },
  {path: 'store',     component: StoreLoggingComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
