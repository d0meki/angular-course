import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '@app/reactive-form/utils/form.utils';
import { Divider } from 'primeng/divider';
import { Card } from 'primeng/card';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-reactive-dynamic-page',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    Divider,
    Card,
    FloatLabel,
    InputTextModule,
    Button,
    MessageModule,
    InputGroup,
    InputGroupAddon,
  ],
  templateUrl: './reactive-dynamic-page.html',
  styleUrl: './reactive-dynamic-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveDynamicPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.minLength(2),
    ),
  });

  newFavorite = new FormControl('', Validators.required);
  // newFavorite = this.fb.control([])

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(this.fb.control(newGame, Validators.required));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
