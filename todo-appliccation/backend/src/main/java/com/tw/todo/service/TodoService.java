package com.tw.todo.service;

import com.tw.todo.exception.DuplicateTodoException;
import com.tw.todo.model.Todo;

public interface TodoService {
    Todo createTodo(Todo todo) throws DuplicateTodoException;
}