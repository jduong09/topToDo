/* Build from the inside out */

/* To DO App */

/* 
  To Do Object
  Constructor
  {
    Title: 'Hello'
    Description: 'Hello i need to do this'
    Due Date: MM/DD/YYYY
    priority: Low/Med/High
    notes: 'fjkdafjkad;l'
  }

  ToDo Controller

  CRUD
  Create Todo
  Read Todo
  Update Todo
  Delete Todo

  To do object is an object that will be displayed as something that needs to be done.

  Project
  Constructor() {
    array = [];
  }

  readToDos
  Groups of Todos.
  [ToDo, ToDo, ToDo]
*/

function ToDo(title, description, dueDate, priority, notes) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
}

function Project(name) {
  this.name = name;
  let todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  }

  return { name, addTodo };
}

// Dashboard

// List of Projects

// List of Todos for the day? 

// All Todos

// Todos based on priority?

// Ability to create/update/ delete todo.

// ability to create/update/delete project/