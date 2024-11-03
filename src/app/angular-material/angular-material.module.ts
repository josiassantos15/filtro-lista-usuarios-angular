import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule
    ],
})
export class AngularMaterialModule { }