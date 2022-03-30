import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const namePattern = new RegExp(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -'"
);

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css'],
})
export class FormFieldErrorExample {
  givenName = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100),
    Validators.pattern(namePattern),
  ]);

  public getErrorMessage(formControlWithModel: FormControl) {
    const errors: string[] = [];
    if (formControlWithModel.hasError('required')) {
      errors.push(`Field is required`);
    }
    if (formControlWithModel.hasError('minLength')) {
      errors.push('You must enter a minLength');
    }
    if (formControlWithModel.hasError('maxLength')) {
      errors.push('You must enter a maxLength');
    }
    if (formControlWithModel.hasError('pattern')) {
      errors.push('pattern');
    }
    return errors.length > 0 ? errors : null;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
