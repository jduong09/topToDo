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
  Create Todo
  Read Todo
  Update Todo
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
    /*
    formData[0] = title;
    formData
    */
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

/*
const editForm = () => {
  
}
*/

// formData returns a 6 element HTML Collection
// We iterate to 5, while skipping the last one because that is the submit button.
const FormController = {
  createTodo: (formData) => {
    const newTodo = ToDo(formData[0].value, formData[1].value, formData[2].value, formData[3].value, formData[4].value);
    todos[newTodo.uuid] = newTodo;
    projectToday.addTodo(newTodo);
    DomUpdater.addNewTodo(newTodo);
  },
  
  editTodo: (uuid, formData) => {
    const todo = todos[uuid];
    todo.editTodo(formData);
    DomUpdater.updateTodo(uuid, todo.getInfo());
  }
};

const DomUpdater = {
  addNewTodo: (todo) => {
    const listTodos = document.getElementById('list-todos');
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
      const formEdit = document.getElementById('form-create-edit-todo');

      const divParent = e.currentTarget.parentElement.parentElement.parentElement;
      const uuid = divParent.getAttribute('data-uuid');

      DomUpdater.editTodo(uuid);
      formEdit.setAttribute('data-purpose', 'edit');

      // Need to change form to edit mode and populate input values with todo values.
      // FormController.editTodo(uuid, formEdit.elements);
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



    listButtons.append(listItemEdit, listItemDelete);
    listItemTodo.appendChild(listButtons);
    listTodos.append(listItemTodo);
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
    const liUuid = document.querySelectorAll(`li[data-uuid="${uuid}"]`);
    console.log(liUuid);
    console.log(todoInformation);
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4REFBOEQsS0FBSztBQUNuRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvcHRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b3B0b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9wdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3B0b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3B0b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcHRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBCdWlsZCBmcm9tIHRoZSBpbnNpZGUgb3V0ICovXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbi8qIFRvIERPIEFwcCAqL1xuXG4vKiBcbiAgVG8gRG8gT2JqZWN0XG4gIENvbnN0cnVjdG9yXG4gIHtcbiAgICBUaXRsZTogJ0hlbGxvJ1xuICAgIERlc2NyaXB0aW9uOiAnSGVsbG8gaSBuZWVkIHRvIGRvIHRoaXMnXG4gICAgRHVlIERhdGU6IE1NL0REL1lZWVlcbiAgICBwcmlvcml0eTogTG93L01lZC9IaWdoXG4gICAgbm90ZXM6ICdmamtkYWZqa2FkO2wnXG4gIH1cblxuICBUb0RvIENvbnRyb2xsZXJcblxuICBDUlVEXG4gIENyZWF0ZSBUb2RvXG4gIFJlYWQgVG9kb1xuICBVcGRhdGUgVG9kb1xuICBEZWxldGUgVG9kb1xuKi9cblxuY29uc3QgVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICBsZXQgX25vdGVzID0gbm90ZXM7XG5cbiAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgLy8gZm9ybURhdGEgaXMgYW4gaHRtbCBjb2xsZWN0aW9uIGFycmF5XG4gICAgLypcbiAgICBmb3JtRGF0YVswXSA9IHRpdGxlO1xuICAgIGZvcm1EYXRhXG4gICAgKi9cbiAgICBfdGl0bGUgPSBmb3JtRGF0YVswXS52YWx1ZTtcbiAgICBfZGVzY3JpcHRpb24gPSBmb3JtRGF0YVsxXS52YWx1ZTtcbiAgICBfZHVlRGF0ZSA9IGZvcm1EYXRhWzJdLnZhbHVlO1xuICAgIF9wcmlvcml0eSA9IGZvcm1EYXRhWzNdLnZhbHVlO1xuICAgIF9ub3RlcyA9IGZvcm1EYXRhWzRdLnZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgX3RpdGxlLCBfZGVzY3JpcHRpb24sIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9ub3RlcyB9O1xuICB9O1xuXG4gIHJldHVybiB7IGdldEluZm8sIHV1aWQsIGVkaXRUb2RvIH07XG59XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgdG9kb3MsIGFkZFRvZG8gfTtcbn1cblxuLy8gRGFzaGJvYXJkXG5cbi8vIExpc3Qgb2YgUHJvamVjdHNcblxuLy8gTGlzdCBvZiBUb2RvcyBmb3IgdGhlIGRheT8gXG5cbi8vIEFsbCBUb2Rvc1xuXG4vLyBUb2RvcyBiYXNlZCBvbiBwcmlvcml0eT9cblxuLy8gQWJpbGl0eSB0byBjcmVhdGUvdXBkYXRlL2RlbGV0ZSB0b2RvLlxuXG4vLyBBYmlsaXR5IHRvIGNyZWF0ZS91cGRhdGUvZGVsZXRlIHByb2plY3RcblxuLypcbmNvbnN0IGVkaXRGb3JtID0gKCkgPT4ge1xuICBcbn1cbiovXG5cbi8vIGZvcm1EYXRhIHJldHVybnMgYSA2IGVsZW1lbnQgSFRNTCBDb2xsZWN0aW9uXG4vLyBXZSBpdGVyYXRlIHRvIDUsIHdoaWxlIHNraXBwaW5nIHRoZSBsYXN0IG9uZSBiZWNhdXNlIHRoYXQgaXMgdGhlIHN1Ym1pdCBidXR0b24uXG5jb25zdCBGb3JtQ29udHJvbGxlciA9IHtcbiAgY3JlYXRlVG9kbzogKGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvRG8oZm9ybURhdGFbMF0udmFsdWUsIGZvcm1EYXRhWzFdLnZhbHVlLCBmb3JtRGF0YVsyXS52YWx1ZSwgZm9ybURhdGFbM10udmFsdWUsIGZvcm1EYXRhWzRdLnZhbHVlKTtcbiAgICB0b2Rvc1tuZXdUb2RvLnV1aWRdID0gbmV3VG9kbztcbiAgICBwcm9qZWN0VG9kYXkuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBEb21VcGRhdGVyLmFkZE5ld1RvZG8obmV3VG9kbyk7XG4gIH0sXG4gIFxuICBlZGl0VG9kbzogKHV1aWQsIGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zW3V1aWRdO1xuICAgIHRvZG8uZWRpdFRvZG8oZm9ybURhdGEpO1xuICAgIERvbVVwZGF0ZXIudXBkYXRlVG9kbyh1dWlkLCB0b2RvLmdldEluZm8oKSk7XG4gIH1cbn07XG5cbmNvbnN0IERvbVVwZGF0ZXIgPSB7XG4gIGFkZE5ld1RvZG86ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdG9kb3MnKTtcbiAgICBjb25zdCB0b2RvSW5mb3JtYXRpb24gPSB0b2RvLmdldEluZm8oKTtcbiAgICBcbiAgICBjb25zdCBsaXN0SXRlbVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtVG9kby5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1pbmZvcm1hdGlvblwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvSW5mb3JtYXRpb24uX3RpdGxlfTwvaDM+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1kZXNjcmlwdGlvblwiPiR7dG9kb0luZm9ybWF0aW9uLl9kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgbGlzdEl0ZW1Ub2RvLnNldEF0dHJpYnV0ZSgnZGF0YS11dWlkJywgdG9kby51dWlkKTtcbiAgICBcbiAgICAvLyBBZGQgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnMgdG8gdG9kbyBsaXN0IGl0ZW0uXG4gICAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnV0dG9ucycpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuRWRpdC5jbGFzc0xpc3QuYWRkKCdidG4tdG9kbycpO1xuICAgIGNvbnN0IHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgICBjb25zdCBzdmdCdG5XaWR0aCA9IDE4O1xuICAgIGNvbnN0IHN2Z0J0bkhlaWdodCA9IDE4O1xuICAgIGNvbnN0IHN2Z0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcbiAgICBidG5FZGl0LmFwcGVuZENoaWxkKHN2Z0VkaXQpO1xuICAgIGxpc3RJdGVtRWRpdC5hcHBlbmRDaGlsZChidG5FZGl0KTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCA1MTIgNTEyJyk7XG4gICAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBzdmdCdG5XaWR0aCk7XG4gICAgc3ZnRWRpdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgc3ZnQnRuSGVpZ2h0KTtcblxuICAgIGNvbnN0IHBhdGhFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAncGF0aCcpO1xuICAgIHN2Z0VkaXQuYXBwZW5kQ2hpbGQocGF0aEVkaXQpXG4gICAgcGF0aEVkaXQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCAnTTQ3MS42IDIxLjdjLTIxLjktMjEuOS01Ny4zLTIxLjktNzkuMiAwTDM2Mi4zIDUxLjdsOTcuOSA5Ny45IDMwLjEtMzAuMWMyMS45LTIxLjkgMjEuOS01Ny4zIDAtNzkuMkw0NzEuNiAyMS43em0tMjk5LjIgMjIwYy02LjEgNi4xLTEwLjggMTMuNi0xMy41IDIxLjlsLTI5LjYgODguOGMtMi45IDguNi0uNiAxOC4xIDUuOCAyNC42czE1LjkgOC43IDI0LjYgNS44bDg4LjgtMjkuNmM4LjItMi43IDE1LjctNy40IDIxLjktMTMuNUw0MzcuNyAxNzIuMyAzMzkuNyA3NC4zIDE3Mi40IDI0MS43ek05NiA2NEM0MyA2NCAwIDEwNyAwIDE2MFY0MTZjMCA1MyA0MyA5NiA5NiA5NkgzNTJjNTMgMCA5Ni00MyA5Ni05NlYzMjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ2OTZjMCAxNy43LTE0LjMgMzItMzIgMzJIOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyVjE2MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmg5NmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkg5NnonKTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBidG5FZGl0IGZvciBlZGl0aW5nIHRvZG8uXG4gICAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNyZWF0ZS1lZGl0LXRvZG8nKTtcblxuICAgICAgY29uc3QgZGl2UGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdXVpZCA9IGRpdlBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXVpZCcpO1xuXG4gICAgICBEb21VcGRhdGVyLmVkaXRUb2RvKHV1aWQpO1xuICAgICAgZm9ybUVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLXB1cnBvc2UnLCAnZWRpdCcpO1xuXG4gICAgICAvLyBOZWVkIHRvIGNoYW5nZSBmb3JtIHRvIGVkaXQgbW9kZSBhbmQgcG9wdWxhdGUgaW5wdXQgdmFsdWVzIHdpdGggdG9kbyB2YWx1ZXMuXG4gICAgICAvLyBGb3JtQ29udHJvbGxlci5lZGl0VG9kbyh1dWlkLCBmb3JtRWRpdC5lbGVtZW50cyk7XG4gICAgfSk7XG5cbiAgICBcbiAgICBcbiAgICBcbiAgICBjb25zdCBsaXN0SXRlbURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2J0bi10b2RvJyk7XG4gICAgY29uc3Qgc3ZnRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnc3ZnJyk7XG4gICAgYnRuRGVsZXRlLmFwcGVuZENoaWxkKHN2Z0RlbGV0ZSk7XG4gICAgbGlzdEl0ZW1EZWxldGUuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCAnMCAwIDQ0OCA1MTInKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgc3ZnQnRuV2lkdGgpO1xuICAgIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0Jywgc3ZnQnRuSGVpZ2h0KTtcblxuICAgIGNvbnN0IHBhdGhEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdwYXRoJyk7XG4gICAgc3ZnRGVsZXRlLmFwcGVuZENoaWxkKHBhdGhEZWxldGUpO1xuICAgIHBhdGhEZWxldGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCAnTTEzNS4yIDE3LjdMMTI4IDMySDMyQzE0LjMgMzIgMCA0Ni4zIDAgNjRTMTQuMyA5NiAzMiA5Nkg0MTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIMzIwbC03LjItMTQuM0MzMDcuNCA2LjggMjk2LjMgMCAyODQuMiAwSDE2My44Yy0xMi4xIDAtMjMuMiA2LjgtMjguNiAxNy43ek00MTYgMTI4SDMyTDUzLjIgNDY3YzEuNiAyNS4zIDIyLjYgNDUgNDcuOSA0NUgzNDYuOWMyNS4zIDAgNDYuMy0xOS43IDQ3LjktNDVMNDE2IDEyOHonKTtcbiAgICBcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gYnRuRGVsZXRlIGZvciBkZWxldGluZyB0b2RvLlxuXG5cblxuICAgIGxpc3RCdXR0b25zLmFwcGVuZChsaXN0SXRlbUVkaXQsIGxpc3RJdGVtRGVsZXRlKTtcbiAgICBsaXN0SXRlbVRvZG8uYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbnMpO1xuICAgIGxpc3RUb2Rvcy5hcHBlbmQobGlzdEl0ZW1Ub2RvKTtcbiAgfSxcbiAgZWRpdFRvZG86ICh1dWlkKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zW3V1aWRdO1xuICAgIGNvbnN0IHRvZG9JbmZvcm1hdGlvbiA9IHRvZG8uZ2V0SW5mbygpO1xuXG4gICAgY29uc3QgZGl2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtZm9ybScpO1xuICAgIGNvbnN0IGhlYWRlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWZvcm0nKTtcbiAgICBjb25zdCBmb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWNyZWF0ZS1lZGl0LXRvZG8nKTtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gZm9ybUVkaXQuZWxlbWVudHM7XG4gICAgY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zdWJtaXQnKTtcbiAgICBcbiAgICBoZWFkZXJGb3JtLmlubmVySFRNTCA9ICdFZGl0JztcbiAgICBidXR0b25TdWJtaXQuaW5uZXJIVE1MID0gJ0VkaXQgVG9kbyc7XG4gICAgZm9ybUVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLXV1aWQnLCB1dWlkKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBpbnB1dEVsZW1lbnRzW2ldO1xuXG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSB0b2RvSW5mb3JtYXRpb24uX3RpdGxlO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fZGVzY3JpcHRpb247XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdG9kb0luZm9ybWF0aW9uLl9kdWVEYXRlO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHRvZG9JbmZvcm1hdGlvbi5fcHJpb3JpdHk7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gdG9kb0luZm9ybWF0aW9uLl9ub3RlcztcbiAgICAgIH0gXG4gICAgfVxuICAgIGRpdkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LFxuICB1cGRhdGVUb2RvOiAodXVpZCwgdG9kb0luZm9ybWF0aW9uKSA9PiB7XG4gICAgY29uc3QgbGlVdWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgbGlbZGF0YS11dWlkPVwiJHt1dWlkfVwiXWApO1xuICAgIGNvbnNvbGUubG9nKGxpVXVpZCk7XG4gICAgY29uc29sZS5sb2codG9kb0luZm9ybWF0aW9uKTtcbiAgfSxcbn07XG4vLyBPbiBTY3JpcHQgTG9hZCwgbGV0J3MgZG8gc29tZSBiYXNpYyBzdHVmZlxuLy8gSUlGRSBmb3IgYWRkaW5nIGV2ZW50IGxpc3RlbmVyIHRvIHN1Ym1pdCBidXR0b24gaW4gdG9kbyBmb3JtLlxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi1mb3JtJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1jcmVhdGUtZWRpdC10b2RvJyk7XG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc3VibWl0Jyk7XG4gXG4gIGJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1wdXJwb3NlJykgPT09ICdjcmVhdGUnKSB7XG4gICAgICBGb3JtQ29udHJvbGxlci5jcmVhdGVUb2RvKGZvcm0uZWxlbWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBGb3JtQ29udHJvbGxlci5lZGl0VG9kbyhmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS11dWlkJyksIGZvcm0uZWxlbWVudHMpO1xuICAgIH1cbiAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSk7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJ0bkNyZWF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNyZWF0ZS10b2RvJyk7XG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWZvcm0nKTtcblxuICBidG5DcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBPbiBjbGlja2luZyB0aGUgcGx1cyBidXR0b24sIGlmIGZvcm0gaXMgaGlkZGVuLCB0aGVuIHVuaGlkZSBhbmQgZGlzcGxheSBmb3JtLCBlbHNlIGhpZGUgaXQuXG4gICAgaWYgKGRpdkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgIGRpdkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbmNvbnN0IHByb2plY3RUb2RheSA9IFByb2plY3QoJ3RvZGF5Jyk7XG5sZXQgdG9kb3MgPSB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==