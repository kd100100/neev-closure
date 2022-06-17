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
        checkIfDuplicateTodoExists(todo.getTitle());

        return todoRepository.save(todo);
    }

    private void checkIfDuplicateTodoExists(String todoTitle) throws DuplicateTodoException {
        Optional<Todo> existingTodo = todoRepository.findByTitle(todoTitle);
        if (existingTodo.isPresent()) {
            throw new DuplicateTodoException();
        }
    }

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo getTodoById(long todoId) throws TodoNotFoundException {
        Todo todo = checkIfTodoExists(todoId);

        return todo;
    }

    @Override
    public Todo updateTodo(long todoId, Todo todo) throws TodoNotFoundException {
        Todo existingTodo = checkIfTodoExists(todoId);

        updateTodoDetails(todo, existingTodo);

        return todoRepository.save(existingTodo);
    }

    private void updateTodoDetails(Todo todo, Todo existingTodo) {
        existingTodo.setTitle(todo.getTitle());
        existingTodo.setIsCompleted(todo.getIsCompleted());
        existingTodo.setIsPriority(todo.getIsPriority());
        existingTodo.setIsEdited(todo.getIsEdited());
        existingTodo.setCreatedAt(todo.getCreatedAt());
    }

    private Todo checkIfTodoExists(long todoId) throws TodoNotFoundException {
        Optional<Todo> existingTodo = todoRepository.findById(todoId);
        if (existingTodo.isEmpty()) {
            throw new TodoNotFoundException();
        }
        return existingTodo.get();
    }

}
