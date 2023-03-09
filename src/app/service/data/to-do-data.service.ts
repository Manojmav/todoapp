import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllToDos(userName: string) {
    console.log("User name ", userName);
    return this.http.get<Todo[]>(`${API_URL}/users/${userName}/todos`);
  }

  deleteToDo(userName: string, id: number) {
    return this.http.delete(`${API_URL}/users/${userName}/todos/${id}`);
  }

  retrieveToDo(userName: string, id: number) {
    return this.http.get<Todo>(`${API_URL}/users/${userName}/todos/${id}`);
  }

  updateTodo(userName: string, id: number, todo : Todo) {
    return this.http.put(`${API_URL}/users/${userName}/todos/${id}`,todo);
  }

  createTodo(userName: string, todo : Todo) {
    return this.http.post(`${API_URL}/users/${userName}/todos/`,todo);
  }

}
