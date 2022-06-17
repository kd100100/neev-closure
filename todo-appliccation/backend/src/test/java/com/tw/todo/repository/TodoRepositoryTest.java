package com.tw.todo.repository;

import com.tw.todo.model.Todo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
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

    @Test
    public void shouldBeAbleToGetAllTodos() {
        String todoTitle = "Another Todo Title";
        boolean isCompleted = false;
        boolean isPriority = false;
        boolean isEdited = false;
        String created_at = "2020-01-01T00:00:00.000Z";
        Todo anotherTodo = new Todo(todoTitle, isCompleted, isPriority, isEdited, created_at);
        List<Todo> todos = List.of(todo, anotherTodo);
        todoRepository.saveAll(todos);

        List<Todo> allTodos = todoRepository.findAll();

        assertThat(allTodos.size(), is(equalTo(todos.size())));
    }

    @Test
    public void shouldBeAbleToGetTodoById() {
        Todo savedTodo = todoRepository.save(todo);
        long savedTodoId = savedTodo.getId();

        Todo foundTodo = todoRepository.findById(savedTodoId).get();

        assertThat(foundTodo.getTitle(), is(equalTo(savedTodo.getTitle())));
    }

    @Test
    public void shouldBeAbleToUpdateTodo() {
        Todo savedTodo = todoRepository.save(todo);
        long savedTodoId = savedTodo.getId();

        String newTitle = "New Todo Title";
        savedTodo.setTitle(newTitle);
        Todo updatedTodo = todoRepository.save(savedTodo);

        assertThat(updatedTodo.getTitle(), is(equalTo(newTitle)));
    }
}
