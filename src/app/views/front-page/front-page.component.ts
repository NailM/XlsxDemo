import { Component, OnInit, AbstractType } from '@angular/core';
import { DocumentServiceService } from '../../services/document-service.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  document: any;
  displayedColumns: any;
  dataForTable: any;

  constructor(private documentService: DocumentServiceService) { }

  ngOnInit() {
    this.documentService.getSingleDocumentForDraw().subscribe((res) => {
      console.log(res);
      this.document = res;
      this.dataForTable = res['dataTable'];
      this.displayedColumns = res['headers'];
      console.log(this.displayedColumns);
    });
  }

  getStringData(data) {
    return JSON.stringify(data);
  }

  getValue(value, document) {
    return document[value]
  }

}
