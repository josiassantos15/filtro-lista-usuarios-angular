import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    declarations: [
        UserDetailsComponent,
        FilterComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AngularMaterialModule
    ],
    exports: [
        UserDetailsComponent,
        FilterComponent
    ],
})
export class ComponentsModule { }