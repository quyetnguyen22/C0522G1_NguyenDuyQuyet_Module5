import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  country = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      passwordInput: this.fb.group({
        password: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: ['', Validators.required]
      }, {validators: this.checkPassword}),
      country: [],
      dateOfBirth: ['', this.checkAge],
      gender: [],
      phone: ['', Validators.pattern('^[+]84[0-9]{9,10}$')]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  get passwordControls() {
    return ((this.registerForm.get('passwordInput') as FormGroup).controls);
  }

  register() {
    this.submitted = true;
    console.log(this.registerForm.value);
    // console.warn(this.registerForm.value);
  }

  checkPassword(abstractControl: AbstractControl): any {
    const firstInput = abstractControl.value.password;
    const secondInput = abstractControl.value.confirmPassword;
    // console.log(firstInput);
    // console.log(secondInput);
    return firstInput === secondInput ? null : {invalidPassword: true};
  }

  checkAge(abstractAge: AbstractControl) {
    const dateOfBirth = abstractAge.value.substr(0, 4);
    const curDate = new Date().getFullYear();
    // console.log(curDate);
    return curDate - dateOfBirth >= 18 ? null : {invalidAge: true};
  }
}
