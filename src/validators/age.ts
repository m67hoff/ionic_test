import { FormControl } from '@angular/forms'

interface ValidationResult {
 [key:string]:boolean;
}

export class AgeValidator {

    static isValid(control: FormControl): ValidationResult {

        if (isNaN(control.value)) return { "not a number": true }
        if (control.value % 1 !== 0) return { "not a whole number": true }
        if (control.value < 18) return { "too young": true }
        if (control.value > 120) return { "not realistic": true }

        return null
    }
}