"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 9483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export active */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function SidebarLink({ text , Icon , active  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const urlRef = "/usr/user" + text;
    if (router.pathname == urlRef) {
        active = true;
    } else {
        active = false;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex items-center text-gray-700 font-Montserrat justify-center xl:justify-start text-l space-x-3 hover:font-bold  hover:text-regen-lighblue`,
        onClick: ()=>router.push(urlRef),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: `h-5 ${active && "font-bold text-regen-lighblue"}`,
                onClick: ()=>router.push(urlRef)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: `hidden  xl:inline ${active && "font-bold text-regen-lighblue"}`,
                children: [
                    " ",
                    text
                ]
            })
        ]
    });
}
var active;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarLink);


/***/ }),

/***/ 8694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidbarLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);
_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Sidebar() {
    const { user  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    // Menu section
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-12 ms:visible sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-8 mt-4 mb-2.5 xl:ml-24",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidbarLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    text: "Profile",
                    Icon: _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__.UserCircleIcon,
                    active: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidbarLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    text: "Project",
                    Icon: _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__.RocketLaunchIcon,
                    active: false
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidbarLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    text: "Team",
                    Icon: _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__.UsersIcon,
                    active: false
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidbarLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    text: "Community",
                    Icon: _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__.UserGroupIcon,
                    active: false
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidbarLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    text: "LCI",
                    Icon: _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__.ChartPieIcon,
                    active: false
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;