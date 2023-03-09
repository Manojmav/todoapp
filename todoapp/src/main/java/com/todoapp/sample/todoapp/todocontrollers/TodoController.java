package com.todoapp.sample.todoapp.todocontrollers;

import com.todoapp.sample.todoapp.entities.ToDo;
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
  private ToDoServices toDoServices;

  @GetMapping("/users/{userName}/todos")
  public List<ToDo> getListOfTodos(@PathVariable String userName) {
    return toDoServices.findAll();
  }

  @GetMapping("/users/{userName}/todos/{toDoId}")
  public ToDo getToDoById(@PathVariable String userName, @PathVariable long toDoId) {
    return toDoServices.findById(toDoId);
  }

  @DeleteMapping("/users/{userName}/todos/{toDoId}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String userName, @PathVariable long toDoId) {
    ToDo todo = toDoServices.deleteToDoById(toDoId);
    if (todo != null) {
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build();
  }

  @PutMapping("/users/{userName}/todos/{toDoId}")
  public ResponseEntity<ToDo> updateToDo(@PathVariable String userName, @PathVariable long toDoId, @RequestBody ToDo toDo) {
    ToDo updated =  toDoServices.saveTodo(toDo);
    return new ResponseEntity<ToDo>(updated,HttpStatus.OK);
  }

  @PostMapping("/users/{userName}/todos/")
  public ResponseEntity<Void> updateToDo(@PathVariable String userName, @RequestBody ToDo toDo) {
    ToDo createdTodo =  toDoServices.saveTodo(toDo);
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }
}
