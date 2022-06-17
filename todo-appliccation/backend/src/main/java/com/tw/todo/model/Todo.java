package com.tw.todo.model;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "is_completed", nullable = false)
    private boolean isCompleted;

    @Column(name = "is_priority", nullable = false)
    private boolean isPriority;

    @Column(name = "is_edited", nullable = false)
    private boolean isEdited;

    @Column(name = "created_at", nullable = false)
    private ZonedDateTime createdAt;

    public Todo() {
        super();
    }

    public Todo(String title, boolean isCompleted, boolean isPriority, boolean isEdited, String createdAt) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.isPriority = isPriority;
        this.isEdited = isEdited;
        this.createdAt = ZonedDateTime.parse(createdAt);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    public boolean getIsPriority() {
        return isPriority;
    }

    public void setIsPriority(boolean isPriority) {
        this.isPriority = isPriority;
    }

    public boolean getIsEdited() {
        return isEdited;
    }

    public void setIsEdited(boolean isEdited) {
        this.isEdited = isEdited;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
