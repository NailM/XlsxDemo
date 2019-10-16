import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllDocuments() {
    return this.httpClient.get('http://localhost:8080/getalldocuments');
  }

  uploadDocument(data, options) {
    this.httpClient.post('http://localhost:8080/savedocument', data, {headers: options}).subscribe(data1 => console.log(data1));
  }

  getSingleDocumentForDraw() {
    return this.httpClient.get('http://localhost:8080/getSingleDocumentForDraw');
  }

}
