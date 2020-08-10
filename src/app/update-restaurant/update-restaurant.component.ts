import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  alert:boolean=false;

  editRestaurent=new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl('')
  });

  constructor( private resto: CommonService, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurent=new FormGroup({
        name: new FormControl(result['name']),
        Address: new FormControl(result['Address']),
        email: new FormControl(result['email'])
      })
    })
  }

  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurent.value).subscribe((result)=>{
      console.log(result, "data updated successfully");
      this.alert=true;
      this.editRestaurent.reset();
      })
  }

  closeAlert(){
    this.alert=false;
  }

}
