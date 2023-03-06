import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoDataService } from '../service/data/to-do-data.service';

export class Todo {
  constructor(
    public id: number,
    public userName: string,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {



  todos: Todo[] = []
  message: string = '';
  // new Todo(1, 'Learn to code', false, new Date()),
  // new Todo(2, 'Learn Spring boot', false, new Date()),
  // new Todo(3, 'Learn Angular', false, new Date()),
  // new Todo(4, 'Learn DSA', false, new Date())
  constructor(
    private toDoDataService: ToDoDataService,
    private router: Router) {
  }
  ngOnInit() {
    this.refreshToDos();
  }

  refreshToDos() {
    this.toDoDataService.retrieveAllToDos("welcome").subscribe(
      response => {
        this.todos = response;
        //console.log(this.todos);
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`Delete To do ${id}`);
    this.toDoDataService.deleteToDo("welcome", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo of ${id} is successful!!`
        this.refreshToDos();
      }
    )
  }

  updateTodo(id: number) {
    console.log("update ", id);
    this.router.navigate(['todos', id])
  }
}
