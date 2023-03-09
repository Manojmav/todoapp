package com.todoapp.sample.todoapp.services;

import com.todoapp.sample.todoapp.entities.ToDo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoServices {
  private static List<ToDo> todos = new ArrayList();
  private static long counter = 0;

  static {
    todos.add(new ToDo(++counter, "AngularApp", "Learn to Code", new Date(), false));
    todos.add(new ToDo(++counter, "AngularApp", "Learn Java", new Date(), false));
    todos.add(new ToDo(++counter, "AngularApp", "Learn Spring", new Date(), false));
    todos.add(new ToDo(++counter, "AngularApp", "Learn Angular", new Date(), false));
    todos.add(new ToDo(++counter, "AngularApp", "Learn TypeScript", new Date(), false));
  }

  public List<ToDo> findAll() {
    return todos;
  }

  public ToDo deleteToDoById(long id) {
    ToDo todo = findById(id);
    if (todo == null) {
      return null;
    }
    if (todos.remove(todo)) {
      return todo;
    }
    return null;

  }

  public ToDo saveTodo(ToDo todo) {
    if (todo.getId() == -1 || todo.getId() == 0) {
      todo.setId(++counter);
      todos.add(todo);
    } else {
      deleteToDoById(todo.getId());
      todos.add(todo);
    }
    return todo;
  }


  public ToDo findById(long id) {
    for (ToDo toDo : todos) {
      if (toDo.getId() == id) {
        return toDo;
      }
    }
    return null;
  }
}
