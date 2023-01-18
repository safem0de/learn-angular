import { Component } from '@angular/core';
import { IMenu } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  masters: IMenu[] = [
    {name: 'Masters Engineer', path: 'engineer',},
    {name: 'Samples Engineer', path: 'samples',},
  ];
  managements: IMenu[] = [
    {name: 'Drawing management',  path: '',},
    {name: 'WOS management',      path: '',},
    {name: 'Inventory management',  path: '',},
    {name: 'Man power management',  path: '',},
  ];
  plans: IMenu[] = [
    {name: 'Material requirements planning (MRP)', path: '',},
    {name: 'Production planning', path: 'production-plan',},
    {name: 'Tooling planning',    path: '',},
    {name: 'Production logging',  path: '',},
    {name: 'Store logging',       path: 'store',},
  ];
  costs: IMenu[] = [
    {name: 'Manufacturing cost',  path: '',},
    {name: 'Inventory cost',      path: '',},
    {name: 'Scrap cost',          path: 'scrap',},
  ];
  quanlities: IMenu[] = [
    {name: 'Incoming QC',     path: '',},
    {name: 'Patrol line QC',  path: 'patrol',},
    {name: 'Outgoing QC',     path: 'outgoing',},
  ];
  maintenances: IMenu[] = [
    {name: 'Request maintenance',     path: '',},
    {name: 'Preventive maintenance',  path: '',},
    {name: 'Spare part maintenance',  path: '',},
  ];
}
