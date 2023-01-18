import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import { IScrapItem } from 'src/app/shared/models/scrap';
import { IScrapDetail } from 'src/app/shared/models/scrapdetail';

@Component({
  selector: 'create-scrap-flange',
  templateUrl: './create-scrap-flange.component.html',
  styleUrls: ['./create-scrap-flange.component.scss']
})
export class CreateScrapFlangeComponent {

  @ViewChild('htmlData', { static: false }) el!: ElementRef;

  myAngularxQrCode: string = null;

  elements : IScrapDetail[] = [
    {id:1,  detail:"Bend", type:""},
    {id:2,  detail:"Burr", type:""},
    {id:3,  detail:"Chamfer Unbalance", type:""},
    {id:4, detail:"Crack", type:""},
    {id:5, detail:"Cutting Incomplete", type:""},
    {id:6, detail:"Dent", type:""},
    {id:7, detail:"Dirty", type:""},
    {id:8, detail:"Front Jig Ng", type:""},
    {id:9, detail:"ID 8 Ng", type:""},
    {id:10, detail:"Length 1.8 overspec", type:""},
    {id:11, detail:"Length 1.8 underspec", type:""},
    {id:12, detail:"Length 15.5 Ng", type:""},
    {id:13, detail:"Length 7.5 Ng", type:""},
    {id:14, detail:"No Cut", type:""},
    {id:15, detail:"No Drill", type:""},
    {id:16, detail:"No Tap", type:""},
    {id:17, detail:"Other", type:""},
    {id:18, detail:"Part Mix", type:""},
    {id:19, detail:"Peel off", type:""},
    {id:20, detail:"Porosity", type:""},
    {id:21, detail:"Rear Jig Ng", type:""},
    {id:22, detail:"Scratch", type:""},
    {id:23, detail:"Short mold", type:""},
    {id:24, detail:"Tap Ng", type:""},
  ];

  htmls : IScrapItem[] = [
    {
      id        : 1,
      date      : "10/01/2023",
      partNo    : "C8380-225",
      lotNo     : "VA23052-01",
      qty       : 50,
      detail    : "1140-CHAMFER NG",
      machine   : "EM10",
      scrapBy   : "E8213",
      confirmBy : "",
    },
    {
      id        : 1,
      date      : "10/01/2023",
      partNo    : "C8380-225",
      lotNo     : "VA23052-01",
      qty       : 50,
      detail    : "1140-CHAMFER NG",
      machine   : "EM10",
      scrapBy   : "E8213",
      confirmBy : "",
    },
    {
      id        : 1,
      date      : "10/01/2023",
      partNo    : "C8380-225",
      lotNo     : "VA23052-01",
      qty       : 50,
      detail    : "1140-CHAMFER NG",
      machine   : "EM10",
      scrapBy   : "E8213",
      confirmBy : "",
    },
  ];

  constructor() {
    this.myAngularxQrCode = 'safem0de';
  }

  openPDF() {
    const doc = new jsPDF('p', 'cm', [378.000001, 378.000001]);
    // need to have addpage for seperate page.
    doc.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.output("dataurlnewwindow");
      }
    });
  }
}
