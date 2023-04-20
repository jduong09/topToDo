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

  listButtons.append(listItemEdit, listItemDelete, listItemDetails);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyREFBMkQsS0FBSztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b3B0b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcHRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcHRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3B0b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIEJ1aWxkIGZyb20gdGhlIGluc2lkZSBvdXQgKi9cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuLyogVG8gRE8gQXBwICovXG5cbi8qIFxuICBUbyBEbyBPYmplY3RcbiAgQ29uc3RydWN0b3JcbiAge1xuICAgIFRpdGxlOiAnSGVsbG8nXG4gICAgRGVzY3JpcHRpb246ICdIZWxsbyBpIG5lZWQgdG8gZG8gdGhpcydcbiAgICBEdWUgRGF0ZTogTU0vREQvWVlZWVxuICAgIHByaW9yaXR5OiBMb3cvTWVkL0hpZ2hcbiAgICBub3RlczogJ2Zqa2RhZmprYWQ7bCdcbiAgfVxuXG4gIFRvRG8gQ29udHJvbGxlclxuXG4gIENSVURcbiAgQ3JlYXRlIFRvZG8gKGRvbmUpXG4gIFJlYWQgVG9kbyBcbiAgVXBkYXRlIFRvZG8gKGRvbmUpXG4gIERlbGV0ZSBUb2RvXG4qL1xuXG5jb25zdCBUb0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCBfbm90ZXMgPSBub3RlcztcblxuICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoZm9ybURhdGEpID0+IHtcbiAgICAvLyBmb3JtRGF0YSBpcyBhbiBodG1sIGNvbGxlY3Rpb24gYXJyYXlcbiAgICBfdGl0bGUgPSBmb3JtRGF0YVswXS52YWx1ZTtcbiAgICBfZGVzY3JpcHRpb24gPSBmb3JtRGF0YVsxXS52YWx1ZTtcbiAgICBfZHVlRGF0ZSA9IGZvcm1EYXRhWzJdLnZhbHVlO1xuICAgIF9wcmlvcml0eSA9IGZvcm1EYXRhWzNdLnZhbHVlO1xuICAgIF9ub3RlcyA9IGZvcm1EYXRhWzRdLnZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgX3RpdGxlLCBfZGVzY3JpcHRpb24sIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9ub3RlcyB9O1xuICB9O1xuXG4gIHJldHVybiB7IGdldEluZm8sIHV1aWQsIGVkaXRUb2RvIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgdG9kb3MsIGFkZFRvZG8gfTtcbn1cblxuLy8gRGFzaGJvYXJkXG5cbi8vIExpc3Qgb2YgUHJvamVjdHNcblxuLy8gTGlzdCBvZiBUb2RvcyBmb3IgdGhlIGRheT8gXG5cbi8vIEFsbCBUb2Rvc1xuXG4vLyBUb2RvcyBiYXNlZCBvbiBwcmlvcml0eT9cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSB0b2RvLlxuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHByb2plY3RcblxuLy8gZm9ybURhdGEgcmV0dXJucyBhIDYgZWxlbWVudCBIVE1MIENvbGxlY3Rpb25cbi8vIFdlIGl0ZXJhdGUgdG8gNSwgd2hpbGUgc2tpcHBpbmcgdGhlIGxhc3Qgb25lIGJlY2F1c2UgdGhhdCBpcyB0aGUgc3VibWl0IGJ1dHRvbi5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0SXRlbSh0b2RvKSB7XG4gIGNvbnN0IHRvZG9JbmZvcm1hdGlvbiA9IHRvZG8uZ2V0SW5mbygpO1xuICBcbiAgY29uc3QgbGlzdEl0ZW1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW1Ub2RvLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidG9kby1pbmZvcm1hdGlvblwiPlxuICAgICAgPGgzIGNsYXNzPVwidG9kby10aXRsZVwiPiR7dG9kb0luZm9ybWF0aW9uLl90aXRsZX08L2gzPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+JHt0b2RvSW5mb3JtYXRpb24uX2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBsaXN0SXRlbVRvZG8uc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCB0b2RvLnV1aWQpO1xuICBcbiAgLy8gQWRkIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25zIHRvIHRvZG8gbGlzdCBpdGVtLlxuICBjb25zdCBsaXN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnV0dG9ucycpO1xuXG4gIGNvbnN0IGxpc3RJdGVtRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGJ0bkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuRWRpdC5jbGFzc0xpc3QuYWRkKCdidG4tdG9kbycpO1xuICBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gIGNvbnN0IHN2Z0J0bldpZHRoID0gMTg7XG4gIGNvbnN0IHN2Z0J0bkhlaWdodCA9IDE4O1xuICBjb25zdCBzdmdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gIGJ0bkVkaXQuYXBwZW5kQ2hpbGQoc3ZnRWRpdCk7XG4gIGxpc3RJdGVtRWRpdC5hcHBlbmRDaGlsZChidG5FZGl0KTtcbiAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsICcwIDAgNTEyIDUxMicpO1xuICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgc3ZnQnRuSGVpZ2h0KTtcblxuICBjb25zdCBwYXRoRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3BhdGgnKTtcbiAgc3ZnRWRpdC5hcHBlbmRDaGlsZChwYXRoRWRpdClcbiAgcGF0aEVkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCAnTTQ3MS42IDIxLjdjLTIxLjktMjEuOS01Ny4zLTIxLjktNzkuMiAwTDM2Mi4zIDUxLjdsOTcuOSA5Ny45IDMwLjEtMzAuMWMyMS45LTIxLjkgMjEuOS01Ny4zIDAtNzkuMkw0NzEuNiAyMS43em0tMjk5LjIgMjIwYy02LjEgNi4xLTEwLjggMTMuNi0xMy41IDIxLjlsLTI5LjYgODguOGMtMi45IDguNi0uNiAxOC4xIDUuOCAyNC42czE1LjkgOC43IDI0LjYgNS44bDg4LjgtMjkuNmM4LjItMi43IDE1LjctNy40IDIxLjktMTMuNUw0MzcuNyAxNzIuMyAzMzkuNyA3NC4zIDE3Mi40IDI0MS43ek05NiA2NEM0MyA2NCAwIDEwNyAwIDE2MFY0MTZjMCA1MyA0MyA5NiA5NiA5NkgzNTJjNTMgMCA5Ni00MyA5Ni05NlYzMjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ2OTZjMCAxNy43LTE0LjMgMzItMzIgMzJIOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyVjE2MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmg5NmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkg5NnonKTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gYnRuRWRpdCBmb3IgZWRpdGluZyB0b2RvLlxuICBidG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkaXZQYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdXVpZCA9IGRpdlBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcpO1xuXG4gICAgRG9tVXBkYXRlci5lZGl0VG9kbyh1dWlkKTtcbiAgICBEb21VcGRhdGVyLnNldEZvcm1QdXJwb3NlKCdlZGl0Jyk7XG4gIH0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tdG9kbycpO1xuICBjb25zdCBzdmdEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcbiAgYnRuRGVsZXRlLmFwcGVuZENoaWxkKHN2Z0RlbGV0ZSk7XG4gIGxpc3RJdGVtRGVsZXRlLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZSk7XG4gIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsICcwIDAgNDQ4IDUxMicpO1xuICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgc3ZnQnRuV2lkdGgpO1xuICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHN2Z0J0bkhlaWdodCk7XG5cbiAgY29uc3QgcGF0aERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3BhdGgnKTtcbiAgc3ZnRGVsZXRlLmFwcGVuZENoaWxkKHBhdGhEZWxldGUpO1xuICBwYXRoRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgJ00xMzUuMiAxNy43TDEyOCAzMkgzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZINDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDMyMGwtNy4yLTE0LjNDMzA3LjQgNi44IDI5Ni4zIDAgMjg0LjIgMEgxNjMuOGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN3pNNDE2IDEyOEgzMkw1My4yIDQ2N2MxLjYgMjUuMyAyMi42IDQ1IDQ3LjkgNDVIMzQ2LjljMjUuMyAwIDQ2LjMtMTkuNyA0Ny45LTQ1TDQxNiAxMjh6Jyk7XG4gIFxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gYnRuRGVsZXRlIGZvciBkZWxldGluZyB0b2RvLlxuICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIGZvciBkZWxldGluZyB0b2RvLlxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBXZSBuZWVkIHRvIGtub3cgd2hpY2ggdG9kbyBpdCBpcy5cbiAgICBjb25zdCBkaXZQYXJlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdXVpZCA9IGRpdlBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcpO1xuICAgIC8vIE9iamVjdCBob2xkaW5nIHRvZG9zIHdpbGwganVzdCBkZWxldGUga2V5LCBlZmZlY3RpdmVseSBkZWxldGluZyB0b2RvLlxuICAgIGRlbGV0ZSB0b2Rvc1t1dWlkXTtcbiAgICBEb21VcGRhdGVyLnVwZGF0ZVRvZG9MaXN0KCk7XG4gICAgLy8gVXBkYXRlIERvbSwgd2l0aCB0b2RvIGJlaW5nIGRlbGV0ZWQuXG4gIH0pO1xuXG5cbiAgLy8gQWRkIEV4cGFuZCBidXR0b25cbiAgLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0yMzMuNCA0MDYuNmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGwxOTItMTkyYzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDI1NiAzMzguNyA4Ni42IDE2OS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM2wxOTIgMTkyelwiLz48L3N2Zz5cbiAgY29uc3QgbGlzdEl0ZW1EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgYnRuRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2J0bi10b2RvJyk7XG4gIGNvbnN0IHN2Z0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICBidG5EZXRhaWxzLmFwcGVuZENoaWxkKHN2Z0RldGFpbCk7XG4gIGxpc3RJdGVtRGV0YWlscy5hcHBlbmRDaGlsZChidG5EZXRhaWxzKTtcbiAgc3ZnRGV0YWlsLnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCA1MTIgNTEyJyk7XG4gIHN2Z0RldGFpbC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzdmdCdG5XaWR0aCk7XG4gIHN2Z0RldGFpbC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgc3ZnQnRuSGVpZ2h0KTtcblxuICBjb25zdCBwYXRoRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAncGF0aCcpO1xuICBzdmdEZXRhaWwuYXBwZW5kQ2hpbGQocGF0aERldGFpbCk7XG4gIHBhdGhEZXRhaWwuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCAnTTIzMy40IDQwNi42YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDE5Mi0xOTJjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMjU2IDMzOC43IDg2LjYgMTY5LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zbDE5MiAxOTJ6Jyk7XG5cbiAgbGlzdEJ1dHRvbnMuYXBwZW5kKGxpc3RJdGVtRWRpdCwgbGlzdEl0ZW1EZWxldGUsIGxpc3RJdGVtRGV0YWlscyk7XG4gIGxpc3RJdGVtVG9kby5hcHBlbmRDaGlsZChsaXN0QnV0dG9ucyk7XG4gIFxuICByZXR1cm4gbGlzdEl0ZW1Ub2RvO1xufVxuXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICB0b2Rvc1tuZXdUb2RvLnV1aWRdID0gbmV3VG9kbztcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmNsZWFyRm9ybSgpO1xuICAgIERvbVVwZGF0ZXIuYWRkTmV3VG9kbyhuZXdUb2RvKTtcbiAgfSxcbiAgXG4gIGVkaXRUb2RvOiAodXVpZCwgZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCB0b2RvID0gdG9kb3NbdXVpZF07XG4gICAgdG9kby5lZGl0VG9kbyhmb3JtRGF0YSk7XG4gICAgRG9tVXBkYXRlci51cGRhdGVUb2RvKHV1aWQsIHRvZG8uZ2V0SW5mbygpKTtcbiAgICBEb21VcGRhdGVyLmNsZWFyRm9ybSgpO1xuICAgIERvbVVwZGF0ZXIuc2V0Rm9ybVB1cnBvc2UoJ2NyZWF0ZScpO1xuICB9XG59O1xuXG5jb25zdCBEb21VcGRhdGVyID0ge1xuICBhZGROZXdUb2RvOiAodG9kbykgPT4ge1xuICAgIGNvbnN0IGxpc3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LXRvZG9zJyk7XG4gICAgY29uc3QgbGlzdEl0ZW1Ub2RvID0gY3JlYXRlVG9kb0xpc3RJdGVtKHRvZG8pO1xuXG4gICAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKGxpc3RJdGVtVG9kbyk7XG4gIH0sXG4gIGVkaXRUb2RvOiAodXVpZCkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB0b2Rvc1t1dWlkXTtcbiAgICBjb25zdCB0b2RvSW5mb3JtYXRpb24gPSB0b2RvLmdldEluZm8oKTtcblxuICAgIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcbiAgICBjb25zdCBoZWFkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1mb3JtJyk7XG4gICAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50cyA9IGZvcm1FZGl0LmVsZW1lbnRzO1xuICAgIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc3VibWl0Jyk7XG4gICAgXG4gICAgaGVhZGVyRm9ybS5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgYnV0dG9uU3VibWl0LmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xuICAgIGZvcm1FZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS11dWlkJywgdXVpZCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gaW5wdXRFbGVtZW50c1tpXTtcblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdG9kb0luZm9ybWF0aW9uLl90aXRsZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX2Rlc2NyaXB0aW9uO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fZHVlRGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX3ByaW9yaXR5O1xuICAgICAgfSBlbHNlIGlmIChpID09PSA0KSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fbm90ZXM7XG4gICAgICB9IFxuICAgIH1cbiAgICBkaXZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSxcbiAgdXBkYXRlVG9kbzogKHV1aWQsIHRvZG9JbmZvcm1hdGlvbikgPT4ge1xuICAgIGNvbnN0IGxpVXVpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2RhdGEtdXVpZD1cIiR7dXVpZH1cIl1gKTtcbiAgICBjb25zdCBkaXZUb2RvSW5mb3JtYXRpb24gPSBsaVV1aWQuY2hpbGRyZW5bMF07XG4gICAgZGl2VG9kb0luZm9ybWF0aW9uLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IHRvZG9JbmZvcm1hdGlvbi5fdGl0bGU7XG4gICAgZGl2VG9kb0luZm9ybWF0aW9uLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IHRvZG9JbmZvcm1hdGlvbi5fZGVzY3JpcHRpb247XG4gIH0sXG4gIGNsZWFyRm9ybTogKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybS5lbGVtZW50cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMykge1xuICAgICAgICBmb3JtRWxlbWVudHNbM10uY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1FbGVtZW50c1tpXS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSxcbiAgc2V0Rm9ybVB1cnBvc2U6ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNyZWF0ZS1lZGl0LXRvZG8nKTtcbiAgICBjb25zdCBoZWFkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1mb3JtJyk7XG4gICAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zdWJtaXQnKTtcblxuICAgIGlmICh0eXBlID09PSAnZWRpdCcpIHtcbiAgICAgIGhlYWRlckZvcm0uaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgICAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJGb3JtLmlubmVySFRNTCA9ICdDcmVhdGUnO1xuICAgICAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdDcmVhdGUgVG9kbyc7XG4gICAgfVxuICAgIFxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLXB1cnBvc2UnLCB0eXBlKTtcbiAgfSxcbiAgdXBkYXRlVG9kb0xpc3Q6ICgpID0+IHtcbiAgICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC10b2RvcycpO1xuICAgIGxpc3RUb2Rvcy5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGNvbnN0IHRvZG8gaW4gdG9kb3MpIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtVG9kbyA9IGNyZWF0ZVRvZG9MaXN0SXRlbSh0b2Rvc1t0b2RvXSk7XG4gICAgICBsaXN0VG9kb3MuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Ub2RvKTtcbiAgICB9XG4gIH1cbn07XG4vLyBPbiBTY3JpcHQgTG9hZCwgbGV0J3MgZG8gc29tZSBiYXNpYyBzdHVmZlxuLy8gSUlGRSBmb3IgYWRkaW5nIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdCBidXR0b24gaW4gdG9kbyBmb3JtLlxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1mb3JtJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc3VibWl0Jyk7XG4gXG4gIGJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1wdXJwb3NlJykgPT09ICdjcmVhdGUnKSB7XG4gICAgICBGb3JtQ29udHJvbGxlci5jcmVhdGVUb2RvKGZvcm0uZWxlbWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBGb3JtQ29udHJvbGxlci5lZGl0VG9kbyhmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS11dWlkJyksIGZvcm0uZWxlbWVudHMpO1xuICAgIH1cbiAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJ0bkNyZWF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNyZWF0ZS10b2RvJyk7XG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcblxuICBidG5DcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIGlmIGZvcm0gaXMgaGlkZGVuLCB0aGVuIHVuaGlkZSBhbmQgZGlzcGxheSBmb3JtLCBlbHNlIGhpZGUgaXQuXG4gICAgaWYgKGRpdkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgIGRpdkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbmNvbnN0IHByb2plY3RUb2RheSA9IFByb2plY3QoJ3RvZGF5Jyk7XG5sZXQgdG9kb3MgPSB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==