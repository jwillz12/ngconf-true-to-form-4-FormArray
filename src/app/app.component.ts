import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form = this._fb.group({
    todos: this._fb.array([], [Validators.minLength(1)]),
  });

  get todosFromArray(): FormArray {
    return this.form.controls.todos as FormArray;
  }

  get todosArrayFromGroups(): FormGroup[] {
    return this.todosFromArray.controls as FormGroup[];
  }

  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((formValues) => {
      return {
        ...formValues,
        valid: this.form.valid,
      };
    })
  );

  constructor(private _fb: FormBuilder) {}

  //Form Items coming from here
  addTodoFormGroup() {
    const newTodoGroup = this._fb.group({
      title: ['', [Validators.required]],
      complete: false,
    });

    this.todosFromArray.push(newTodoGroup);
  }

  removeFormGroup(index: number) {
    this.todosFromArray.removeAt(index);
  }
}
