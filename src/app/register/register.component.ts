import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean=false;

  createUser=new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

  constructor( private resto: CommonService) { }

  ngOnInit(): void {
  }

  regUser(){
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"succeeded")
      this.createUser.reset();
      this.alert=true;
    });
  }
}
