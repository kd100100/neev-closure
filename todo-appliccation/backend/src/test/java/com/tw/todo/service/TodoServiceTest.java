package com.tw.todo.service;

import com.tw.todo.exception.DuplicateTodoException;
import com.tw.todo.exception.TodoNotFoundException;
import com.tw.todo.model.Todo;
import com.tw.todo.repository.TodoRepository;
import com.tw.todo.service.impl.TodoServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class TodoServiceTest {

    @Mock
    private TodoRepository todoRepository;

    @InjectMocks
    private TodoServiceImpl todoService;

    private Todo todo;

    @BeforeEach
    public void setup() {
        String todoTitle = "Todo Title";
        boolean isCompleted = false;
        boolean isPriority = false;
        boolean isEdited = false;
        String created_at = "2020-01-01T00:00:00.000Z";
        todo = new Todo(todoTitle, isCompleted, isPriority, isEdited, created_at);
    }

    @Test
    public void shouldBeAbleToSaveNewTodoDetails() throws DuplicateTodoException {
        given(todoRepository.findByTitle(todo.getTitle())).willReturn(Optional.empty());
        given(todoRepository.save(todo)).willReturn(todo);

        Todo savedTodo = todoService.createTodo(todo);

        assertThat(savedTodo.getTitle(), is(equalTo(todo.getTitle())));
    }

    @Test
    public void shouldNotBeAbleToSaveDuplicateTodo() {
        given(todoRepository.findByTitle(todo.getTitle())).willReturn(Optional.of(todo));

        assertThrows(DuplicateTodoException.class, () -> {
            todoService.createTodo(todo);
        });
    }

    @Test
    public void shouldBeAbleToGetAllTodos() {
        String todoTitle = "Another Todo Title";
        boolean isCompleted = false;
        boolean isPriority = false;
        boolean isEdited = false;
        String created_at = "2020-01-01T00:00:00.000Z";
        Todo anotherTodo = new Todo(todoTitle, isCompleted, isPriority, isEdited, created_at);
        List<Todo> todos = List.of(todo, anotherTodo);
        given(todoRepository.findAll()).willReturn(todos);

        List<Todo> allTodos = todoService.getAllTodos();

        assertThat(allTodos.size(), is(equalTo(todos.size())));
    }

    @Test
    public void shouldBeAbleToGetTodoById() throws TodoNotFoundException {
        given(todoRepository.findById(1L)).willReturn(Optional.of(todo));

        Todo todoById = todoService.getTodoById(1L);

        assertThat(todoById.getTitle(), is(equalTo(todo.getTitle())));
    }
}
