import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
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

  options:any=[
    { name: 'Mediterránea', value: 1 },
    { name: 'Asiática', value: 2 },
    { name: 'Mexicana', value: 3 },
    { name: 'Japonesa', value: 4 },
    { name: 'Italiana', value: 5 },
    { name: 'Peruana', value: 6 },
    { name: 'Poke-bowls', value: 7 },
    { name: 'Veggie', value: 8 },
    { name: 'Vietnamita', value: 9 },
    { name: 'Griega', value: 10 }
  ]

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
