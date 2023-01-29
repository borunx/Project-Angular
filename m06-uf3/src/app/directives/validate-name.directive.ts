import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validateName]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting:ValidateNameDirective,
      multi:true
    }
  ]
})
export class ValidateNameDirective {

  // special attribute of this class
  constructor() { }


  validate(control: AbstractControl): ValidationErrors|null {
    let valida:boolean=false;
    let pattern = /[a-zA-Z]+/;
    if(pattern.test(control.value)){
      valida=true;
    }
    return valida? null: {'custom':true};
  }
}
