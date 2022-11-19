"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 8163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
const AuthContextProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: projectUsers , 1: setProjectUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: Projects , 1: setProjects  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8, (user)=>{
            // Confirms Login
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photo: user.photoURL
                });
                addProjectUserToFirebase(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return ()=>unsubscribe();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getProjectUsers = async ()=>{
            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, "ProjectUsers"));
            setProjectUsers(querySnapshot.docs.map((doc)=>{
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                };
            }));
        };
        getProjectUsers();
    }, []);
    const addProjectUserToFirebase = async (user)=>{
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, "ProjectUsers", user.uid);
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);
        if (!docSnap?.exists()) {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, "ProjectUsers", user.uid), {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                photoURL: user.photoURL
            });
        }
    };
    const googleSignin = async ()=>{
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8, _config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .provider */ .Ap);
    };
    const signup = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8, email, password);
    };
    const login = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8, email, password);
    };
    const logout = async ()=>{
        setUser(null);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            login,
            signup,
            logout,
            googleSignin,
            addProjectUserToFirebase
        },
        children: loading ? null : children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;