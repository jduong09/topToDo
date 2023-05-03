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
function createTodoListItem(todo) {
  const todoInformation = todo.getInfo();
  
  const listItemTodo = document.createElement('li');
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

const formValidate = (formData) => {
  for (let i = 0; i < 5; i++) {
    const element = formData[i];

    console.log(element.validity);
    const adjacentSpan = element.parentElement.children[2];
    
    if (!element.validity.valid) {
      adjacentSpan.innerHTML = 'Invalid';
      adjacentSpan.classList.remove('hide');
      return false;
    } else {
      adjacentSpan.innerHTML = '';
      adjacentSpan.classList.add('hide');
    }
  }
  return true;
}
// On Script Load, let's do some basic stuff
// IIFE for adding event listener to submit button in todo form.
(function() {
  const divForm = document.getElementById('div-form');
  const form = document.getElementById('form-create-edit-todo');
  const btnSubmit = document.getElementById('button-submit');
 
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    formValidate(form.elements);
    if (formValidate(form.elements)) {
      form.getAttribute('data-purpose') === 'create' ? FormController.createTodo(form.elements) : FormController.editTodo(form.getAttribute('data-uuid'), form.elements);
      divForm.classList.add('hide');
    } else {
      return;
    }
  });
})();

(function() {
  const btnCreateTodo = document.getElementById('btn-create-todo');
  const divForm = document.getElementById('div-form');

  btnCreateTodo.addEventListener('click', (e) => {
    e.preventDefault();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvcHRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcHRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3B0b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogQnVpbGQgZnJvbSB0aGUgaW5zaWRlIG91dCAqL1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG4vKiBUbyBETyBBcHAgKi9cbmNvbnN0IFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IF9ub3RlcyA9IG5vdGVzO1xuXG4gIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcblxuICBjb25zdCBlZGl0VG9kbyA9IChmb3JtRGF0YSkgPT4ge1xuICAgIC8vIGZvcm1EYXRhIGlzIGFuIGh0bWwgY29sbGVjdGlvbiBhcnJheVxuICAgIF90aXRsZSA9IGZvcm1EYXRhWzBdLnZhbHVlO1xuICAgIF9kZXNjcmlwdGlvbiA9IGZvcm1EYXRhWzFdLnZhbHVlO1xuICAgIF9kdWVEYXRlID0gZm9ybURhdGFbMl0udmFsdWU7XG4gICAgX3ByaW9yaXR5ID0gZm9ybURhdGFbM10udmFsdWU7XG4gICAgX25vdGVzID0gZm9ybURhdGFbNF0udmFsdWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICByZXR1cm4geyBfdGl0bGUsIF9kZXNjcmlwdGlvbiwgX2R1ZURhdGUsIF9wcmlvcml0eSwgX25vdGVzIH07XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0SW5mbywgdXVpZCwgZWRpdFRvZG8gfTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lLCB0b2RvcywgYWRkVG9kbyB9O1xufVxuXG4vLyBEYXNoYm9hcmRcblxuLy8gTGlzdCBvZiBQcm9qZWN0c1xuXG4vLyBMaXN0IG9mIFRvZG9zIGZvciB0aGUgZGF5PyBcblxuLy8gQWxsIFRvZG9zXG5cbi8vIFRvZG9zIGJhc2VkIG9uIHByaW9yaXR5P1xuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHRvZG8uXG5cbi8vIEFiaWxpdHkgdG8gY3JlYXRlL3VwZGF0ZS9kZWxldGUgcHJvamVjdFxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RJdGVtKHRvZG8pIHtcbiAgY29uc3QgdG9kb0luZm9ybWF0aW9uID0gdG9kby5nZXRJbmZvKCk7XG4gIFxuICBjb25zdCBsaXN0SXRlbVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbVRvZG8uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWluZm9ybWF0aW9uXCI+XG4gICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvSW5mb3JtYXRpb24uX3RpdGxlfTwvaDM+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvZG8tZGVzY3JpcHRpb25cIj4ke3RvZG9JbmZvcm1hdGlvbi5fZGVzY3JpcHRpb259PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWRldGFpbHMgaGlkZVwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1kZXRhaWxzXCI+XG4gICAgICAgIDxsaT48Yj5EdWUgRGF0ZTo8L2I+ICR7dG9kb0luZm9ybWF0aW9uLl9kdWVEYXRlfTwvbGk+XG4gICAgICAgIDxsaT48Yj5Qcmlvcml0eTo8L2I+ICR7dG9kb0luZm9ybWF0aW9uLl9wcmlvcml0eX08L2xpPlxuICAgICAgICA8bGk+PGI+Tm90ZXM6PC9iPiAke3RvZG9JbmZvcm1hdGlvbi5fbm90ZXN9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgbGlzdEl0ZW1Ub2RvLnNldEF0dHJpYnV0ZSgnZGF0YS11dWlkJywgdG9kby51dWlkKTtcbiAgXG4gIC8vIEFkZCBlZGl0IGFuZCBkZWxldGUgYnV0dG9ucyB0byB0b2RvIGxpc3QgaXRlbS5cbiAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdsaXN0LWJ1dHRvbnMnKTtcblxuICBjb25zdCBsaXN0SXRlbUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkVkaXQuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgY29uc3QgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICBjb25zdCBzdmdCdG5XaWR0aCA9IDE4O1xuICBjb25zdCBzdmdCdG5IZWlnaHQgPSAxODtcbiAgY29uc3Qgc3ZnRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICBidG5FZGl0LmFwcGVuZENoaWxkKHN2Z0VkaXQpO1xuICBsaXN0SXRlbUVkaXQuYXBwZW5kQ2hpbGQoYnRuRWRpdCk7XG4gIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDUxMiA1MTInKTtcbiAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzdmdCdG5XaWR0aCk7XG4gIHN2Z0VkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHN2Z0J0bkhlaWdodCk7XG5cbiAgY29uc3QgcGF0aEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gIHN2Z0VkaXQuYXBwZW5kQ2hpbGQocGF0aEVkaXQpXG4gIHBhdGhFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgJ000NzEuNiAyMS43Yy0yMS45LTIxLjktNTcuMy0yMS45LTc5LjIgMEwzNjIuMyA1MS43bDk3LjkgOTcuOSAzMC4xLTMwLjFjMjEuOS0yMS45IDIxLjktNTcuMyAwLTc5LjJMNDcxLjYgMjEuN3ptLTI5OS4yIDIyMGMtNi4xIDYuMS0xMC44IDEzLjYtMTMuNSAyMS45bC0yOS42IDg4LjhjLTIuOSA4LjYtLjYgMTguMSA1LjggMjQuNnMxNS45IDguNyAyNC42IDUuOGw4OC44LTI5LjZjOC4yLTIuNyAxNS43LTcuNCAyMS45LTEzLjVMNDM3LjcgMTcyLjMgMzM5LjcgNzQuMyAxNzIuNCAyNDEuN3pNOTYgNjRDNDMgNjQgMCAxMDcgMCAxNjBWNDE2YzAgNTMgNDMgOTYgOTYgOTZIMzUyYzUzIDAgOTYtNDMgOTYtOTZWMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMydjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIOTZ6Jyk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGJ0bkVkaXQgZm9yIGVkaXRpbmcgdG9kby5cbiAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGl2UGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHV1aWQgPSBkaXZQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnKTtcblxuICAgIERvbVVwZGF0ZXIuZWRpdFRvZG8odXVpZCk7XG4gICAgRG9tVXBkYXRlci5zZXRGb3JtUHVycG9zZSgnZWRpdCcpO1xuICB9KTtcblxuICBjb25zdCBsaXN0SXRlbURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgY29uc3Qgc3ZnRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gIGJ0bkRlbGV0ZS5hcHBlbmRDaGlsZChzdmdEZWxldGUpO1xuICBsaXN0SXRlbURlbGV0ZS5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDQ0OCA1MTInKTtcbiAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBzdmdCdG5IZWlnaHQpO1xuXG4gIGNvbnN0IHBhdGhEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gIHN2Z0RlbGV0ZS5hcHBlbmRDaGlsZChwYXRoRGVsZXRlKTtcbiAgcGF0aERlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNMTM1LjIgMTcuN0wxMjggMzJIMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2SDQxNmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzMjBsLTcuMi0xNC4zQzMwNy40IDYuOCAyOTYuMyAwIDI4NC4yIDBIMTYzLjhjLTEyLjEgMC0yMy4yIDYuOC0yOC42IDE3Ljd6TTQxNiAxMjhIMzJMNTMuMiA0NjdjMS42IDI1LjMgMjIuNiA0NSA0Ny45IDQ1SDM0Ni45YzI1LjMgMCA0Ni4zLTE5LjcgNDcuOS00NUw0MTYgMTI4eicpO1xuICBcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGJ0bkRlbGV0ZSBmb3IgZGVsZXRpbmcgdG9kby5cbiAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBGdW5jdGlvbiBmb3IgZGVsZXRpbmcgdG9kby5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gV2UgbmVlZCB0byBrbm93IHdoaWNoIHRvZG8gaXQgaXMuXG4gICAgY29uc3QgZGl2UGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHV1aWQgPSBkaXZQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnKTtcbiAgICAvLyBPYmplY3QgaG9sZGluZyB0b2RvcyB3aWxsIGp1c3QgZGVsZXRlIGtleSwgZWZmZWN0aXZlbHkgZGVsZXRpbmcgdG9kby5cbiAgICBkZWxldGUgdG9kb3NbdXVpZF07XG4gICAgRG9tVXBkYXRlci51cGRhdGVUb2RvTGlzdCgpO1xuICAgIC8vIFVwZGF0ZSBEb20sIHdpdGggdG9kbyBiZWluZyBkZWxldGVkLlxuICB9KTtcblxuICAvLyBBZGQgRXhwYW5kIGJ1dHRvblxuICAvLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTIzMy40IDQwNi42YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDE5Mi0xOTJjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMjU2IDMzOC43IDg2LjYgMTY5LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zbDE5MiAxOTJ6XCIvPjwvc3ZnPlxuICBjb25zdCBsaXN0SXRlbURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBidG5EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkRldGFpbHMuY2xhc3NMaXN0LmFkZCgnYnRuLXRvZG8nKTtcbiAgY29uc3Qgc3ZnRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gIGJ0bkRldGFpbHMuYXBwZW5kQ2hpbGQoc3ZnRGV0YWlsKTtcbiAgbGlzdEl0ZW1EZXRhaWxzLmFwcGVuZENoaWxkKGJ0bkRldGFpbHMpO1xuICBzdmdEZXRhaWwuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDUxMiA1MTInKTtcbiAgc3ZnRGV0YWlsLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHN2Z0J0bldpZHRoKTtcbiAgc3ZnRGV0YWlsLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBzdmdCdG5IZWlnaHQpO1xuXG4gIGNvbnN0IHBhdGhEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gIHN2Z0RldGFpbC5hcHBlbmRDaGlsZChwYXRoRGV0YWlsKTtcbiAgcGF0aERldGFpbC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNMjMzLjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTkyLTE5MmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMEwyNTYgMzM4LjcgODYuNiAxNjkuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTkyIDE5MnonKTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGJ0bkRldGFpbHMuXG4gIGJ0bkRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIHJldmVhbCBkaXYtZGV0YWlsc1xuICAgIGNvbnN0IGRpdlBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCB0b2RvRGV0YWlscyA9IGRpdlBhcmVudC5jaGlsZHJlblsyXTtcblxuICAgIGlmICh0b2RvRGV0YWlscy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZGl2UGFyZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgZGl2UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxpc3RCdXR0b25zLmFwcGVuZChsaXN0SXRlbUVkaXQsIGxpc3RJdGVtRGVsZXRlLCBsaXN0SXRlbURldGFpbHMpO1xuXG4gIGNvbnN0IHRvZG9EZXRhaWxzID0gbGlzdEl0ZW1Ub2RvLmNoaWxkcmVuWzFdO1xuICBsaXN0SXRlbVRvZG8uaW5zZXJ0QmVmb3JlKGxpc3RCdXR0b25zLCB0b2RvRGV0YWlscyk7XG4gIC8vIGxpc3RJdGVtVG9kby5hcHBlbmRDaGlsZChsaXN0QnV0dG9ucyk7XG4gIFxuICByZXR1cm4gbGlzdEl0ZW1Ub2RvO1xufVxuXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICB0b2Rvc1tuZXdUb2RvLnV1aWRdID0gbmV3VG9kbztcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmNsZWFyRm9ybSgpO1xuICAgIERvbVVwZGF0ZXIuYWRkTmV3VG9kbyhuZXdUb2RvKTtcbiAgfSxcbiAgXG4gIGVkaXRUb2RvOiAodXVpZCwgZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCB0b2RvID0gdG9kb3NbdXVpZF07XG4gICAgdG9kby5lZGl0VG9kbyhmb3JtRGF0YSk7XG4gICAgRG9tVXBkYXRlci51cGRhdGVUb2RvKHV1aWQsIHRvZG8uZ2V0SW5mbygpKTtcbiAgICBEb21VcGRhdGVyLmNsZWFyRm9ybSgpO1xuICAgIERvbVVwZGF0ZXIuc2V0Rm9ybVB1cnBvc2UoJ2NyZWF0ZScpO1xuICB9XG59O1xuXG5jb25zdCBEb21VcGRhdGVyID0ge1xuICBhZGROZXdUb2RvOiAodG9kbykgPT4ge1xuICAgIGNvbnN0IGxpc3RUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LXRvZG9zJyk7XG4gICAgY29uc3QgbGlzdEl0ZW1Ub2RvID0gY3JlYXRlVG9kb0xpc3RJdGVtKHRvZG8pO1xuXG4gICAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKGxpc3RJdGVtVG9kbyk7XG4gIH0sXG4gIGVkaXRUb2RvOiAodXVpZCkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB0b2Rvc1t1dWlkXTtcbiAgICBjb25zdCB0b2RvSW5mb3JtYXRpb24gPSB0b2RvLmdldEluZm8oKTtcblxuICAgIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcbiAgICBjb25zdCBoZWFkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1mb3JtJyk7XG4gICAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50cyA9IGZvcm1FZGl0LmVsZW1lbnRzO1xuICAgIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc3VibWl0Jyk7XG4gICAgXG4gICAgaGVhZGVyRm9ybS5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgYnV0dG9uU3VibWl0LmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xuICAgIGZvcm1FZGl0LnNldEF0dHJpYnV0ZSgnZGF0YS11dWlkJywgdXVpZCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gaW5wdXRFbGVtZW50c1tpXTtcblxuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdG9kb0luZm9ybWF0aW9uLl90aXRsZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX2Rlc2NyaXB0aW9uO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fZHVlRGF0ZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX3ByaW9yaXR5O1xuICAgICAgfSBlbHNlIGlmIChpID09PSA0KSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fbm90ZXM7XG4gICAgICB9IFxuICAgIH1cbiAgICBkaXZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSxcbiAgdXBkYXRlVG9kbzogKHV1aWQsIHRvZG9JbmZvcm1hdGlvbikgPT4ge1xuICAgIGNvbnN0IGxpVXVpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2RhdGEtdXVpZD1cIiR7dXVpZH1cIl1gKTtcbiAgICBjb25zdCBkaXZUb2RvSW5mb3JtYXRpb24gPSBsaVV1aWQuY2hpbGRyZW5bMF07XG4gICAgZGl2VG9kb0luZm9ybWF0aW9uLmNoaWxkcmVuWzBdLmlubmVySFRNTCA9IHRvZG9JbmZvcm1hdGlvbi5fdGl0bGU7XG4gICAgZGl2VG9kb0luZm9ybWF0aW9uLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IHRvZG9JbmZvcm1hdGlvbi5fZGVzY3JpcHRpb247XG4gIH0sXG4gIGNsZWFyRm9ybTogKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gZm9ybS5lbGVtZW50cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMykge1xuICAgICAgICBmb3JtRWxlbWVudHNbM10uY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1FbGVtZW50c1tpXS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSxcbiAgc2V0Rm9ybVB1cnBvc2U6ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNyZWF0ZS1lZGl0LXRvZG8nKTtcbiAgICBjb25zdCBoZWFkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1mb3JtJyk7XG4gICAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zdWJtaXQnKTtcblxuICAgIGlmICh0eXBlID09PSAnZWRpdCcpIHtcbiAgICAgIGhlYWRlckZvcm0uaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgICAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdFZGl0IFRvZG8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJGb3JtLmlubmVySFRNTCA9ICdDcmVhdGUnO1xuICAgICAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdDcmVhdGUgVG9kbyc7XG4gICAgfVxuICAgIFxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLXB1cnBvc2UnLCB0eXBlKTtcbiAgfSxcbiAgdXBkYXRlVG9kb0xpc3Q6ICgpID0+IHtcbiAgICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC10b2RvcycpO1xuICAgIGxpc3RUb2Rvcy5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGNvbnN0IHRvZG8gaW4gdG9kb3MpIHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtVG9kbyA9IGNyZWF0ZVRvZG9MaXN0SXRlbSh0b2Rvc1t0b2RvXSk7XG4gICAgICBsaXN0VG9kb3MuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Ub2RvKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGZvcm1WYWxpZGF0ZSA9IChmb3JtRGF0YSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmb3JtRGF0YVtpXTtcblxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQudmFsaWRpdHkpO1xuICAgIGNvbnN0IGFkamFjZW50U3BhbiA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXTtcbiAgICBcbiAgICBpZiAoIWVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGFkamFjZW50U3Bhbi5pbm5lckhUTUwgPSAnSW52YWxpZCc7XG4gICAgICBhZGphY2VudFNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGphY2VudFNwYW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICBhZGphY2VudFNwYW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbi8vIE9uIFNjcmlwdCBMb2FkLCBsZXQncyBkbyBzb21lIGJhc2ljIHN0dWZmXG4vLyBJSUZFIGZvciBhZGRpbmcgZXZlbnQgbGlzdGVuZXIgdG8gc3VibWl0IGJ1dHRvbiBpbiB0b2RvIGZvcm0uXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNyZWF0ZS1lZGl0LXRvZG8nKTtcbiAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zdWJtaXQnKTtcbiBcbiAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmb3JtVmFsaWRhdGUoZm9ybS5lbGVtZW50cyk7XG4gICAgaWYgKGZvcm1WYWxpZGF0ZShmb3JtLmVsZW1lbnRzKSkge1xuICAgICAgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVycG9zZScpID09PSAnY3JlYXRlJyA/IEZvcm1Db250cm9sbGVyLmNyZWF0ZVRvZG8oZm9ybS5lbGVtZW50cykgOiBGb3JtQ29udHJvbGxlci5lZGl0VG9kbyhmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS11dWlkJyksIGZvcm0uZWxlbWVudHMpO1xuICAgICAgZGl2Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBidG5DcmVhdGVUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jcmVhdGUtdG9kbycpO1xuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1mb3JtJyk7XG5cbiAgYnRuQ3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGRpdkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgIGRpdkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuY29uc3QgcHJvamVjdFRvZGF5ID0gUHJvamVjdCgndG9kYXknKTtcbmxldCB0b2RvcyA9IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9