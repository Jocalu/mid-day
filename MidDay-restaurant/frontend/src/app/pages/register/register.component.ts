import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
import { options } from '../../constants/index'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
     emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email
     ]);

  options = options

  hide = true;

  constructor (private _formBuilder: FormBuilder) {}

  ngOnInit () {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }
}
