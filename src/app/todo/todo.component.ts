import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { ToDoDataService } from '../service/data/to-do-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(1, "", "", false, new Date());

  constructor(

    private route: ActivatedRoute,
    private service: ToDoDataService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.retrieveToDo('Angular', this.id).subscribe(
      response => {
        console.log(response);
        this.todo = response
      }
    )
  }


}
