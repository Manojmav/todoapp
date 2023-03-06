package com.todoapp.sample.todoapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class ToDo {

  @Id
  private long id;
  private String userName;
  private String description;
  private Date targetDate;
  private boolean isCompleted;

  public ToDo(long id, String userName, String description, Date targetDate, boolean isCompleted) {
    this.id = id;
    this.userName = userName;
    this.description = description;
    this.targetDate = targetDate;
    this.isCompleted = isCompleted;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
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


