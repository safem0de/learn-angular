import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import { IScrapItem } from 'src/app/shared/models/scrap';

@Component({
  selector: 'create-scrap-input',
  templateUrl: './create-scrap-input.component.html',
  styleUrls: ['./create-scrap-input.component.scss'],
})
export class CreateScrapInputComponent {

  @ViewChild('htmlData', { static: false }) el!: ElementRef;

  elements :IScrapItem[] = [
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
  public myAngularxQrCode: string = null;

  constructor() {
    this.myAngularxQrCode = 'safem0de' + '\t' + 'naweeparb';
  }

  openPDF() {
    // https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units (1cm = 37.8px)
    const doc = new jsPDF('p', 'cm', [378.000001, 378.000001]);

    doc.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.output("dataurlnewwindow");
      }
    });
  }

}
