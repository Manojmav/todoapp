package com.todoapp.sample.todoapp.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

  @GetMapping("/hello")
  public String helloWorld(){
    return "Hello World";
  }

  @GetMapping("/hello/welcome/{name}")
  public HelloWorldBean helloWorldBean(@PathVariable String name){
     return new HelloWorldBean(String.format("Hello World, from webservices  %s",name));
  }
}
