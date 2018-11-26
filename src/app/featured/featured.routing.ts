import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { FeaturedComponent } from "./featured.component";
import { Feature1Component } from "./feature1/feature1.component";
import { Feature2Component } from "./feature2/feature2.component";
import { Feature3Component } from "./feature3/feature3.component";
import { Feature4Component } from "./feature4/feature4.component";

const routes: Routes = [
    {path: '', component: FeaturedComponent,children:[
    {path:'/feature1' , component:Feature1Component },
    {path:'/feature2' , component:Feature2Component },
    {path:'/feature3' , component:Feature3Component },
    {path:'/feature4' , component:Feature4Component },
]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FeaturedRouting{}