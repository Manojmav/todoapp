import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllToDos(userName: string) {
    console.log("User name ", userName);
    return this.http.get<Todo[]>(`http://localhost:8080/users/${userName}/todos`);
  }

  deleteToDo(userName: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${userName}/todos/${id}`);
  }

  retrieveToDo(userName: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${userName}/todos/${id}`);
  }
}
