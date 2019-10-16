import { Component, OnInit } from '@angular/core';
import { DocumentServiceService } from '../../services/document-service.service';

@Component({
  selector: 'app-file-upload-page',
  templateUrl: './file-upload-page.component.html',
  styleUrls: ['./file-upload-page.component.css']
})
export class FileUploadPageComponent implements OnInit {

  srcResult: any;

  constructor(private documentService: DocumentServiceService) { }

  ngOnInit() {
  }

  uploadDocument(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('doc', file, file.name);
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      this.documentService.uploadDocument(formData, headers)
    }
  }

}
