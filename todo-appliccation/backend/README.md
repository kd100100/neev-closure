# TODO Application - Backend

This is a simple TODO application that allows you to create, read, update, and delete TODOs. It is built using Spring Boot and PostgreSQL. The application uses port `8080` by default.

## API Endpoints:

---

### Create a new todo - `POST` `/api/todos`
Sample request body:
```
{
    "title": "New todo",
    "isCompleted": false,
    "isPriority": true,
    "isEdited": false,
    "createdAt": "2018-03-23T15:00:00Z"
}
```
HTTP Status Codes:
```
Successful - 201 (Created)
Duplicate todo - 400 (Bad Request)
```
Sample response body:
```
{
    "id": 1,
    "title": "New todo",
    "isCompleted": false,
    "isPriority": true,
    "isEdited": false,
    "createdAt": "2018-03-23T15:00:00Z"
}
```
---

### Get all todos - `GET` `/api/todos`
HTTP Status Codes:
```
Successful - 200 (OK)
```
Sample response body:
```
[
    {
        "id": 1,
        "title": "New todo 1",
        "isCompleted": false,
        "isPriority": true,
        "isEdited": false,
        "createdAt": "2018-03-23T15:00:00Z"
    },
    {
        "id": 2,
        "title": "New todo 2",
        "isCompleted": false,
        "isPriority": true,
        "isEdited": false,
        "createdAt": "2018-03-23T15:00:00Z"
    }
]
```
---

### Get a todo by id - `GET` `/api/todos/:id`
HTTP Status Codes:
```
Successful - 200 (OK)
Not found - 404 (Not Found)
```
Sample response body:
```
{
    "id": 1,
    "title": "New todo",
    "isCompleted": false,
    "isPriority": true,
    "isEdited": false,
    "createdAt": "2018-03-23T15:00:00Z"
}
```
---

### Update a todo by id - `PUT` `/api/todos/:id`
Sample request body:
```
{
    "title": "New todo",
    "isCompleted": false,
    "isPriority": true,
    "isEdited": false,
    "createdAt": "2018-03-23T15:00:00Z"
}
```
HTTP Status Codes:
```
Successful - 200 (OK)
Not found - 404 (Not Found)
```
Sample response body:
```
{
    "id": 1,
    "title": "New todo",
    "isCompleted": false,
    "isPriority": true,
    "isEdited": false,
    "createdAt": "2018-03-23T15:00:00Z"
}
```
---

### Delete a todo by id - `DELETE` `/api/todos/:id`
HTTP Status Codes:
```
Successful - 200 (OK)
Not found - 404 (Not Found)
```
Sample response body:
```
{
    "id": 1,
    "title": "New todo",
    "isCompleted": false,
    "isPriority": true,
    "isEdited": false,
    "createdAt": "2018-03-23T15:00:00Z"
}
```
---