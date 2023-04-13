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

  return { title, dueDate };
}

function Project(name) {
  this.name = name;
  let todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  }

  return { name, addTodo, todos };
}

// Dashboard

// List of Projects

// List of Todos for the day? 

// All Todos

// Todos based on priority?

// Ability to create/update/ delete todo.

// ability to create/update/delete project

// First interface is Todays ToDos

/*
const ToDoController = () => {
  const createTodo = (formData) => {
    const todo = FormController.createTodo(formData);

    projectToday.addTodo(todo);
    console.log(projectToday);
  }

  const editTodo = (formData) => {
    FormController.editTodo(formData);
  }

  return { createTodo }; 
}

*/

const createDOM = () => {
  const divMain = document.createElement('div');
  divMain.id = 'content';
  const btnCreateTodo = document.createElement('button');
  btnCreateTodo.innerHTML = '+';

  btnCreateTodo.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e);
  });

  divMain.append(btnCreateTodo);
  document.querySelector('body').appendChild(divMain);
}

const createForm = () => {
  const divMain = document.getElementById('content');
  const form = document.createElement('form');
  form.id = 'form-create-todo';

  const inputs = ['title', 'description', 'due-date', 'priority', 'notes'];

  for (let i = 0; i < inputs.length; i++) {
    const inputName = inputs[i];

    const label = document.createElement('label');
    label.setAttribute('for', inputName);

    const input = document.createElement('input');
    input.id = inputName;
    input.setAttribute('name', inputName);
    
    if (inputName === 'title' || inputName === 'description') {
      input.type = 'text';
    } else if (inputName === 'due-date') {
      input.type = 'date';
    }

    form.append(label, input);
  }

  /* Submit input */
  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'button-submit';
  btnSubmit.type = 'submit';
  btnSubmit.innerHTML = 'Create Todo';

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    FormController.createTodo(form.elements);
  });

  form.appendChild(btnSubmit);

  divMain.append(form);
}
// returns a 6 element HTML Collection
// We iterate to 5, while skipping the last one because that is the submit button.
const FormController = {
  createTodo: (formData) => {
    const newTodo = ToDo(formData[0].value, formData[1].value, formData[2].value, formData[3].value, formData[4].value);
    projectToday.addTodo(newTodo);
    DomUpdater.addNewTodo(newTodo);
  }
};

const DomUpdater = {
  addNewTodo: (todo) => {
    const divContent = document.getElementById('content');
    
    const divTodo = document.createElement('div');
    divTodo.innerHTML = `${todo.title}, ${todo.dueDate}`;

    divContent.append(divTodo);
  }
}

// On Script Load, let's do some basic stuff
createDOM();
createForm();
const projectToday = Project('today');
