import { Component } from '@angular/core';
import { SharedService } from './shared services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private some: SharedService, private router: Router, private act: ActivatedRoute){
    console.log(this.some.some)
  }

  user(){
    var some = this.act.snapshot.params;
    console.log(some)
  }



}
