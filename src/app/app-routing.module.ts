import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadPageComponent } from './views/file-upload-page/file-upload-page.component';
import { FilelistpageComponent } from './views/filelistpage/filelistpage.component';
import { FrontPageComponent } from './views/front-page/front-page.component';


const routes: Routes = [
  { path: 'fileupload', component: FileUploadPageComponent },
  { path: 'filelist',  component: FilelistpageComponent },
  { path: '', component: FrontPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
