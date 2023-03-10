package com.todoapp.sample.todoapp.repository;

import com.todoapp.sample.todoapp.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Long> {
    List<Todo> findByUsername(String username);
}
