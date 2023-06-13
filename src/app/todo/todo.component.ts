import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() index: number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
