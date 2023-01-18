import { Component, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

export interface PeriodicElement {
  id: number;
  partno: string;
  plandaily : IPlan[];
}

export interface IPlan {
  id:     number;
  date:   string;
  qty:    number;
  actual: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { 
    id: 1,
    partno: '5108-714',  
    plandaily:[
      {id: 1, date:"15/01/2023", qty:800, actual:650},
      {id: 2, date:"16/01/2023", qty:800, actual:650},
      {id: 3, date:"17/01/2023", qty:800, actual:650},
      {id: 4, date:"18/01/2023", qty:800, actual:650},
      {id: 5, date:"19/01/2023", qty:800, actual:650},
      {id: 6, date:"20/01/2023", qty:800, actual:650},
      {id: 7, date:"21/01/2023", qty:800, actual:650},
    ]
  },
  { 
    id: 2,
    partno: '5108-716',  
    plandaily:[
      {id: 1, date:"15/01/2023", qty:600, actual:550},
      {id: 2, date:"16/01/2023", qty:600, actual:550},
      {id: 3, date:"17/01/2023", qty:600, actual:550},
      {id: 4, date:"18/01/2023", qty:800, actual:450},
      {id: 5, date:"19/01/2023", qty:800, actual:450},
      {id: 6, date:"20/01/2023", qty:800, actual:450},
      {id: 7, date:"21/01/2023", qty:800, actual:450},
      {id: 8, date:"23/01/2023", qty:800, actual:500},
    ]
  },
  { 
    id: 3,
    partno: '5108-718',  
    plandaily:[]
  },
  { 
    id: 4,
    partno: '5110-729',
    plandaily:[]
  },
  { 
    id: 5,
    partno: '5110-731',   
    plandaily:[]
  },
  { 
    id: 6,
    partno: '5110-733',  
    plandaily:[]
  },
  { 
    id: 7,
    partno: '5110-735',  
    plandaily:[]
  },
  { 
    id: 8,
    partno: '5110-742',   
    plandaily:[]
  },
  { 
    id: 9,
    partno: '5110-755',  
    plandaily:[]
  },
  { 
    id: 10,
    partno: '5114-767-01',  
    plandaily:[]
  },
  { 
    id: 11,
    partno: '5114-777',  
    plandaily:[]
  },
  { 
    id: 12,
    partno: '5114-777',  
    plandaily:[]
  },
  { 
    id: 13,
    partno: '5114-784',  
    plandaily:[]
  },
  { 
    id: 14,
    partno: '5116-777', 
    plandaily:[]
  },
  { 
    id: 15,
    partno: '5116-808',
    plandaily:[]
  },
  { 
    id: 16,
    partno: '5117-1007-01',
    plandaily:[]
  },
  { 
    id: 17,
    partno: '5117-1025-01', 
    plandaily:[]
  },
];

@Component({
  selector: 'shipment-planning',
  templateUrl: './shipment-planning.component.html',
  styleUrls: ['./shipment-planning.component.scss'],
})
export class ShipmentPlanningComponent {

  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  constructor() {
    this.displayedColumns.length = 34;
    this.displayedColumns.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0]  = 'id';
    this.displayedColumns[1]  = 'partno';
    this.displayedColumns[32] = 'total';
    this.displayedColumns[33] = 'accumulate';

    console.log(this.dataSource);
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  getSumTotal(){}

  getSumAccumulate(){}

}
