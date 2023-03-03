import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public isDone: boolean,
    public targetDate: Date
  ) {

  }
}

  @Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css']
  })
  export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn to code', false, new Date()),
    new Todo(2, 'Learn Spring boot', false, new Date()),
    new Todo(3, 'Learn Angular', false, new Date()),
    new Todo(4, 'Learn DSA', false, new Date())
  ]
}
