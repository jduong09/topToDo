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
// 
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdWlsZCBmcm9tIHRoZSBpbnNpZGUgb3V0ICovXG5cbi8qIFRvIERPIEFwcCAqL1xuXG4vKiBcbiAgVG8gRG8gT2JqZWN0XG4gIENvbnN0cnVjdG9yXG4gIHtcbiAgICBUaXRsZTogJ0hlbGxvJ1xuICAgIERlc2NyaXB0aW9uOiAnSGVsbG8gaSBuZWVkIHRvIGRvIHRoaXMnXG4gICAgRHVlIERhdGU6IE1NL0REL1lZWVlcbiAgICBwcmlvcml0eTogTG93L01lZC9IaWdoXG4gICAgbm90ZXM6ICdmamtkYWZqa2FkO2wnXG4gIH1cblxuICBUb0RvIENvbnRyb2xsZXJcblxuICBDUlVEXG4gIENyZWF0ZSBUb2RvXG4gIFJlYWQgVG9kb1xuICBVcGRhdGUgVG9kb1xuICBEZWxldGUgVG9kb1xuKi9cblxuZnVuY3Rpb24gVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICAvLyBmb3JtRGF0YSBpcyBhbiBvYmouXG4gIH07XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBlZGl0VG9kbyB9O1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWUsIGFkZFRvZG8sIHRvZG9zIH07XG59XG5cbi8vIERhc2hib2FyZFxuXG4vLyBMaXN0IG9mIFByb2plY3RzXG5cbi8vIExpc3Qgb2YgVG9kb3MgZm9yIHRoZSBkYXk/IFxuXG4vLyBBbGwgVG9kb3NcblxuLy8gVG9kb3MgYmFzZWQgb24gcHJpb3JpdHk/XG5cbi8vIEFiaWxpdHkgdG8gY3JlYXRlL3VwZGF0ZS9kZWxldGUgdG9kby5cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSBwcm9qZWN0XG5cbi8qXG5jb25zdCBlZGl0Rm9ybSA9ICgpID0+IHtcbiAgXG59XG4qL1xuXG4vLyBmb3JtRGF0YSByZXR1cm5zIGEgNiBlbGVtZW50IEhUTUwgQ29sbGVjdGlvblxuLy8gV2UgaXRlcmF0ZSB0byA1LCB3aGlsZSBza2lwcGluZyB0aGUgbGFzdCBvbmUgYmVjYXVzZSB0aGF0IGlzIHRoZSBzdWJtaXQgYnV0dG9uLlxuY29uc3QgRm9ybUNvbnRyb2xsZXIgPSB7XG4gIGNyZWF0ZVRvZG86IChmb3JtRGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb0RvKGZvcm1EYXRhWzBdLnZhbHVlLCBmb3JtRGF0YVsxXS52YWx1ZSwgZm9ybURhdGFbMl0udmFsdWUsIGZvcm1EYXRhWzNdLnZhbHVlLCBmb3JtRGF0YVs0XS52YWx1ZSk7XG4gICAgcHJvamVjdFRvZGF5LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgRG9tVXBkYXRlci5hZGROZXdUb2RvKG5ld1RvZG8pO1xuICB9LFxuICAvKlxuICBlZGl0VG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IHNhaWRUb0RvO1xuICAgIHNhaWRUb2RvLmVkaXRUb2RvKGZvcm1EYXRhKTtcblxuICB9XG4gICovXG59O1xuXG5jb25zdCBEb21VcGRhdGVyID0ge1xuICBhZGROZXdUb2RvOiAodG9kbykgPT4ge1xuICAgIGNvbnN0IGxpc3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LXRvZG9zJyk7XG4gICAgXG4gICAgY29uc3QgbGlzdEl0ZW1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbVRvZG8uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8taW5mb3JtYXRpb25cIj5cbiAgICAgICAgPGgzIGNsYXNzPVwidG9kby10aXRsZVwiPiR7dG9kby50aXRsZX08L2gzPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tZGVzY3JpcHRpb25cIj4ke3RvZG8uZGVzY3JpcHRpb259PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgXG4gICAgLy8gQWRkIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25zIHRvIHRvZG8gbGlzdCBpdGVtLlxuICAgIGNvbnN0IGxpc3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdsaXN0LWJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYnRuRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkVkaXQuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgY29uc3Qgc3ZnQnRuV2lkdGggPSAxODtcbiAgICBjb25zdCBzdmdCdG5IZWlnaHQgPSAxODtcbiAgICBjb25zdCBzdmdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgYnRuRWRpdC5hcHBlbmRDaGlsZChzdmdFZGl0KTtcbiAgICBsaXN0SXRlbUVkaXQuYXBwZW5kQ2hpbGQoYnRuRWRpdCk7XG4gICAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsICcwIDAgNTEyIDUxMicpO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgc3ZnQnRuV2lkdGgpO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHN2Z0J0bkhlaWdodCk7XG5cbiAgICBjb25zdCBwYXRoRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3BhdGgnKTtcbiAgICBzdmdFZGl0LmFwcGVuZENoaWxkKHBhdGhFZGl0KVxuICAgIHBhdGhFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgJ000NzEuNiAyMS43Yy0yMS45LTIxLjktNTcuMy0yMS45LTc5LjIgMEwzNjIuMyA1MS43bDk3LjkgOTcuOSAzMC4xLTMwLjFjMjEuOS0yMS45IDIxLjktNTcuMyAwLTc5LjJMNDcxLjYgMjEuN3ptLTI5OS4yIDIyMGMtNi4xIDYuMS0xMC44IDEzLjYtMTMuNSAyMS45bC0yOS42IDg4LjhjLTIuOSA4LjYtLjYgMTguMSA1LjggMjQuNnMxNS45IDguNyAyNC42IDUuOGw4OC44LTI5LjZjOC4yLTIuNyAxNS43LTcuNCAyMS45LTEzLjVMNDM3LjcgMTcyLjMgMzM5LjcgNzQuMyAxNzIuNCAyNDEuN3pNOTYgNjRDNDMgNjQgMCAxMDcgMCAxNjBWNDE2YzAgNTMgNDMgOTYgOTYgOTZIMzUyYzUzIDAgOTYtNDMgOTYtOTZWMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMydjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIOTZ6Jyk7XG5cbiAgICBjb25zdCBsaXN0SXRlbURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2J0bi10b2RvJyk7XG4gICAgY29uc3Qgc3ZnRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgYnRuRGVsZXRlLmFwcGVuZENoaWxkKHN2Z0RlbGV0ZSk7XG4gICAgbGlzdEl0ZW1EZWxldGUuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDQ0OCA1MTInKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgc3ZnQnRuV2lkdGgpO1xuICAgIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgc3ZnQnRuSGVpZ2h0KTtcblxuICAgIGNvbnN0IHBhdGhEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gICAgc3ZnRGVsZXRlLmFwcGVuZENoaWxkKHBhdGhEZWxldGUpO1xuICAgIHBhdGhEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCAnTTEzNS4yIDE3LjdMMTI4IDMySDMyQzE0LjMgMzIgMCA0Ni4zIDAgNjRTMTQuMyA5NiAzMiA5Nkg0MTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIMzIwbC03LjItMTQuM0MzMDcuNCA2LjggMjk2LjMgMCAyODQuMiAwSDE2My44Yy0xMi4xIDAtMjMuMiA2LjgtMjguNiAxNy43ek00MTYgMTI4SDMyTDUzLjIgNDY3YzEuNiAyNS4zIDIyLjYgNDUgNDcuOSA0NUgzNDYuOWMyNS4zIDAgNDYuMy0xOS43IDQ3LjktNDVMNDE2IDEyOHonKTtcbiAgICBcbiAgICBsaXN0QnV0dG9ucy5hcHBlbmQobGlzdEl0ZW1FZGl0LCBsaXN0SXRlbURlbGV0ZSk7XG4gICAgbGlzdEl0ZW1Ub2RvLmFwcGVuZENoaWxkKGxpc3RCdXR0b25zKTtcbiAgICBsaXN0VG9kb3MuYXBwZW5kKGxpc3RJdGVtVG9kbyk7XG4gIH1cbn07XG4vLyBPbiBTY3JpcHQgTG9hZCwgbGV0J3MgZG8gc29tZSBiYXNpYyBzdHVmZlxuLy8gSUlGRSBmb3IgYWRkaW5nIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdCBidXR0b24gaW4gdG9kbyBmb3JtLlxuLy8gXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNyZWF0ZS1lZGl0LXRvZG8nKTtcbiAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zdWJtaXQnKTtcbiBcbiAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXB1cnBvc2UnKSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgIEZvcm1Db250cm9sbGVyLmNyZWF0ZVRvZG8oZm9ybS5lbGVtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEZvcm1Db250cm9sbGVyLmVkaXRUb2RvKGZvcm0uZWxlbWVudHMpO1xuICAgIH1cbiAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJ0bkNyZWF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNyZWF0ZS10b2RvJyk7XG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcblxuICBidG5DcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIGlmIGZvcm0gaXMgaGlkZGVuLCB0aGVuIHVuaGlkZSBhbmQgZGlzcGxheSBmb3JtLCBlbHNlIGhpZGUgaXQuXG4gICAgaWYgKGRpdkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgIGRpdkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbmNvbnN0IHByb2plY3RUb2RheSA9IFByb2plY3QoJ3RvZGF5Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=