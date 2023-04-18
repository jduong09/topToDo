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

  const editTodo = (formData) => {
    // formData is an obj.
  };

  return { title, description, dueDate, editTodo };
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

/*
const editForm = () => {
  
}
*/

// formData returns a 6 element HTML Collection
// We iterate to 5, while skipping the last one because that is the submit button.
const FormController = {
  createTodo: (formData) => {
    const newTodo = ToDo(formData[0].value, formData[1].value, formData[2].value, formData[3].value, formData[4].value);
    projectToday.addTodo(newTodo);
    DomUpdater.addNewTodo(newTodo);
  },
  /*
  editTodo: (formData) => {
    const todo = saidToDo;
    saidTodo.editTodo(formData);

  }
  */
};

const DomUpdater = {
  addNewTodo: (todo) => {
    const listTodos = document.getElementById('list-todos');
    
    const listItemTodo = document.createElement('li');
    listItemTodo.innerHTML = `
      <div class="todo-information">
        <h3 class="todo-title">${todo.title}</h3>
        <span class="todo-description">${todo.description}</h3>
      </div>
    `;
    
    // Add edit and delete buttons to todo list item.
    const listButtons = document.createElement('ul');
    listButtons.classList.add('list-buttons');

    const listItemEdit = document.createElement('li');
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn-todo');
    const xmlns = 'http://www.w3.org/2000/svg';
    const svgBtnWidth = 18;
    const svgBtnHeight = 18;
    const svgEdit = document.createElementNS(xmlns, 'svg');
    btnEdit.appendChild(svgEdit);
    listItemEdit.appendChild(btnEdit);
    svgEdit.setAttributeNS(null, 'viewBox', '0 0 512 512');
    svgEdit.setAttributeNS(null, 'width', svgBtnWidth);
    svgEdit.setAttributeNS(null, 'height', svgBtnHeight);

    const pathEdit = document.createElementNS(xmlns, 'path');
    svgEdit.appendChild(pathEdit)
    pathEdit.setAttributeNS(null, 'd', 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z');

    const listItemDelete = document.createElement('li');
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-todo');
    const svgDelete = document.createElementNS(xmlns, 'svg');
    btnDelete.appendChild(svgDelete);
    listItemDelete.appendChild(btnDelete);
    svgDelete.setAttributeNS(null, 'viewBox', '0 0 448 512');
    svgDelete.setAttributeNS(null, 'width', svgBtnWidth);
    svgDelete.setAttributeNS(null, 'height', svgBtnHeight);

    const pathDelete = document.createElementNS(xmlns, 'path');
    svgDelete.appendChild(pathDelete);
    pathDelete.setAttributeNS(null, 'd', 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z');
    
    listButtons.append(listItemEdit, listItemDelete);
    listItemTodo.appendChild(listButtons);
    listTodos.append(listItemTodo);
  }
};
// On Script Load, let's do some basic stuff
// IIFE for adding event listener to submit button in todo form.
(function() {
  const divForm = document.getElementById('div-form');
  const form = document.getElementById('form-create-edit-todo');
  const btnSubmit = document.getElementById('button-submit');
 
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (form.getAttribute('data-purpose') === 'create') {
      FormController.createTodo(form.elements);
    } else {
      FormController.editTodo(form.elements);
    }
    divForm.classList.add('hide');
  });
})();

(function() {
  const btnCreateTodo = document.getElementById('btn-create-todo');
  const divForm = document.getElementById('div-form');

  btnCreateTodo.addEventListener('click', (e) => {
    e.preventDefault();

    // On clicking the plus button, if form is hidden, then unhide and display form, else hide it.
    if (divForm.classList.contains('hide')) {
      divForm.classList.remove('hide');
    } else {
      divForm.classList.add('hide');
    }
  });
})();
const projectToday = Project('today');
