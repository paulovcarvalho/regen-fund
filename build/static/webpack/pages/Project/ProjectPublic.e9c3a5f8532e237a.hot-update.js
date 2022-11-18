/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Project/ProjectPublic",{

/***/ "./components/ProjectTaskDashboard.tsx":
/*!*********************************************!*\
  !*** ./components/ProjectTaskDashboard.tsx ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/Project/ProjectPublic.tsx":
/*!*****************************************!*\
  !*** ./pages/Project/ProjectPublic.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPublic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectLCI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProjectLCI */ \"./components/ProjectLCI.tsx\");\n/* harmony import */ var _components_ProjectTaskDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProjectTaskDashboard */ \"./components/ProjectTaskDashboard.tsx\");\n/* harmony import */ var _components_ProjectTaskDashboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ProjectTaskDashboard__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProjectPublic() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-20 absolute m-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-row flex gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"Flex bg-slate-400 \",\n                        children: \" Project Summary Card\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            \" Project LCI\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectLCI__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ProjectTaskDashboard__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"tab\"\n            }, void 0, false, {\n                fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paulocarvalho/Documents/MyProjects/regen-fund/pages/Project/ProjectPublic.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = ProjectPublic;\nvar _c;\n$RefreshReg$(_c, \"ProjectPublic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9qZWN0L1Byb2plY3RQdWJsaWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXVEO0FBQ29CO0FBSzVELFNBQVNFLGFBQWEsR0FBRztJQUN0QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMscUJBQXFCOzswQkFDbEMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O2tDQUNsQyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjtrQ0FBQyx1QkFBcUI7Ozs7OzRCQUFNO2tDQUMvRCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7OzRCQUFDLGNBQy9COzBDQUFBLDhEQUFDSiw4REFBVTs7OztvQ0FBRTswQ0FDYiw4REFBQ0MseUVBQW9COzs7O29DQUFFOzs7Ozs7NEJBQ2pCOzs7Ozs7b0JBRUY7MEJBQ04sOERBQUNFLEtBQUc7MEJBQUMsS0FFTDs7Ozs7b0JBQU07Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0FBaEJ1QkQsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Qcm9qZWN0L1Byb2plY3RQdWJsaWMudHN4Pzc1MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBQcm9qZWN0TENJICBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0TENJXCI7XG5pbXBvcnQgIFByb2plY3RUYXNrRGFzaGJvYXJkICBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0VGFza0Rhc2hib2FyZFwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UHVibGljKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgYWJzb2x1dGUgbS0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvdyBmbGV4IGdhcC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmxleCBiZy1zbGF0ZS00MDAgXCI+IFByb2plY3QgU3VtbWFyeSBDYXJkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPiBQcm9qZWN0IExDSVxuICAgICAgICA8UHJvamVjdExDSS8+XG4gICAgICAgIDxQcm9qZWN0VGFza0Rhc2hib2FyZC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHRhYlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUHJvamVjdExDSSIsIlByb2plY3RUYXNrRGFzaGJvYXJkIiwiUHJvamVjdFB1YmxpYyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Project/ProjectPublic.tsx\n"));

/***/ })

});