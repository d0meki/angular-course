import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '@app/reactive-form/utils/form.utils';
import { Divider } from 'primeng/divider';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-reactive-basic-page',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    Divider,
    Card,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabel,
    InputTextModule,
    Button,
    InputNumber,
    MessageModule,
  ],
  templateUrl: './reactive-basic-page.html',
  styleUrl: './reactive-basic-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveBasicPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  // myForm2 = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  // isValidField(fieldName: string): boolean | null {
  //   return this.myForm.controls[fieldName].errors && this.myForm.controls[fieldName].touched;
  // }

  // getFieldError(fieldName: string): string | null {
  //   if (!this.myForm.controls[fieldName]) return null;

  //   const errors = this.myForm.controls[fieldName].errors ?? {};

  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case 'required':
  //         return 'Este campo es requerido';

  //       case 'minlength':
  //         return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

  //       case 'min':
  //         return `Valor mínimo de ${errors['min'].min}`;
  //     }
  //   }

  //   return null;
  // }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
