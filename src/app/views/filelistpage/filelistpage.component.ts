import { Component, OnInit } from '@angular/core';
import { DocumentServiceService } from '../../services/document-service.service';

@Component({
  selector: 'app-filelistpage',
  templateUrl: './filelistpage.component.html',
  styleUrls: ['./filelistpage.component.css']
})
export class FilelistpageComponent implements OnInit {

  documents: any;

  constructor(private documentService: DocumentServiceService) { }

  ngOnInit() {
    this.documentService.getAllDocuments().subscribe((res) => {
      console.log(res);
      this.documents = res;
    })
  }

  getStringData(data) {
    return JSON.stringify(data);
  }

}
