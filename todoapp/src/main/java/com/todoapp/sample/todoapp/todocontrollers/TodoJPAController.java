package com.todoapp.sample.todoapp.todocontrollers;

import com.todoapp.sample.todoapp.entities.Todo;
import com.todoapp.sample.todoapp.repository.TodoRepository;
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
public class TodoJPAController {

  @Autowired
  private ToDoServices toDoServices;

  @Autowired
  private TodoRepository todoRepository;

  @GetMapping("/jpa/users/{userName}/todos")
  public List<Todo> getAllTodos(@PathVariable String userName) {
    return todoRepository.findByUsername(userName);
//    return todoRepository.findAll();
  }

  @GetMapping("/jpa/users/{userName}/todos/{id}")
  public Todo getTodoById(@PathVariable String userName, @PathVariable long id) {
    return todoRepository.findById(id).get();
  }

  @DeleteMapping("/jpa/users/{userName}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String userName, @PathVariable long id) {
    todoRepository.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @PutMapping("/jpa/users/{userName}/todos/{toDoId}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String userName, @PathVariable long toDoId, @RequestBody Todo toDo) {
    Todo updated = todoRepository.save(toDo);
    return new ResponseEntity<Todo>(updated, HttpStatus.OK);
  }

  @PostMapping("/jpa/users/{userName}/todos/")
  public ResponseEntity<Void> createTodo(@PathVariable String userName, @RequestBody Todo toDo) {
    toDo.setUsername(userName);
    Todo createdTodo = todoRepository.save(toDo);
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
    return ResponseEntity.created(uri).build();
  }
}
