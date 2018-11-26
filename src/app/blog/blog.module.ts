import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BlogComponent } from "./blog.component";
import { Content1Component } from "./content1/content1.component";
import { Content2Component } from "./content2/content2.component";
import { Content3Component } from "./content3/content3.component";
import { Content4Component } from "./content4/content4.component";

@NgModule({
    declarations:[
        BlogComponent,
        Content1Component,
        Content2Component,
        Content3Component,
        Content4Component
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[]
})

export class BlogModule{}