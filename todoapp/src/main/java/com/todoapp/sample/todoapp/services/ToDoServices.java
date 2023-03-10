package com.todoapp.sample.todoapp.services;

import com.todoapp.sample.todoapp.entities.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoServices {
  private static List<Todo> todos = new ArrayList();
  private static long counter = 0;

  static {
    todos.add(new Todo(++counter, "AngularApp", "Learn to Code", new Date(), false));
    todos.add(new Todo(++counter, "AngularApp", "Learn Java", new Date(), false));
    todos.add(new Todo(++counter, "AngularApp", "Learn Spring", new Date(), false));
    todos.add(new Todo(++counter, "AngularApp", "Learn Angular", new Date(), false));
    todos.add(new Todo(++counter, "AngularApp", "Learn TypeScript", new Date(), false));
  }

  public List<Todo> findAll() {
    return todos;
  }

  public Todo deleteToDoById(long id) {
    Todo todo = findById(id);
    if (todo == null) {
      return null;
    }
    if (todos.remove(todo)) {
      return todo;
    }
    return null;

  }

  public Todo saveTodo(Todo todo) {
    if (todo.getId() == -1 || todo.getId() == 0) {
      todo.setId(++counter);
      todos.add(todo);
    } else {
      deleteToDoById(todo.getId());
      todos.add(todo);
    }
    return todo;
  }


  public Todo findById(long id) {
    for (Todo toDo : todos) {
      if (toDo.getId() == id) {
        return toDo;
      }
    }
    return null;
  }
}
