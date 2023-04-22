/* Build from the inside out */
import { v4 as uuidv4 } from 'uuid';
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
  Create Todo (done)
  Read Todo 
  Update Todo (done)
  Delete Todo (done)
*/

const ToDo = (title, description, dueDate, priority, notes) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _notes = notes;

  const uuid = uuidv4();

  const editTodo = (formData) => {
    // formData is an html collection array
    _title = formData[0].value;
    _description = formData[1].value;
    _dueDate = formData[2].value;
    _priority = formData[3].value;
    _notes = formData[4].value;
  };

  const getInfo = () => {
    return { _title, _description, _dueDate, _priority, _notes };
  };

  return { getInfo, uuid, editTodo };
}

function Project(name) {
  let todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  }

  return { name, todos, addTodo };
}

// Dashboard

// List of Projects

// List of Todos for the day? 

// All Todos

// Todos based on priority?

// Ability to create/update/delete todo.

// Ability to create/update/delete project
function createTodoListItem(todo) {
  const todoInformation = todo.getInfo();
  
  const listItemTodo = document.createElement('li');
  /*
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _notes = notes;
  */
  listItemTodo.innerHTML = `
    <div class="todo-information">
      <h3 class="todo-title">${todoInformation._title}</h3>
      <span class="todo-description">${todoInformation._description}</span>
    </div>
    <div class="todo-details hide">
      <ul class="list-details">
        <li><b>Due Date:</b> ${todoInformation._dueDate}</li>
        <li><b>Priority:</b> ${todoInformation._priority}</li>
        <li><b>Notes:</b> ${todoInformation._notes}</li>
      </ul>
    </div>
  `;

  listItemTodo.setAttribute('data-uuid', todo.uuid);
  
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

  // Add event listener to btnEdit for editing todo.
  btnEdit.addEventListener('click', (e) => {
    e.preventDefault();

    const divParent = e.currentTarget.parentElement.parentElement.parentElement;
    const uuid = divParent.getAttribute('data-uuid');

    DomUpdater.editTodo(uuid);
    DomUpdater.setFormPurpose('edit');
  });

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
  
  // Add event listener to btnDelete for deleting todo.
  btnDelete.addEventListener('click', (e) => {
    // Function for deleting todo.
    e.preventDefault();
    // We need to know which todo it is.
    const divParent = e.currentTarget.parentElement.parentElement.parentElement;
    const uuid = divParent.getAttribute('data-uuid');
    // Object holding todos will just delete key, effectively deleting todo.
    delete todos[uuid];
    DomUpdater.updateTodoList();
    // Update Dom, with todo being deleted.
  });

  // Add Expand button
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
  const listItemDetails = document.createElement('li');
  const btnDetails = document.createElement('button');
  btnDetails.classList.add('btn-todo');
  const svgDetail = document.createElementNS(xmlns, 'svg');
  btnDetails.appendChild(svgDetail);
  listItemDetails.appendChild(btnDetails);
  svgDetail.setAttributeNS(null, 'viewBox', '0 0 512 512');
  svgDetail.setAttributeNS(null, 'width', svgBtnWidth);
  svgDetail.setAttributeNS(null, 'height', svgBtnHeight);

  const pathDetail = document.createElementNS(xmlns, 'path');
  svgDetail.appendChild(pathDetail);
  pathDetail.setAttributeNS(null, 'd', 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z');

  // Add event listener for btnDetails.
  btnDetails.addEventListener('click', (e) => {
    e.preventDefault();

    // reveal div-details
    const divParent = e.currentTarget.parentElement.parentElement.parentElement;
    const todoDetails = divParent.children[2];

    if (todoDetails.classList.contains('hide')) {
      todoDetails.classList.remove('hide');
      divParent.classList.add('open');
    } else {
      todoDetails.classList.add('hide');
      divParent.classList.remove('open');
    }
  });

  listButtons.append(listItemEdit, listItemDelete, listItemDetails);

  const todoDetails = listItemTodo.children[1];
  listItemTodo.insertBefore(listButtons, todoDetails);
  // listItemTodo.appendChild(listButtons);
  
  return listItemTodo;
}

// formData returns a 6 element HTML Collection
// We iterate to 5, while skipping the last one because that is the submit button.
const FormController = {
  createTodo: (formData) => {
    const newTodo = ToDo(formData[0].value, formData[1].value, formData[2].value, formData[3].value, formData[4].value);
    todos[newTodo.uuid] = newTodo;
    projectToday.addTodo(newTodo);
    DomUpdater.clearForm();
    DomUpdater.addNewTodo(newTodo);
  },
  
  editTodo: (uuid, formData) => {
    const todo = todos[uuid];
    todo.editTodo(formData);
    DomUpdater.updateTodo(uuid, todo.getInfo());
    DomUpdater.clearForm();
    DomUpdater.setFormPurpose('create');
  }
};

const DomUpdater = {
  addNewTodo: (todo) => {
    const listTodos = document.getElementById('list-todos');
    const listItemTodo = createTodoListItem(todo);

    listTodos.appendChild(listItemTodo);
  },
  editTodo: (uuid) => {
    const todo = todos[uuid];
    const todoInformation = todo.getInfo();

    const divForm = document.getElementById('div-form');
    const headerForm = document.getElementById('header-form');
    const formEdit = document.getElementById('form-create-edit-todo');
    const inputElements = formEdit.elements;
    const buttonSubmit = document.getElementById('button-submit');
    
    headerForm.innerHTML = 'Edit';
    buttonSubmit.innerHTML = 'Edit Todo';
    formEdit.setAttribute('data-uuid', uuid);

    for (let i = 0; i < 5; i++) {
      const inputElement = inputElements[i];

      if (i === 0) {
        inputElement.value = todoInformation._title;
      } else if (i === 1) {
        inputElement.value = todoInformation._description;
      } else if (i === 2) {
        inputElement.value = todoInformation._dueDate;
      } else if (i === 3) {
        inputElement.value = todoInformation._priority;
      } else if (i === 4) {
        inputElement.value = todoInformation._notes;
      } 
    }
    divForm.classList.remove('hide');
  },
  updateTodo: (uuid, todoInformation) => {
    const liUuid = document.querySelector(`li[data-uuid="${uuid}"]`);
    const divTodoInformation = liUuid.children[0];
    divTodoInformation.children[0].innerHTML = todoInformation._title;
    divTodoInformation.children[1].innerHTML = todoInformation._description;
  },
  clearForm: () => {
    const form = document.getElementById('form-create-edit-todo');
    const formElements = form.elements;

    for (let i = 0; i < 5; i++) {
      if (i === 3) {
        formElements[3].children[0].setAttribute('selected', 'selected');
        continue;
      }
      formElements[i].value = '';
    }
  },
  setFormPurpose: (type) => {
    const form = document.getElementById('form-create-edit-todo');
    const headerForm = document.getElementById('header-form');
    const btnSubmit = document.getElementById('button-submit');

    if (type === 'edit') {
      headerForm.innerHTML = 'Edit';
      btnSubmit.innerHTML = 'Edit Todo';
    } else {
      headerForm.innerHTML = 'Create';
      btnSubmit.innerHTML = 'Create Todo';
    }
    
    form.setAttribute('data-purpose', type);
  },
  updateTodoList: () => {
    const listTodos = document.getElementById('list-todos');
    listTodos.innerHTML = '';
    for (const todo in todos) {
      const listItemTodo = createTodoListItem(todos[todo]);
      listTodos.appendChild(listItemTodo);
    }
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
      FormController.editTodo(form.getAttribute('data-uuid'), form.elements);
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
let todos = {};
