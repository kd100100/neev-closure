package com.tw.todo.repository;

import com.tw.todo.model.Todo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;

@DataJpaTest
public class TodoRepositoryTest {

    @Autowired
    private TodoRepository todoRepository;

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
    public void shouldBeAbleToSaveNewTodoDetails() {
        Todo savedTodo = todoRepository.save(todo);

        assertThat(savedTodo.getId(), is(greaterThanOrEqualTo(1L)));
    }
}
