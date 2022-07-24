/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA": () => (/* binding */ DATA)
/* harmony export */ });
// export const FORM_CLASSES = {
//   label: "text-black font-light md:text-md text-sm",
//   input_textarea_primary: `primary w-full bg-white text-HL_brown border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
//   input_textarea_secondary: `secondary w-full text-HL_gray-500 border border-gray-500 p-2 mb-4 hover:border-1 hover:border-black focus:border-HL_brown focus:border-1 outline-none rounded-md focus:invalid:border-red-500 invalid:border-red-500 invalid:text-red-500 shadow-sm`,
// };
const DATA = {
  navigation: {
    back: {
      content: "<back"
    },
    clear: {
      content: "Clear"
    }
  },
  steps: {
    step1: {
      heading: "What are you looking for?",
      entry: true,
      options: ["hardware", "subscription"],
      prevStep: "step1",
      hardware: {
        content: "Hardware",
        nextStep: "step2_hardware"
      },
      subscription: {
        content: "Subscription",
        nextStep: "step2_subscription"
      }
    },
    step2_hardware: {
      heading: "Which hardware?",
      options: ["telephone", "other_hardware"],
      prevStep: "step1",
      telephone: {
        content: "Telephone",
        nextStep: "step3_telephone"
      },
      other_hardware: {
        content: "Other hardware",
        nextStep: "step3_other_hardware"
      }
    },
    step2_subscription: {
      heading: "Which subscription?",
      options: ["mobile_broadband_plan", "mobile_plan"],
      prevStep: "step1",
      mobile_broadband_plan: {
        content: "Mobile Broadband Plan",
        nextStep: "filter"
      },
      mobile_plan: {
        content: "Mobile Plan",
        nextStep: "filter"
      }
    },
    step3_telephone: {
      heading: "Do you know your next telephone?",
      options: ["select_phone", "help_me_choose"],
      prevStep: "step2_hardware",
      select_phone: {
        content: "Select phone",
        nextStep: "filter"
      },
      help_me_choose: {
        content: "Help me choose phone / tablet",
        nextStep: "filter"
      }
    },
    step3_other_hardware: {
      heading: "Router o tablet?",
      options: ["router", "tablet"],
      prevStep: "step2_hardware",
      router: {
        content: "Router",
        nextStep: "filtering"
      },
      tablet: {
        content: "Tablet",
        nextStep: "filtering"
      }
    }
  }
};

/***/ }),

/***/ "./src/App/ButtonCustom.js":
/*!*********************************!*\
  !*** ./src/App/ButtonCustom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // import { BUTTON_HANDLERS } from "../../lib/utils";

const BUTTON_MODEL = props => {
  const PROPERTIES = {
    className: {
      buttonSteps: "w-1/3 min-h-[4rem] h-auto p-4 text-black font-bold text-[16px] uppercase tracking-[1px] bg-primary hover:bg-primaryHover ",
      back: "absolute -top-10 lg:-top-20 left-0 w-auto h-[3rem] text-white font-bold text-[14px] uppercase tracking-[1px]  text-primary ",
      clear: "absolute -top-10 lg:-top-20 right-0 w-auto h-[3rem] text-white font-bold text-[14px] uppercase tracking-[1px]  text-primary "
    },
    handlers: {
      buttonSteps() {
        const {
          nextStep,
          setStep,
          setEntry
        } = props;
        setEntry(false);
        setStep(nextStep);
      },

      back() {
        const {
          prevStep,
          setStep,
          setEntry
        } = props;
        let entry = prevStep == "step1" ? true : false;
        setEntry(entry);
        setStep(prevStep);
      },

      clear() {
        const {
          setStep,
          setEntry
        } = props;
        setEntry(true);
        setStep("step1");
      }

    }
  };
  const {
    type
  } = props;
  return {
    className: PROPERTIES.className[type],
    handler: PROPERTIES.handlers[type]
  };
};

const ButtonCustom = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: props.entry && (props.type == "back" || props.type == "clear") ? "hidden" : BUTTON_MODEL(props).className,
    onClick: BUTTON_MODEL(props).handler
  }, props.content);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonCustom);

/***/ }),

/***/ "./src/App/Heading.js":
/*!****************************!*\
  !*** ./src/App/Heading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");
/* harmony import */ var _ButtonCustom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonCustom */ "./src/App/ButtonCustom.js");





const Heading = () => {
  const [entry, setEntry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("step1"); // console.log(DATA.filters[step]["hardware"].content);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative flex flex-col items-center justify-between w-full h-auto bg-black"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonCustom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "back",
    content: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.navigation.back.content,
    entry: entry,
    setEntry: setEntry,
    step: step,
    setStep: setStep,
    prevStep: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.steps[step].prevStep
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonCustom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "clear",
    content: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.navigation.clear.content,
    entry: entry,
    setEntry: setEntry,
    step: step,
    setStep: setStep
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: " tracking-[1px] font-semibold text-4xl  mb-10 text-white"
  }, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.steps[step].heading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full justify-evenly items center "
  }, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA && _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.steps[step].options.map(option => {
    console.log(_lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.steps[step][option].content);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonCustom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "buttonSteps",
      content: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.steps[step][option].content,
      nextStep: _lib_utils__WEBPACK_IMPORTED_MODULE_2__.DATA.steps[step][option].nextStep,
      entry: entry,
      setEntry: setEntry,
      step: step,
      setStep: setStep
    });
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading */ "./src/App/Heading.js");



function App() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App/index.js");




const divsToUpdate = document.querySelectorAll(".root");
divsToUpdate.forEach(div => {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), div);
  div.classList.remove("root");
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map