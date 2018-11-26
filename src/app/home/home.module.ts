import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { User1Component } from "./user1/user1.component";
import { User2Component } from "./user2/user2.component";
import { User3Component } from "./user3/user3.component";
import { User4Component } from "./user4/user4.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HomeComponent,
        User1Component,
        User2Component,
        User3Component,
        User4Component
    ],
    imports:[
        CommonModule
    ],

    exports:[]
})

export class HomeModule{}