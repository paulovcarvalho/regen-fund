"use strict";
exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 8010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);



 // https://heroicons.com/
function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-regen-blue shadow",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "font-Cormorant text-white font-semibold text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap",
                                    href: "#pablo",
                                    children: "Regenerative Fund"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "cursor-pointer text-xl text-white leading-none rounded block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Bars3Icon, {
                                    className: "text-white justify-center w-10 h-10 mb-5 hover:bg-regen-blue hover:rounded-full"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
                        id: "example-navbar-warning",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none mr-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "#paulo",
                                            children: "Invested In"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "#paulo",
                                            children: "Regenerative Projects"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "#paulo",
                                            children: "Artists Collective"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "hoverAnimation text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "#paulo",
                                            children: "About Us"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex flex-col lg:flex-row list-none lg:ml-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/auth/login/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: " shadow-lg bg-regen-seablue shadow-black text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                            type: "button",
                                            children: "Login"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;