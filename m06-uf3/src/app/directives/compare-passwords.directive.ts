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
//atributo especial de esta clase
  @Input() parametro:any;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors|null {
    let valida:boolean=false;

    if(control.value == this.parametro){//es el que va a mirar lo que sea del campo: repetir contraseña sea de minimo 5
      valida=true;
    }
    return valida? null: {'custom':true};


  }


}