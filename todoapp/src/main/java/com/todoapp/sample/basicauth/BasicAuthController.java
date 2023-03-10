package com.todoapp.basicauth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthController {

  @GetMapping("/basicAuth")
  public AuthenticationBean basicAuth(){
     return new AuthenticationBean(String.format("You are Authenticated!!!"));
  }
}

