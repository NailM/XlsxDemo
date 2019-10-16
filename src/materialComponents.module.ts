import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatListModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatListModule,
        MatTableModule
    ]
})
export default class MaterialComponents {}
