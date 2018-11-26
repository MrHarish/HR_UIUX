import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  form: FormGroup;
  sendingInfo;

  data = [
    "harish",
    "shiva",
    "rajeshwari",
    "mamatha",
    "haritha"
  ]


  constructor() { 
    this.form = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      company: new FormControl('', Validators.required),
      contact: new FormControl('', [Validators.required,this.contactvalid.bind(this)])
    })
  }

  ngOnInit() {
  
  }

  submit(){
    this.sendingInfo = {
      name: this.form.get("firstname").value,
      lname: this.form.get("lastname").value,
      email: this.form.get("email").value,
      company: this.form.get("company").value,
      contact: this.form.get("contact").value
    }
    console.log(this.sendingInfo);
    this.form.reset();
  }

  contactvalid(control: FormControl): {[s: string]: boolean}{
    if(control.value.length !== 10 ){
      console.log('executed');
      return {'invalidcontactdetails': true}
    }
    console.log('not executed')
    return null
  }


  invalidname(control: FormControl):{[s:string] :  boolean}{
    if(this.data.indexOf(control.value) ! == -1 ){
      return {'invalidnameerror': true}
    }
      return null
  }


}
