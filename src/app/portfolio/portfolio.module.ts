import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router"


import { PortfolioComponent } from "./portfolio.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";
import { FourComponent } from "./four/four.component";

@NgModule({
    declarations:[
        PortfolioComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ]
})

export class PortfolioModule{}