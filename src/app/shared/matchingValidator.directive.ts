import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({

    selector:'[appConfirmEquqlValidator]',
    providers:[{
        provide : NG_VALIDATORS,
        useExisting: MatchingValidator,
        multi:true
    }]
})
export class MatchingValidator implements Validator{

    @Input() appConfirmEquqlValidator : string;
    validate(control : AbstractControl): {[key:string]:any}| null{

        const controlToCompare = control.parent.get(this.appConfirmEquqlValidator);
        if(controlToCompare && controlToCompare.value !== control.value)
        {
            return {'notEqual': true}
        }
        return null;
    }
}