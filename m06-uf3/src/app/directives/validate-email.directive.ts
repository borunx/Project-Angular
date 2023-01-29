import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validarEmail]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting:ValidateEmailDirective,
      multi:true
    }
  ]
})

export class ValidateEmailDirective implements Validator{
  
  
// special attribute of this class
  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors|null {
    let valida:boolean=false;
    let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/;
    if(pattern.test(control.value)){
      valida=true;
    }
    return valida? null: {'custom':true};
  }
  

}
