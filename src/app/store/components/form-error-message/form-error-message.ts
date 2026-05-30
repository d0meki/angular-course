import { ChangeDetectionStrategy, Component, input, inject, ChangeDetectorRef, DoCheck } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormUtils } from '@app/reactive-form/utils/form.utils';
import { Message } from "primeng/message";

@Component({
  selector: 'form-error-message',
  imports: [Message],
  template: `
  @if (errorMessage) {
    <p-message severity="error">{{ errorMessage }}</p-message>
  }
  `,
  styleUrl: './form-error-message.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorMessageComponent implements DoCheck {
  control = input.required<AbstractControl>();
  private cdr = inject(ChangeDetectorRef);

  private lastTouched = false;
  private lastStatus = '';
  private lastErrors: ValidationErrors | null = null;

  ngDoCheck(): void {
    const ctrl = this.control();
    if (!ctrl) return;

    if (
      ctrl.touched !== this.lastTouched ||
      ctrl.status !== this.lastStatus ||
      ctrl.errors !== this.lastErrors
    ) {
      this.lastTouched = ctrl.touched;
      this.lastStatus = ctrl.status;
      this.lastErrors = ctrl.errors;
      this.cdr.markForCheck();
    }
  }

  get errorMessage() {
    const errors: ValidationErrors = this.control().errors || {};
    
    return this.control().touched && Object.keys(errors).length > 0
      ? FormUtils.getTextError(errors)
      : null;
  }
}

