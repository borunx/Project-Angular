import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[comparar]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting:ComparePasswordsDirective,
      multi:true
    }
  ]
})

export class ComparePasswordsDirective implements Validator{
// special attribute of this class
  @Input() parametro:any;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors|null {
    let valida:boolean=false;

    if(control.value == this.parametro){
      valida=true;
    }
    return valida? null: {'custom':true};


  }


}