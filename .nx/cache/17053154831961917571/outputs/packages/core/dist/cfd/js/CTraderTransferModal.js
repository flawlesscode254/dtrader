/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components"), require("@deriv/stores"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/stores", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/cfd"] = factory(require("@deriv/components"), require("@deriv/stores"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/cfd"] = factory(root["@deriv/components"], root["@deriv/stores"], root["@deriv/translations"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_stores__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx":
/*!**************************************************************************!*\
  !*** ./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/stores */ \"@deriv/stores\");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar CTraderTransferModal = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_2__.observer)(function () {\n  var _useStore = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_2__.useStore)(),\n    cfd = _useStore.modules.cfd,\n    client = _useStore.client,\n    traders_hub = _useStore.traders_hub;\n  var ctrader_accounts_list = client.ctrader_accounts_list;\n  var toggleAccountTransferModal = traders_hub.toggleAccountTransferModal,\n    setSelectedAccount = traders_hub.setSelectedAccount;\n  var is_ctrader_transfer_modal_visible = cfd.is_ctrader_transfer_modal_visible,\n    toggleCTraderTransferModal = cfd.toggleCTraderTransferModal;\n  var realCtraderAccounts = ctrader_accounts_list.filter(function (ctrader_account) {\n    return ctrader_account.account_type === 'real';\n  });\n  var onClickTransferHandler = function onClickTransferHandler(ctrader_account) {\n    toggleCTraderTransferModal();\n    toggleAccountTransferModal();\n    setSelectedAccount(ctrader_account);\n  };\n  if (realCtraderAccounts.length === 1) {\n    onClickTransferHandler(realCtraderAccounts[0]);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    width: \"408px\",\n    should_header_stick_body: false,\n    exit_classname: \"cfd-modal--custom-exit\",\n    toggleModal: toggleCTraderTransferModal,\n    is_open: is_ctrader_transfer_modal_visible,\n    title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)('Choose a cTrader account to transfer')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ctrader-transfer-modal\"\n  }, realCtraderAccounts.map(function (ctrader_account) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      key: ctrader_account.login,\n      className: \"ctrader-transfer-modal__accounts-list\",\n      onClick: function onClick() {\n        return onClickTransferHandler(ctrader_account);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      size: \"xs\"\n    }, ctrader_account.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      size: \"xs\",\n      weight: \"bold\",\n      className: \"ctrader-transfer-modal__accounts-list--balance\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Money, {\n      amount: ctrader_account.balance,\n      currency: ctrader_account.currency,\n      has_sign: !!ctrader_account.balance && ctrader_account.balance < 0,\n      show_currency: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n      icon: \"IcChevronRight\"\n    })));\n  })));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTraderTransferModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsL2N0cmFkZXItdHJhbnNmZXItbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUlBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL0NvbnRhaW5lcnMvY3RyYWRlci10cmFuc2Zlci1tb2RhbC9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsLnRzeD8wMWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEljb24sIE1vZGFsLCBNb25leSwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IG9ic2VydmVyLCB1c2VTdG9yZSB9IGZyb20gJ0BkZXJpdi9zdG9yZXMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgQ1RyYWRlclRyYW5zZmVyTW9kYWwgPSBvYnNlcnZlcigoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBtb2R1bGVzOiB7IGNmZCB9LFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHRyYWRlcnNfaHViLFxuICAgIH0gPSB1c2VTdG9yZSgpO1xuXG4gICAgY29uc3QgeyBjdHJhZGVyX2FjY291bnRzX2xpc3QgfSA9IGNsaWVudDtcbiAgICBjb25zdCB7IHRvZ2dsZUFjY291bnRUcmFuc2Zlck1vZGFsLCBzZXRTZWxlY3RlZEFjY291bnQgfSA9IHRyYWRlcnNfaHViO1xuICAgIGNvbnN0IHsgaXNfY3RyYWRlcl90cmFuc2Zlcl9tb2RhbF92aXNpYmxlLCB0b2dnbGVDVHJhZGVyVHJhbnNmZXJNb2RhbCB9ID0gY2ZkO1xuICAgIGNvbnN0IHJlYWxDdHJhZGVyQWNjb3VudHMgPSBjdHJhZGVyX2FjY291bnRzX2xpc3QuZmlsdGVyKFxuICAgICAgICBjdHJhZGVyX2FjY291bnQgPT4gY3RyYWRlcl9hY2NvdW50LmFjY291bnRfdHlwZSA9PT0gJ3JlYWwnXG4gICAgKTtcblxuICAgIGNvbnN0IG9uQ2xpY2tUcmFuc2ZlckhhbmRsZXIgPSAoY3RyYWRlcl9hY2NvdW50OiAodHlwZW9mIGN0cmFkZXJfYWNjb3VudHNfbGlzdClbbnVtYmVyXSkgPT4ge1xuICAgICAgICB0b2dnbGVDVHJhZGVyVHJhbnNmZXJNb2RhbCgpO1xuICAgICAgICB0b2dnbGVBY2NvdW50VHJhbnNmZXJNb2RhbCgpO1xuICAgICAgICBzZXRTZWxlY3RlZEFjY291bnQoY3RyYWRlcl9hY2NvdW50KTtcbiAgICB9O1xuXG4gICAgaWYgKHJlYWxDdHJhZGVyQWNjb3VudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9uQ2xpY2tUcmFuc2ZlckhhbmRsZXIocmVhbEN0cmFkZXJBY2NvdW50c1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICB3aWR0aD0nNDA4cHgnXG4gICAgICAgICAgICBzaG91bGRfaGVhZGVyX3N0aWNrX2JvZHk9e2ZhbHNlfVxuICAgICAgICAgICAgZXhpdF9jbGFzc25hbWU9J2NmZC1tb2RhbC0tY3VzdG9tLWV4aXQnXG4gICAgICAgICAgICB0b2dnbGVNb2RhbD17dG9nZ2xlQ1RyYWRlclRyYW5zZmVyTW9kYWx9XG4gICAgICAgICAgICBpc19vcGVuPXtpc19jdHJhZGVyX3RyYW5zZmVyX21vZGFsX3Zpc2libGV9XG4gICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ0Nob29zZSBhIGNUcmFkZXIgYWNjb3VudCB0byB0cmFuc2ZlcicpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3RyYWRlci10cmFuc2Zlci1tb2RhbCc+XG4gICAgICAgICAgICAgICAge3JlYWxDdHJhZGVyQWNjb3VudHMubWFwKGN0cmFkZXJfYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjdHJhZGVyX2FjY291bnQubG9naW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdHJhZGVyLXRyYW5zZmVyLW1vZGFsX19hY2NvdW50cy1saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tUcmFuc2ZlckhhbmRsZXIoY3RyYWRlcl9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzaXplPSd4cyc+e2N0cmFkZXJfYWNjb3VudC5sb2dpbn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc2l6ZT0neHMnIHdlaWdodD0nYm9sZCcgY2xhc3NOYW1lPSdjdHJhZGVyLXRyYW5zZmVyLW1vZGFsX19hY2NvdW50cy1saXN0LS1iYWxhbmNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2N0cmFkZXJfYWNjb3VudC5iYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k9e2N0cmFkZXJfYWNjb3VudC5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc19zaWduPXshIWN0cmFkZXJfYWNjb3VudC5iYWxhbmNlICYmIGN0cmFkZXJfYWNjb3VudC5iYWxhbmNlIDwgMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfY3VycmVuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNDaGV2cm9uUmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENUcmFkZXJUcmFuc2Zlck1vZGFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx\n");

/***/ }),

/***/ "./src/Containers/ctrader-transfer-modal/index.tsx":
/*!*********************************************************!*\
  !*** ./src/Containers/ctrader-transfer-modal/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ctrader_transfer_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctrader-transfer-modal */ \"./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ctrader_transfer_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9jZmQvLi9zcmMvQ29udGFpbmVycy9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsL2luZGV4LnRzeD83OGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDVHJhZGVyVHJhbnNmZXJNb2RhbCBmcm9tICcuL2N0cmFkZXItdHJhbnNmZXItbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBDVHJhZGVyVHJhbnNmZXJNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/ctrader-transfer-modal/index.tsx\n");

/***/ }),

/***/ "@deriv/components":
/*!************************************!*\
  !*** external "@deriv/components" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/stores":
/*!********************************!*\
  !*** external "@deriv/stores" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_stores__;

/***/ }),

/***/ "@deriv/translations":
/*!**************************************!*\
  !*** external "@deriv/translations" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Containers/ctrader-transfer-modal/index.tsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});