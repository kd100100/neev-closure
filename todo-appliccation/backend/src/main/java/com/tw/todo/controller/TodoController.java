package com.tw.todo.controller;

import com.tw.todo.exception.DuplicateTodoException;
import com.tw.todo.model.Todo;
import com.tw.todo.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Todo createTodo(@RequestBody Todo todo) throws DuplicateTodoException {
        return todoService.createTodo(todo);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleException(DuplicateTodoException exception) {
        return "Duplicate Todo Title";
    }

}