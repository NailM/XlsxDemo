import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadPageComponent } from './views/file-upload-page/file-upload-page.component';
import MaterialComponents from '../materialComponents.module';
import { FilelistpageComponent } from './views/filelistpage/filelistpage.component';
import { FrontPageComponent } from './views/front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadPageComponent,
    FilelistpageComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
