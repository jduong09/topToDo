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

const createDOM = () => {
  const btnCreateTodo = document.getElementById('btn-create-todo');

  btnCreateTodo.addEventListener('click', (e) => {
    e.preventDefault();
  });
}

// Function to create 'New Todo' Form and append to Dom.
const createForm = () => {
  const divDashboard = document.getElementById('dashboard');
  const dashboardTodosList = document.getElementById('dashboard-todos-list');
  const form = document.createElement('form');
  
  divDashboard.insertBefore(form, dashboardTodosList);
  form.id = 'form-create-todo';

  const inputs = ['title', 'description', 'due-date', 'priority', 'notes'];
 
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
}

// formData returns a 6 element HTML Collection
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
    const listTodos = document.getElementById('list-todos');
    
    const listItemTodo = document.createElement('li');
    listItemTodo.innerHTML = `${todo.title}, ${todo.dueDate}`;

    listTodos.append(listItemTodo);
  }
}

// On Script Load, let's do some basic stuff
createDOM();
createForm();
const projectToday = Project('today');
