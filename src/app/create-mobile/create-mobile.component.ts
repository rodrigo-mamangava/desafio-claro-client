import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-mobile',
  templateUrl: './create-mobile.component.html',
  styleUrls: ['./create-mobile.component.css']
})
export class CreateMobileComponent implements OnInit {

  mobileForm: FormGroup;
  mobiles: Array<Mobile>;

  constructor(
    private _mobileService: MobileService,
    private _route: Router,
    private aR: ActivatedRoute,
    private fb: FormBuilder) {

     }

  ngOnInit() {

    this._mobileService.getMobiles()
    .subscribe(res => this.mobiles = res);

    this.mobileForm = this.fb.group({
      'code' : [null, Validators.compose([Validators.required])],
      'model' : [null, Validators.compose([Validators.required])],
      'price' : [null, Validators.compose([Validators.required])],
      'photo' : [null, Validators.compose([Validators.required])],
      'brand' : [null, Validators.compose([Validators.required])],
      'date' : [null, Validators.compose([Validators.required])]
    })

  }

  addMobile(mobile: Mobile){
    this._mobileService.createMobile(mobile)
    .subscribe(newMobile => {
      this.mobiles.push(newMobile);
      this._route.navigateByUrl('/');
    })
  }

}
