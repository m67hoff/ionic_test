import { FormControl } from '@angular/forms'

interface ValidationResult {
 [key:string]:boolean;
}

export class UsernameValidator {

    static checkUsernameAsync(control: FormControl): Promise<ValidationResult> {

        return new Promise(resolve => {

            //Fake a slow response from server
            setTimeout(() => {
                if (control.value.toLowerCase() === "greg") {
                    resolve({ "username taken": true })
                } else {
                    resolve(null)
                }
            }, 2500)

        })
    }

}
