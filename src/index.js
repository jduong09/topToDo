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

// Ability to create/update/delete todo.

// Ability to create/update/delete project

// First interface is Todays Todos

/*
const ToDoController = () => {
  const createTodo = (formData) => {
    const todo = FormController.createTodo(formData);

    projectToday.addTodo(todo);
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
  });

  divMain.append(btnCreateTodo);
  document.querySelector('body').appendChild(divMain);
}

// Function to create 'New Todo' Form and append to Dom.
const createForm = () => {
  const divMain = document.getElementById('content');
  const form = document.createElement('form');
  form.id = 'form-create-todo';

  // Create new todo form
  // input[text] Title
  // input[text] Description
  // input[date] Due Date
  // select Priority
  // textArea Notes
  const inputs = ['title', 'description', 'due-date', 'priority', 'notes'];

  /*
  const inputTitle = document.createElement('input');
  inputTitle.id = 'title';
  inputTitle.setAttribute('name', 'title');
  inputTitle.type = 'text';


  const inputDescription = document.createElement('input');
  inputDescription.id = 'description';
  inputDescription.setAttribute('name', 'description');
  inputDescription.type = 'text';

  const inputDueDate = document.createElement('input');
  inputDueDate.id = 'due-date';
  inputDueDate.setAttribute('name', 'due-date');
  inputDueDate.type = 'date';
  */

 
  for (let i = 0; i < inputs.length; i++) {
    const inputName = inputs[i];

    const label = document.createElement('label');
    label.setAttribute('for', inputName);

    if (inputName === 'title' || inputName === 'description') {
      const input = document.createElement('input');
      label.innerHTML = `${inputName.slice(0, 1).toUpperCase() + inputName.slice(1)}:`;
      input.id = inputName;
      input.setAttribute('name', inputName);
      input.type = 'text';
      form.append(label, input);
    } else if (inputName === 'due-date') {
      label.innerHTML = 'Due Date:';
      const input = document.createElement('input');
      input.id = inputName;
      input.setAttribute('name', inputName);
      input.type = 'date';
      form.append(label, input);
    } else if (inputName === 'priority') {
      label.innerHTML = 'Priority:';
      const select = document.createElement('select');
      select.setAttribute('name', inputName);
      const optionLow = document.createElement('option');
      optionLow.setAttribute('value', 'low');
      optionLow.innerHTML = 'Low';

      const optionMedium = document.createElement('option');
      optionMedium.setAttribute('value', 'medium');
      optionMedium.innerHTML = 'Medium';

      const optionHigh = document.createElement('option');
      optionHigh.setAttribute('value', 'high');
      optionHigh.innerHTML = 'High';

      select.append(optionLow, optionMedium, optionHigh);
      form.append(label, select);
    } else {
      label.innerHTML = 'Notes:';
      const textArea =  document.createElement('textarea');
      textArea.id = inputName;
      textArea.setAttribute('name', inputName);
      textArea.setAttribute('rows', 5);
      textArea.setAttribute('cols', 33);
      textArea.placeholder = 'Contact Justin at...';

      form.append(label, textArea);
    }
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
