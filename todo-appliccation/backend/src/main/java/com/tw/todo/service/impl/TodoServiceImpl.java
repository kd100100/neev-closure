package com.tw.todo.service.impl;

import com.tw.todo.exception.DuplicateTodoException;
import com.tw.todo.exception.TodoNotFoundException;
import com.tw.todo.model.Todo;
import com.tw.todo.repository.TodoRepository;
import com.tw.todo.service.TodoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public Todo createTodo(Todo todo) throws DuplicateTodoException {
        Optional<Todo> existingTodo = todoRepository.findByTitle(todo.getTitle());
        if (existingTodo.isPresent()) {
            throw new DuplicateTodoException();
        }

        return todoRepository.save(todo);
    }

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo getTodoById(long todoId) throws TodoNotFoundException {
        Optional<Todo> todo = todoRepository.findById(todoId);
        if (todo.isEmpty()) {
            throw new TodoNotFoundException();
        }

        return todo.get();
    }

    @Override
    public Todo updateTodo(long todoId, Todo todo) {
        return todoRepository.save(todo);
    }

}
