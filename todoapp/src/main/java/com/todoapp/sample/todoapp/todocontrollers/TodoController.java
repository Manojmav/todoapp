package com.todoapp.sample.todoapp.todocontrollers;

import com.todoapp.sample.todoapp.entities.Todo;
import com.todoapp.sample.todoapp.services.ToDoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
public class TodoController {

  @Autowired
  private ToDoServices todoServices;

  @GetMapping("/users/{userName}/todos")
  public List<Todo> getListOfTodos(@PathVariable String userName) {
    return todoServices.findAll();
  }

  @GetMapping("/users/{userName}/todos/{toDoId}")
  public Todo getToDoById(@PathVariable String userName, @PathVariable long toDoId) {
    return todoServices.findById(toDoId);
  }

  @DeleteMapping("/users/{userName}/todos/{toDoId}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String userName, @PathVariable long toDoId) {
    Todo todo = todoServices.deleteToDoById(toDoId);
    if (todo != null) {
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build();
  }

  @PutMapping("/users/{userName}/todos/{toDoId}")
  public ResponseEntity<Todo> updateToDo(@PathVariable String userName, @PathVariable long toDoId, @RequestBody Todo toDo) {
    Todo updated =  todoServices.saveTodo(toDo);
    return new ResponseEntity<Todo>(updated,HttpStatus.OK);
  }

  @PostMapping("/users/{userName}/todos/")
  public ResponseEntity<Void> updateToDo(@PathVariable String userName, @RequestBody Todo toDo) {
    Todo createdTodo =  todoServices.saveTodo(toDo);
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }
}
