package com.todoapp.sample.todoapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Todo {

  @Id
  @GeneratedValue
  private Long id;
  private String username;
  private String description;
  private Date targetDate;
  private boolean isCompleted;

  public Todo(long id, String username, String description, Date targetDate, boolean isCompleted) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.targetDate = targetDate;
    this.isCompleted = isCompleted;
  }

  public Todo() {
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getTargetDate() {
    return targetDate;
  }

  public void setTargetDate(Date targetDate) {
    this.targetDate = targetDate;
  }

  public boolean getIsCompleted() {
    return isCompleted;
  }

  public void setIsCompleted(boolean isCompleted) {
    this.isCompleted = isCompleted;
  }
}


