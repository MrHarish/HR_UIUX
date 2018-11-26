import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FeaturedComponent } from "./featured.component";
import { Feature1Component } from "./feature1/feature1.component";
import { Feature2Component } from "./feature2/feature2.component";
import { Feature3Component } from "./feature3/feature3.component";
import { Feature4Component } from "./feature4/feature4.component";

@NgModule({
    declarations:[
        FeaturedComponent,
        Feature1Component,
        Feature2Component,
        Feature3Component,
        Feature4Component
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[]
})

export class FeaturedModule{}