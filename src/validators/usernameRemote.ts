import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AuthProvider } from '../providers/auth/auth';

interface ValidationResult {
    [key: string]: boolean;
}

@Injectable()
export class UsernameValidatorRemote {

    debouncer: any

    constructor(public authProvider: AuthProvider) {

    }


    checkUsernameAsync(control: FormControl): Promise<ValidationResult> {

        clearTimeout(this.debouncer);

        return new Promise(resolve => {

            this.debouncer = setTimeout(() => {

                this.authProvider.validateUsername(control.value).subscribe(
                    (res) => {
                        console.log(res)
                        resolve(null);
                    }, (err) => {
                        console.log(err)
                        resolve({ 'username taken': true });
                    });

            }, 1000);


        })
    }

}
