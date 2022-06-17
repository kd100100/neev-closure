package com.tw.todo.service;

import com.tw.todo.model.Todo;
import com.tw.todo.repository.TodoRepository;
import com.tw.todo.service.impl.TodoServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class TodoServiceTest {

    @Mock
    private TodoRepository todoRepository;

    @InjectMocks
    private TodoServiceImpl todoService;

    @Test
    public void shouldBeAbleToSaveNewTodoDetails() {
        String todoTitle = "Todo Title";
        boolean isCompleted = false;
        boolean isPriority = false;
        boolean isEdited = false;
        String created_at = "2020-01-01T00:00:00.000Z";
        Todo todo = new Todo(todoTitle, isCompleted, isPriority, isEdited, created_at);
        given(todoRepository.save(todo)).willReturn(todo);

        Todo savedTodo = todoService.createTodo(todo);

        assertThat(savedTodo.getTitle(), is(equalTo(todo.getTitle())));
    }
}
