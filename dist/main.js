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
(function() {
  const form = document.getElementById('form-create-edit-todo');
  const btnSubmit = document.getElementById('button-submit');
 
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    FormController.createTodo(form.elements);
    form.classList.add('hide');
  });

  form.appendChild(btnSubmit);
})();

(function() {
  const btnCreateTodo = document.getElementById('btn-create-todo');
  const formTodo = document.getElementById('form-create-edit-todo');

  btnCreateTodo.addEventListener('click', (e) => {
    e.preventDefault();

    // On clicking the plus button, if form is hidden, then unhide and display form, else hide it.
    if (formTodo.classList.contains('hide')) {
      formTodo.classList.remove('hide');
    } else {
      formTodo.classList.add('hide');
    }
  });
})();
const projectToday = Project('today');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUMseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3B0b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1aWxkIGZyb20gdGhlIGluc2lkZSBvdXQgKi9cblxuLyogVG8gRE8gQXBwICovXG5cbi8qIFxuICBUbyBEbyBPYmplY3RcbiAgQ29uc3RydWN0b3JcbiAge1xuICAgIFRpdGxlOiAnSGVsbG8nXG4gICAgRGVzY3JpcHRpb246ICdIZWxsbyBpIG5lZWQgdG8gZG8gdGhpcydcbiAgICBEdWUgRGF0ZTogTU0vREQvWVlZWVxuICAgIHByaW9yaXR5OiBMb3cvTWVkL0hpZ2hcbiAgICBub3RlczogJ2Zqa2RhZmprYWQ7bCdcbiAgfVxuXG4gIFRvRG8gQ29udHJvbGxlclxuXG4gIENSVURcbiAgQ3JlYXRlIFRvZG9cbiAgUmVhZCBUb2RvXG4gIFVwZGF0ZSBUb2RvXG4gIERlbGV0ZSBUb2RvXG4qL1xuXG5mdW5jdGlvbiBUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3RlcztcblxuICBjb25zdCBlZGl0VG9kbyA9IChmb3JtRGF0YSkgPT4ge1xuICAgIC8vIGZvcm1EYXRhIGlzIGFuIG9iai5cbiAgfTtcblxuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGVkaXRUb2RvIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgYWRkVG9kbywgdG9kb3MgfTtcbn1cblxuLy8gRGFzaGJvYXJkXG5cbi8vIExpc3Qgb2YgUHJvamVjdHNcblxuLy8gTGlzdCBvZiBUb2RvcyBmb3IgdGhlIGRheT8gXG5cbi8vIEFsbCBUb2Rvc1xuXG4vLyBUb2RvcyBiYXNlZCBvbiBwcmlvcml0eT9cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSB0b2RvLlxuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHByb2plY3RcblxuLypcbmNvbnN0IGVkaXRGb3JtID0gKCkgPT4ge1xuICBcbn1cbiovXG5cbi8vIGZvcm1EYXRhIHJldHVybnMgYSA2IGVsZW1lbnQgSFRNTCBDb2xsZWN0aW9uXG4vLyBXZSBpdGVyYXRlIHRvIDUsIHdoaWxlIHNraXBwaW5nIHRoZSBsYXN0IG9uZSBiZWNhdXNlIHRoYXQgaXMgdGhlIHN1Ym1pdCBidXR0b24uXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmFkZE5ld1RvZG8obmV3VG9kbyk7XG4gIH0sXG4gIC8qXG4gIGVkaXRUb2RvOiAoZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCB0b2RvID0gc2FpZFRvRG87XG4gICAgc2FpZFRvZG8uZWRpdFRvZG8oZm9ybURhdGEpO1xuXG4gIH1cbiAgKi9cbn07XG5cbmNvbnN0IERvbVVwZGF0ZXIgPSB7XG4gIGFkZE5ld1RvZG86ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdG9kb3MnKTtcbiAgICBcbiAgICBjb25zdCBsaXN0SXRlbVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtVG9kby5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1pbmZvcm1hdGlvblwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvLnRpdGxlfTwvaDM+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiPiR7dG9kby5kZXNjcmlwdGlvbn08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBcbiAgICAvLyBBZGQgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnMgdG8gdG9kbyBsaXN0IGl0ZW0uXG4gICAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnV0dG9ucycpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuRWRpdC5jbGFzc0xpc3QuYWRkKCdidG4tdG9kbycpO1xuICAgIGNvbnN0IHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICBjb25zdCBzdmdCdG5XaWR0aCA9IDE4O1xuICAgIGNvbnN0IHN2Z0J0bkhlaWdodCA9IDE4O1xuICAgIGNvbnN0IHN2Z0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcbiAgICBidG5FZGl0LmFwcGVuZENoaWxkKHN2Z0VkaXQpO1xuICAgIGxpc3RJdGVtRWRpdC5hcHBlbmRDaGlsZChidG5FZGl0KTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCA1MTIgNTEyJyk7XG4gICAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzdmdCdG5XaWR0aCk7XG4gICAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgc3ZnQnRuSGVpZ2h0KTtcblxuICAgIGNvbnN0IHBhdGhFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAncGF0aCcpO1xuICAgIHN2Z0VkaXQuYXBwZW5kQ2hpbGQocGF0aEVkaXQpXG4gICAgcGF0aEVkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCAnTTQ3MS42IDIxLjdjLTIxLjktMjEuOS01Ny4zLTIxLjktNzkuMiAwTDM2Mi4zIDUxLjdsOTcuOSA5Ny45IDMwLjEtMzAuMWMyMS45LTIxLjkgMjEuOS01Ny4zIDAtNzkuMkw0NzEuNiAyMS43em0tMjk5LjIgMjIwYy02LjEgNi4xLTEwLjggMTMuNi0xMy41IDIxLjlsLTI5LjYgODguOGMtMi45IDguNi0uNiAxOC4xIDUuOCAyNC42czE1LjkgOC43IDI0LjYgNS44bDg4LjgtMjkuNmM4LjItMi43IDE1LjctNy40IDIxLjktMTMuNUw0MzcuNyAxNzIuMyAzMzkuNyA3NC4zIDE3Mi40IDI0MS43ek05NiA2NEM0MyA2NCAwIDEwNyAwIDE2MFY0MTZjMCA1MyA0MyA5NiA5NiA5NkgzNTJjNTMgMCA5Ni00MyA5Ni05NlYzMjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ2OTZjMCAxNy43LTE0LjMgMzItMzIgMzJIOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyVjE2MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmg5NmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkg5NnonKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgICBjb25zdCBzdmdEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcbiAgICBidG5EZWxldGUuYXBwZW5kQ2hpbGQoc3ZnRGVsZXRlKTtcbiAgICBsaXN0SXRlbURlbGV0ZS5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICAgIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsICcwIDAgNDQ4IDUxMicpO1xuICAgIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzdmdCdG5XaWR0aCk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBzdmdCdG5IZWlnaHQpO1xuXG4gICAgY29uc3QgcGF0aERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3BhdGgnKTtcbiAgICBzdmdEZWxldGUuYXBwZW5kQ2hpbGQocGF0aERlbGV0ZSk7XG4gICAgcGF0aERlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNMTM1LjIgMTcuN0wxMjggMzJIMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2SDQxNmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzMjBsLTcuMi0xNC4zQzMwNy40IDYuOCAyOTYuMyAwIDI4NC4yIDBIMTYzLjhjLTEyLjEgMC0yMy4yIDYuOC0yOC42IDE3Ljd6TTQxNiAxMjhIMzJMNTMuMiA0NjdjMS42IDI1LjMgMjIuNiA0NSA0Ny45IDQ1SDM0Ni45YzI1LjMgMCA0Ni4zLTE5LjcgNDcuOS00NUw0MTYgMTI4eicpO1xuICAgIFxuICAgIGxpc3RCdXR0b25zLmFwcGVuZChsaXN0SXRlbUVkaXQsIGxpc3RJdGVtRGVsZXRlKTtcbiAgICBsaXN0SXRlbVRvZG8uYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbnMpO1xuICAgIGxpc3RUb2Rvcy5hcHBlbmQobGlzdEl0ZW1Ub2RvKTtcbiAgfVxufTtcbi8vIE9uIFNjcmlwdCBMb2FkLCBsZXQncyBkbyBzb21lIGJhc2ljIHN0dWZmXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc3VibWl0Jyk7XG4gXG4gIGJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIEZvcm1Db250cm9sbGVyLmNyZWF0ZVRvZG8oZm9ybS5lbGVtZW50cyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcbn0pKCk7XG5cbihmdW5jdGlvbigpIHtcbiAgY29uc3QgYnRuQ3JlYXRlVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY3JlYXRlLXRvZG8nKTtcbiAgY29uc3QgZm9ybVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG5cbiAgYnRuQ3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gT24gY2xpY2tpbmcgdGhlIHBsdXMgYnV0dG9uLCBpZiBmb3JtIGlzIGhpZGRlbiwgdGhlbiB1bmhpZGUgYW5kIGRpc3BsYXkgZm9ybSwgZWxzZSBoaWRlIGl0LlxuICAgIGlmIChmb3JtVG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgZm9ybVRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtVG9kby5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5jb25zdCBwcm9qZWN0VG9kYXkgPSBQcm9qZWN0KCd0b2RheScpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9