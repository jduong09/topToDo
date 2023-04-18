/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

  return { title, description, dueDate };
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
// Function to create 'New Todo' Form and append to Dom.
const createForm = () => {
  const divDashboard = document.getElementById('dashboard');
  const dashboardTodosList = document.getElementById('dashboard-todos-list');
  const form = document.createElement('form');
  
  divDashboard.insertBefore(form, dashboardTodosList);
  form.id = 'form-create-todo';
  form.classList.add('hide');

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
      input.maxLength = 49;
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
    form.classList.add('hide');
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
    const xmlns = 'http://www.w3.org/2000/svg';
    const svgBtnWidth = 18;
    const svgBtnHeight = 18;
    const svgEdit = document.createElementNS(xmlns, 'svg');
    listItemEdit.appendChild(svgEdit);
    svgEdit.setAttributeNS(null, 'viewBox', '0 0 512 512');
    svgEdit.setAttributeNS(null, 'width', svgBtnWidth);
    svgEdit.setAttributeNS(null, 'height', svgBtnHeight);

    const pathEdit = document.createElementNS(xmlns, 'path');
    svgEdit.appendChild(pathEdit)
    pathEdit.setAttributeNS(null, 'd', 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z');

    const listItemDelete = document.createElement('li');
    const svgDelete = document.createElementNS(xmlns, 'svg');
    listItemDelete.appendChild(svgDelete);
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
}

// On Script Load, let's do some basic stuff
createForm();
(function() {
  const btnCreateTodo = document.getElementById('btn-create-todo');
  const formCreateTodo = document.getElementById('form-create-todo');

  btnCreateTodo.addEventListener('click', (e) => {
    e.preventDefault();

    // On clicking the plus button, if form is hidden, then unhide and display form, else hide it.
    if (formCreateTodo.classList.contains('hide')) {
      formCreateTodo.classList.remove('hide');
    } else {
      formCreateTodo.classList.add('hide');
    }
  });
})();
const projectToday = Project('today');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHlEQUF5RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3B0b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1aWxkIGZyb20gdGhlIGluc2lkZSBvdXQgKi9cblxuLyogVG8gRE8gQXBwICovXG5cbi8qIFxuICBUbyBEbyBPYmplY3RcbiAgQ29uc3RydWN0b3JcbiAge1xuICAgIFRpdGxlOiAnSGVsbG8nXG4gICAgRGVzY3JpcHRpb246ICdIZWxsbyBpIG5lZWQgdG8gZG8gdGhpcydcbiAgICBEdWUgRGF0ZTogTU0vREQvWVlZWVxuICAgIHByaW9yaXR5OiBMb3cvTWVkL0hpZ2hcbiAgICBub3RlczogJ2Zqa2RhZmprYWQ7bCdcbiAgfVxuXG4gIFRvRG8gQ29udHJvbGxlclxuXG4gIENSVURcbiAgQ3JlYXRlIFRvZG9cbiAgUmVhZCBUb2RvXG4gIFVwZGF0ZSBUb2RvXG4gIERlbGV0ZSBUb2RvXG4qL1xuXG5mdW5jdGlvbiBUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3RlcztcblxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgfTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lLCBhZGRUb2RvLCB0b2RvcyB9O1xufVxuXG4vLyBEYXNoYm9hcmRcblxuLy8gTGlzdCBvZiBQcm9qZWN0c1xuXG4vLyBMaXN0IG9mIFRvZG9zIGZvciB0aGUgZGF5PyBcblxuLy8gQWxsIFRvZG9zXG5cbi8vIFRvZG9zIGJhc2VkIG9uIHByaW9yaXR5P1xuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHRvZG8uXG5cbi8vIEFiaWxpdHkgdG8gY3JlYXRlL3VwZGF0ZS9kZWxldGUgcHJvamVjdFxuXG4vLyBGaXJzdCBpbnRlcmZhY2UgaXMgVG9kYXlzIFRvZG9zXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgJ05ldyBUb2RvJyBGb3JtIGFuZCBhcHBlbmQgdG8gRG9tLlxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGl2RGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhc2hib2FyZCcpO1xuICBjb25zdCBkYXNoYm9hcmRUb2Rvc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFzaGJvYXJkLXRvZG9zLWxpc3QnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgXG4gIGRpdkRhc2hib2FyZC5pbnNlcnRCZWZvcmUoZm9ybSwgZGFzaGJvYXJkVG9kb3NMaXN0KTtcbiAgZm9ybS5pZCA9ICdmb3JtLWNyZWF0ZS10b2RvJztcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgY29uc3QgaW5wdXRzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkdWUtZGF0ZScsICdwcmlvcml0eScsICdub3RlcyddO1xuIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGlucHV0c1tpXTtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0TmFtZSk7XG5cbiAgICBpZiAoaW5wdXROYW1lID09PSAndGl0bGUnIHx8IGlucHV0TmFtZSA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYCR7aW5wdXROYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBpbnB1dE5hbWUuc2xpY2UoMSl9OmA7XG4gICAgICBpbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgaW5wdXQubWF4TGVuZ3RoID0gNDk7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAnZHVlLWRhdGUnKSB7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRHVlIERhdGU6JztcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIGlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXROYW1lID09PSAncHJpb3JpdHknKSB7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnUHJpb3JpdHk6JztcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGlucHV0TmFtZSk7XG4gICAgICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgb3B0aW9uTG93LmlubmVySFRNTCA9ICdMb3cnO1xuXG4gICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbk1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgb3B0aW9uTWVkaXVtLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuXG4gICAgICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb25IaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgb3B0aW9uSGlnaC5pbm5lckhUTUwgPSAnSGlnaCc7XG5cbiAgICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uTG93LCBvcHRpb25NZWRpdW0sIG9wdGlvbkhpZ2gpO1xuICAgICAgZm9ybS5hcHBlbmQobGFiZWwsIHNlbGVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdOb3RlczonO1xuICAgICAgY29uc3QgdGV4dEFyZWEgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRBcmVhLmlkID0gaW5wdXROYW1lO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgaW5wdXROYW1lKTtcbiAgICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsIDUpO1xuICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgMzMpO1xuICAgICAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnQ29udGFjdCBKdXN0aW4gYXQuLi4nO1xuXG4gICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdGV4dEFyZWEpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFN1Ym1pdCBpbnB1dCAqL1xuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3VibWl0LmlkID0gJ2J1dHRvbi1zdWJtaXQnO1xuICBidG5TdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICBidG5TdWJtaXQuaW5uZXJIVE1MID0gJ0NyZWF0ZSBUb2RvJztcblxuICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBGb3JtQ29udHJvbGxlci5jcmVhdGVUb2RvKGZvcm0uZWxlbWVudHMpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG59XG5cbi8vIGZvcm1EYXRhIHJldHVybnMgYSA2IGVsZW1lbnQgSFRNTCBDb2xsZWN0aW9uXG4vLyBXZSBpdGVyYXRlIHRvIDUsIHdoaWxlIHNraXBwaW5nIHRoZSBsYXN0IG9uZSBiZWNhdXNlIHRoYXQgaXMgdGhlIHN1Ym1pdCBidXR0b24uXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmFkZE5ld1RvZG8obmV3VG9kbyk7XG4gIH1cbn07XG5cbmNvbnN0IERvbVVwZGF0ZXIgPSB7XG4gIGFkZE5ld1RvZG86ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdG9kb3MnKTtcbiAgICBcbiAgICBjb25zdCBsaXN0SXRlbVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtVG9kby5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1pbmZvcm1hdGlvblwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvLnRpdGxlfTwvaDM+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiPiR7dG9kby5kZXNjcmlwdGlvbn08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICAvLyBBZGQgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnMgdG8gdG9kbyBsaXN0IGl0ZW0uXG4gICAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnV0dG9ucycpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgY29uc3Qgc3ZnQnRuV2lkdGggPSAxODtcbiAgICBjb25zdCBzdmdCdG5IZWlnaHQgPSAxODtcbiAgICBjb25zdCBzdmdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgbGlzdEl0ZW1FZGl0LmFwcGVuZENoaWxkKHN2Z0VkaXQpO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDUxMiA1MTInKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBzdmdCdG5IZWlnaHQpO1xuXG4gICAgY29uc3QgcGF0aEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gICAgc3ZnRWRpdC5hcHBlbmRDaGlsZChwYXRoRWRpdClcbiAgICBwYXRoRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNNDcxLjYgMjEuN2MtMjEuOS0yMS45LTU3LjMtMjEuOS03OS4yIDBMMzYyLjMgNTEuN2w5Ny45IDk3LjkgMzAuMS0zMC4xYzIxLjktMjEuOSAyMS45LTU3LjMgMC03OS4yTDQ3MS42IDIxLjd6bS0yOTkuMiAyMjBjLTYuMSA2LjEtMTAuOCAxMy42LTEzLjUgMjEuOWwtMjkuNiA4OC44Yy0yLjkgOC42LS42IDE4LjEgNS44IDI0LjZzMTUuOSA4LjcgMjQuNiA1LjhsODguOC0yOS42YzguMi0yLjcgMTUuNy03LjQgMjEuOS0xMy41TDQzNy43IDE3Mi4zIDMzOS43IDc0LjMgMTcyLjQgMjQxLjd6TTk2IDY0QzQzIDY0IDAgMTA3IDAgMTYwVjQxNmMwIDUzIDQzIDk2IDk2IDk2SDM1MmM1MyAwIDk2LTQzIDk2LTk2VjMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnY5NmMwIDE3LjctMTQuMyAzMi0zMiAzMkg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTYwYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDk2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDk2eicpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHN2Z0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICAgIGxpc3RJdGVtRGVsZXRlLmFwcGVuZENoaWxkKHN2Z0RlbGV0ZSk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCA0NDggNTEyJyk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHN2Z0J0bkhlaWdodCk7XG5cbiAgICBjb25zdCBwYXRoRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAncGF0aCcpO1xuICAgIHN2Z0RlbGV0ZS5hcHBlbmRDaGlsZChwYXRoRGVsZXRlKTtcbiAgICBwYXRoRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgJ00xMzUuMiAxNy43TDEyOCAzMkgzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZINDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDMyMGwtNy4yLTE0LjNDMzA3LjQgNi44IDI5Ni4zIDAgMjg0LjIgMEgxNjMuOGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN3pNNDE2IDEyOEgzMkw1My4yIDQ2N2MxLjYgMjUuMyAyMi42IDQ1IDQ3LjkgNDVIMzQ2LjljMjUuMyAwIDQ2LjMtMTkuNyA0Ny45LTQ1TDQxNiAxMjh6Jyk7XG4gICAgXG4gICAgbGlzdEJ1dHRvbnMuYXBwZW5kKGxpc3RJdGVtRWRpdCwgbGlzdEl0ZW1EZWxldGUpO1xuICAgIGxpc3RJdGVtVG9kby5hcHBlbmRDaGlsZChsaXN0QnV0dG9ucyk7XG4gICAgbGlzdFRvZG9zLmFwcGVuZChsaXN0SXRlbVRvZG8pO1xuICB9XG59XG5cbi8vIE9uIFNjcmlwdCBMb2FkLCBsZXQncyBkbyBzb21lIGJhc2ljIHN0dWZmXG5jcmVhdGVGb3JtKCk7XG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJ0bkNyZWF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNyZWF0ZS10b2RvJyk7XG4gIGNvbnN0IGZvcm1DcmVhdGVUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY3JlYXRlLXRvZG8nKTtcblxuICBidG5DcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIGlmIGZvcm0gaXMgaGlkZGVuLCB0aGVuIHVuaGlkZSBhbmQgZGlzcGxheSBmb3JtLCBlbHNlIGhpZGUgaXQuXG4gICAgaWYgKGZvcm1DcmVhdGVUb2RvLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICBmb3JtQ3JlYXRlVG9kby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1DcmVhdGVUb2RvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbmNvbnN0IHByb2plY3RUb2RheSA9IFByb2plY3QoJ3RvZGF5Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=