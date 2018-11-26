import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppDirective } from './app.directive';
import { AppRouting } from './app.routing';
import { AppCustomPipe } from './app.custom.pipe';

import { PortfolioModule } from './portfolio/portfolio.module';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
import { SharedService } from './shared services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AppDirective,
    AppCustomPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    RouterModule,
    PortfolioModule,
    HomeModule,
    BlogModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
