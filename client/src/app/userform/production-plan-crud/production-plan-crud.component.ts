import { Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
  symbol: string;
  isEdit: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1,  name: 'Hydrogen',   weight: 1.0079,   symbol: 'H',  isEdit:false  },
  { id: 2,  name: 'Helium',     weight: 4.0026,   symbol: 'He', isEdit:false  },
  { id: 3,  name: 'Lithium',    weight: 6.941,    symbol: 'Li', isEdit:false  },
  { id: 4,  name: 'Beryllium',  weight: 9.0122,   symbol: 'Be', isEdit:false  },
  { id: 5,  name: 'Boron',      weight: 10.811,   symbol: 'B',  isEdit:false  },
  { id: 6,  name: 'Carbon',     weight: 12.0107,  symbol: 'C',  isEdit:false  },
  { id: 7,  name: 'Nitrogen',   weight: 14.0067,  symbol: 'N',  isEdit:false  },
  { id: 8,  name: 'Oxygen',     weight: 15.9994,  symbol: 'O',  isEdit:false  },
  { id: 9,  name: 'Fluorine',   weight: 18.9984,  symbol: 'F',  isEdit:false  },
  { id: 10, name: 'Neon',       weight: 20.1797,  symbol: 'Ne', isEdit:false  },
];

@Component({
  selector: 'production-plan-crud',
  templateUrl: './production-plan-crud.component.html',
  styleUrls: ['./production-plan-crud.component.scss']
})
export class ProductionPlanCrudComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];
  dataSource = ELEMENT_DATA;

  constructor(){}

  ngOnInit(): void {
    
  }

  onEdit(item:any){
    ELEMENT_DATA.forEach(x =>{
      x.isEdit = false;
    })
    item.isEdit = true;
  }

  addData(){}
}
