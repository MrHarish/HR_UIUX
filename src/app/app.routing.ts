import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { NgModule } from "@angular/core";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { OneComponent } from "./portfolio/one/one.component";
import { TwoComponent } from "./portfolio/two/two.component";
import { ThreeComponent } from "./portfolio/three/three.component";
import { FourComponent } from "./portfolio/four/four.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent, children:[
        {path:'one', component: OneComponent},
        {path:'two', component: TwoComponent},
        {path:'three', component: ThreeComponent},
        {path: 'four', component: FourComponent}
    ]},
    {path:'featured' ,  loadChildren: './featured/featured.module#FeaturedModule'},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouting{}