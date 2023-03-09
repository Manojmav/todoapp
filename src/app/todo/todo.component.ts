import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { ToDoDataService } from '../service/data/to-do-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  id: number = 0;
  todo: Todo = new Todo(this.id, "", "", false, new Date());;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ToDoDataService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", "", false, new Date());
    if (this.id != -1) {
      this.service.retrieveToDo('Angular', this.id).subscribe(
        response => {
          console.log(response);
          this.todo = response
        }
      )
    }
  }

  saveToDo() {
    if (this.id != -1) {
      this.service.createTodo('Angular', this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos']);
          //this.todo = response
        })
    }
    else {
      this.service.updateTodo('Angular', this.id, this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos']);
          //this.todo = response
        })
    }
  }
}
