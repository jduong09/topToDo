/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
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
  Create Todo (done)
  Read Todo 
  Update Todo (done)
  Delete Todo
*/

const ToDo = (title, description, dueDate, priority, notes) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _notes = notes;

  const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

// formData returns a 6 element HTML Collection
// We iterate to 5, while skipping the last one because that is the submit button.
function createTodoListItem(todo) {
  const todoInformation = todo.getInfo();
  
  const listItemTodo = document.createElement('li');
  listItemTodo.innerHTML = `
    <div class="todo-information">
      <h3 class="todo-title">${todoInformation._title}</h3>
      <span class="todo-description">${todoInformation._description}</span>
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

  listButtons.append(listItemEdit, listItemDelete);
  listItemTodo.appendChild(listButtons);
  
  return listItemTodo;
}

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
    // Iterate through all todos, 
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDJEQUEyRCxLQUFLO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3B0b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3B0b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcHRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBCdWlsZCBmcm9tIHRoZSBpbnNpZGUgb3V0ICovXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbi8qIFRvIERPIEFwcCAqL1xuXG4vKiBcbiAgVG8gRG8gT2JqZWN0XG4gIENvbnN0cnVjdG9yXG4gIHtcbiAgICBUaXRsZTogJ0hlbGxvJ1xuICAgIERlc2NyaXB0aW9uOiAnSGVsbG8gaSBuZWVkIHRvIGRvIHRoaXMnXG4gICAgRHVlIERhdGU6IE1NL0REL1lZWVlcbiAgICBwcmlvcml0eTogTG93L01lZC9IaWdoXG4gICAgbm90ZXM6ICdmamtkYWZqa2FkO2wnXG4gIH1cblxuICBUb0RvIENvbnRyb2xsZXJcblxuICBDUlVEXG4gIENyZWF0ZSBUb2RvIChkb25lKVxuICBSZWFkIFRvZG8gXG4gIFVwZGF0ZSBUb2RvIChkb25lKVxuICBEZWxldGUgVG9kb1xuKi9cblxuY29uc3QgVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICBsZXQgX25vdGVzID0gbm90ZXM7XG5cbiAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgLy8gZm9ybURhdGEgaXMgYW4gaHRtbCBjb2xsZWN0aW9uIGFycmF5XG4gICAgX3RpdGxlID0gZm9ybURhdGFbMF0udmFsdWU7XG4gICAgX2Rlc2NyaXB0aW9uID0gZm9ybURhdGFbMV0udmFsdWU7XG4gICAgX2R1ZURhdGUgPSBmb3JtRGF0YVsyXS52YWx1ZTtcbiAgICBfcHJpb3JpdHkgPSBmb3JtRGF0YVszXS52YWx1ZTtcbiAgICBfbm90ZXMgPSBmb3JtRGF0YVs0XS52YWx1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgIHJldHVybiB7IF90aXRsZSwgX2Rlc2NyaXB0aW9uLCBfZHVlRGF0ZSwgX3ByaW9yaXR5LCBfbm90ZXMgfTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRJbmZvLCB1dWlkLCBlZGl0VG9kbyB9O1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWUsIHRvZG9zLCBhZGRUb2RvIH07XG59XG5cbi8vIERhc2hib2FyZFxuXG4vLyBMaXN0IG9mIFByb2plY3RzXG5cbi8vIExpc3Qgb2YgVG9kb3MgZm9yIHRoZSBkYXk/IFxuXG4vLyBBbGwgVG9kb3NcblxuLy8gVG9kb3MgYmFzZWQgb24gcHJpb3JpdHk/XG5cbi8vIEFiaWxpdHkgdG8gY3JlYXRlL3VwZGF0ZS9kZWxldGUgdG9kby5cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSBwcm9qZWN0XG5cbi8vIGZvcm1EYXRhIHJldHVybnMgYSA2IGVsZW1lbnQgSFRNTCBDb2xsZWN0aW9uXG4vLyBXZSBpdGVyYXRlIHRvIDUsIHdoaWxlIHNraXBwaW5nIHRoZSBsYXN0IG9uZSBiZWNhdXNlIHRoYXQgaXMgdGhlIHN1Ym1pdCBidXR0b24uXG5mdW5jdGlvbiBjcmVhdGVUb2RvTGlzdEl0ZW0odG9kbykge1xuICBjb25zdCB0b2RvSW5mb3JtYXRpb24gPSB0b2RvLmdldEluZm8oKTtcbiAgXG4gIGNvbnN0IGxpc3RJdGVtVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtVG9kby5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRvZG8taW5mb3JtYXRpb25cIj5cbiAgICAgIDxoMyBjbGFzcz1cInRvZG8tdGl0bGVcIj4ke3RvZG9JbmZvcm1hdGlvbi5fdGl0bGV9PC9oMz5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiPiR7dG9kb0luZm9ybWF0aW9uLl9kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgbGlzdEl0ZW1Ub2RvLnNldEF0dHJpYnV0ZSgnZGF0YS11dWlkJywgdG9kby51dWlkKTtcbiAgXG4gIC8vIEFkZCBlZGl0IGFuZCBkZWxldGUgYnV0dG9ucyB0byB0b2RvIGxpc3QgaXRlbS5cbiAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdsaXN0LWJ1dHRvbnMnKTtcblxuICBjb25zdCBsaXN0SXRlbUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkVkaXQuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgY29uc3QgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICBjb25zdCBzdmdCdG5XaWR0aCA9IDE4O1xuICBjb25zdCBzdmdCdG5IZWlnaHQgPSAxODtcbiAgY29uc3Qgc3ZnRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICBidG5FZGl0LmFwcGVuZENoaWxkKHN2Z0VkaXQpO1xuICBsaXN0SXRlbUVkaXQuYXBwZW5kQ2hpbGQoYnRuRWRpdCk7XG4gIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDUxMiA1MTInKTtcbiAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzdmdCdG5XaWR0aCk7XG4gIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHN2Z0J0bkhlaWdodCk7XG5cbiAgY29uc3QgcGF0aEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gIHN2Z0VkaXQuYXBwZW5kQ2hpbGQocGF0aEVkaXQpXG4gIHBhdGhFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgJ000NzEuNiAyMS43Yy0yMS45LTIxLjktNTcuMy0yMS45LTc5LjIgMEwzNjIuMyA1MS43bDk3LjkgOTcuOSAzMC4xLTMwLjFjMjEuOS0yMS45IDIxLjktNTcuMyAwLTc5LjJMNDcxLjYgMjEuN3ptLTI5OS4yIDIyMGMtNi4xIDYuMS0xMC44IDEzLjYtMTMuNSAyMS45bC0yOS42IDg4LjhjLTIuOSA4LjYtLjYgMTguMSA1LjggMjQuNnMxNS45IDguNyAyNC42IDUuOGw4OC44LTI5LjZjOC4yLTIuNyAxNS43LTcuNCAyMS45LTEzLjVMNDM3LjcgMTcyLjMgMzM5LjcgNzQuMyAxNzIuNCAyNDEuN3pNOTYgNjRDNDMgNjQgMCAxMDcgMCAxNjBWNDE2YzAgNTMgNDMgOTYgOTYgOTZIMzUyYzUzIDAgOTYtNDMgOTYtOTZWMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMydjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIOTZ6Jyk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGJ0bkVkaXQgZm9yIGVkaXRpbmcgdG9kby5cbiAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGl2UGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHV1aWQgPSBkaXZQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnKTtcblxuICAgIERvbVVwZGF0ZXIuZWRpdFRvZG8odXVpZCk7XG4gICAgRG9tVXBkYXRlci5zZXRGb3JtUHVycG9zZSgnZWRpdCcpO1xuICB9KTtcblxuICBjb25zdCBsaXN0SXRlbURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgY29uc3Qgc3ZnRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gIGJ0bkRlbGV0ZS5hcHBlbmRDaGlsZChzdmdEZWxldGUpO1xuICBsaXN0SXRlbURlbGV0ZS5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDQ0OCA1MTInKTtcbiAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBzdmdCdG5IZWlnaHQpO1xuXG4gIGNvbnN0IHBhdGhEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gIHN2Z0RlbGV0ZS5hcHBlbmRDaGlsZChwYXRoRGVsZXRlKTtcbiAgcGF0aERlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNMTM1LjIgMTcuN0wxMjggMzJIMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2SDQxNmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzMjBsLTcuMi0xNC4zQzMwNy40IDYuOCAyOTYuMyAwIDI4NC4yIDBIMTYzLjhjLTEyLjEgMC0yMy4yIDYuOC0yOC42IDE3Ljd6TTQxNiAxMjhIMzJMNTMuMiA0NjdjMS42IDI1LjMgMjIuNiA0NSA0Ny45IDQ1SDM0Ni45YzI1LjMgMCA0Ni4zLTE5LjcgNDcuOS00NUw0MTYgMTI4eicpO1xuICBcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGJ0bkRlbGV0ZSBmb3IgZGVsZXRpbmcgdG9kby5cbiAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBGdW5jdGlvbiBmb3IgZGVsZXRpbmcgdG9kby5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gV2UgbmVlZCB0byBrbm93IHdoaWNoIHRvZG8gaXQgaXMuXG4gICAgY29uc3QgZGl2UGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHV1aWQgPSBkaXZQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnKTtcbiAgICAvLyBPYmplY3QgaG9sZGluZyB0b2RvcyB3aWxsIGp1c3QgZGVsZXRlIGtleSwgZWZmZWN0aXZlbHkgZGVsZXRpbmcgdG9kby5cbiAgICBkZWxldGUgdG9kb3NbdXVpZF07XG4gICAgRG9tVXBkYXRlci51cGRhdGVUb2RvTGlzdCgpO1xuICAgIC8vIFVwZGF0ZSBEb20sIHdpdGggdG9kbyBiZWluZyBkZWxldGVkLlxuICB9KTtcblxuXG4gIC8vIEFkZCBFeHBhbmQgYnV0dG9uXG4gIC8vIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNMjMzLjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTkyLTE5MmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMEwyNTYgMzM4LjcgODYuNiAxNjkuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTkyIDE5MnpcIi8+PC9zdmc+XG5cbiAgbGlzdEJ1dHRvbnMuYXBwZW5kKGxpc3RJdGVtRWRpdCwgbGlzdEl0ZW1EZWxldGUpO1xuICBsaXN0SXRlbVRvZG8uYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbnMpO1xuICBcbiAgcmV0dXJuIGxpc3RJdGVtVG9kbztcbn1cblxuY29uc3QgRm9ybUNvbnRyb2xsZXIgPSB7XG4gIGNyZWF0ZVRvZG86IChmb3JtRGF0YSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb0RvKGZvcm1EYXRhWzBdLnZhbHVlLCBmb3JtRGF0YVsxXS52YWx1ZSwgZm9ybURhdGFbMl0udmFsdWUsIGZvcm1EYXRhWzNdLnZhbHVlLCBmb3JtRGF0YVs0XS52YWx1ZSk7XG4gICAgdG9kb3NbbmV3VG9kby51dWlkXSA9IG5ld1RvZG87XG4gICAgcHJvamVjdFRvZGF5LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgRG9tVXBkYXRlci5jbGVhckZvcm0oKTtcbiAgICBEb21VcGRhdGVyLmFkZE5ld1RvZG8obmV3VG9kbyk7XG4gIH0sXG4gIFxuICBlZGl0VG9kbzogKHV1aWQsIGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zW3V1aWRdO1xuICAgIHRvZG8uZWRpdFRvZG8oZm9ybURhdGEpO1xuICAgIERvbVVwZGF0ZXIudXBkYXRlVG9kbyh1dWlkLCB0b2RvLmdldEluZm8oKSk7XG4gICAgRG9tVXBkYXRlci5jbGVhckZvcm0oKTtcbiAgICBEb21VcGRhdGVyLnNldEZvcm1QdXJwb3NlKCdjcmVhdGUnKTtcbiAgfVxufTtcblxuY29uc3QgRG9tVXBkYXRlciA9IHtcbiAgYWRkTmV3VG9kbzogKHRvZG8pID0+IHtcbiAgICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC10b2RvcycpO1xuICAgIGNvbnN0IGxpc3RJdGVtVG9kbyA9IGNyZWF0ZVRvZG9MaXN0SXRlbSh0b2RvKTtcblxuICAgIGxpc3RUb2Rvcy5hcHBlbmRDaGlsZChsaXN0SXRlbVRvZG8pO1xuICB9LFxuICBlZGl0VG9kbzogKHV1aWQpID0+IHtcbiAgICBjb25zdCB0b2RvID0gdG9kb3NbdXVpZF07XG4gICAgY29uc3QgdG9kb0luZm9ybWF0aW9uID0gdG9kby5nZXRJbmZvKCk7XG5cbiAgICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1mb3JtJyk7XG4gICAgY29uc3QgaGVhZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItZm9ybScpO1xuICAgIGNvbnN0IGZvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY3JlYXRlLWVkaXQtdG9kbycpO1xuICAgIGNvbnN0IGlucHV0RWxlbWVudHMgPSBmb3JtRWRpdC5lbGVtZW50cztcbiAgICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXN1Ym1pdCcpO1xuICAgIFxuICAgIGhlYWRlckZvcm0uaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgIGJ1dHRvblN1Ym1pdC5pbm5lckhUTUwgPSAnRWRpdCBUb2RvJztcbiAgICBmb3JtRWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcsIHV1aWQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGlucHV0RWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fdGl0bGU7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdG9kb0luZm9ybWF0aW9uLl9kZXNjcmlwdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX2R1ZURhdGU7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdG9kb0luZm9ybWF0aW9uLl9wcmlvcml0eTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gNCkge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX25vdGVzO1xuICAgICAgfSBcbiAgICB9XG4gICAgZGl2Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sXG4gIHVwZGF0ZVRvZG86ICh1dWlkLCB0b2RvSW5mb3JtYXRpb24pID0+IHtcbiAgICBjb25zdCBsaVV1aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtkYXRhLXV1aWQ9XCIke3V1aWR9XCJdYCk7XG4gICAgY29uc3QgZGl2VG9kb0luZm9ybWF0aW9uID0gbGlVdWlkLmNoaWxkcmVuWzBdO1xuICAgIGRpdlRvZG9JbmZvcm1hdGlvbi5jaGlsZHJlblswXS5pbm5lckhUTUwgPSB0b2RvSW5mb3JtYXRpb24uX3RpdGxlO1xuICAgIGRpdlRvZG9JbmZvcm1hdGlvbi5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSB0b2RvSW5mb3JtYXRpb24uX2Rlc2NyaXB0aW9uO1xuICB9LFxuICBjbGVhckZvcm06ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY3JlYXRlLWVkaXQtdG9kbycpO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IGZvcm0uZWxlbWVudHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgZm9ybUVsZW1lbnRzWzNdLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3JtRWxlbWVudHNbaV0udmFsdWUgPSAnJztcbiAgICB9XG4gIH0sXG4gIHNldEZvcm1QdXJwb3NlOiAodHlwZSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gICAgY29uc3QgaGVhZGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItZm9ybScpO1xuICAgIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc3VibWl0Jyk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICBoZWFkZXJGb3JtLmlubmVySFRNTCA9ICdFZGl0JztcbiAgICAgIGJ0blN1Ym1pdC5pbm5lckhUTUwgPSAnRWRpdCBUb2RvJztcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyRm9ybS5pbm5lckhUTUwgPSAnQ3JlYXRlJztcbiAgICAgIGJ0blN1Ym1pdC5pbm5lckhUTUwgPSAnQ3JlYXRlIFRvZG8nO1xuICAgIH1cbiAgICBcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1wdXJwb3NlJywgdHlwZSk7XG4gIH0sXG4gIHVwZGF0ZVRvZG9MaXN0OiAoKSA9PiB7XG4gICAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdG9kb3MnKTtcbiAgICBsaXN0VG9kb3MuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCB0b2RvcywgXG4gICAgZm9yIChjb25zdCB0b2RvIGluIHRvZG9zKSB7XG4gICAgICBjb25zdCBsaXN0SXRlbVRvZG8gPSBjcmVhdGVUb2RvTGlzdEl0ZW0odG9kb3NbdG9kb10pO1xuICAgICAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKGxpc3RJdGVtVG9kbyk7XG4gICAgfVxuICB9XG59O1xuLy8gT24gU2NyaXB0IExvYWQsIGxldCdzIGRvIHNvbWUgYmFzaWMgc3R1ZmZcbi8vIElJRkUgZm9yIGFkZGluZyBldmVudCBsaXN0ZW5lciB0byBzdWJtaXQgYnV0dG9uIGluIHRvZG8gZm9ybS5cbihmdW5jdGlvbigpIHtcbiAgY29uc3QgZGl2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtZm9ybScpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tY3JlYXRlLWVkaXQtdG9kbycpO1xuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXN1Ym1pdCcpO1xuIFxuICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVycG9zZScpID09PSAnY3JlYXRlJykge1xuICAgICAgRm9ybUNvbnRyb2xsZXIuY3JlYXRlVG9kbyhmb3JtLmVsZW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRm9ybUNvbnRyb2xsZXIuZWRpdFRvZG8oZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcpLCBmb3JtLmVsZW1lbnRzKTtcbiAgICB9XG4gICAgZGl2Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBidG5DcmVhdGVUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jcmVhdGUtdG9kbycpO1xuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1mb3JtJyk7XG5cbiAgYnRuQ3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gT24gY2xpY2tpbmcgdGhlIHBsdXMgYnV0dG9uLCBpZiBmb3JtIGlzIGhpZGRlbiwgdGhlbiB1bmhpZGUgYW5kIGRpc3BsYXkgZm9ybSwgZWxzZSBoaWRlIGl0LlxuICAgIGlmIChkaXZGb3JtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICBkaXZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5jb25zdCBwcm9qZWN0VG9kYXkgPSBQcm9qZWN0KCd0b2RheScpO1xubGV0IHRvZG9zID0ge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=