"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 2169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TitleText),
/* harmony export */   "g": () => (/* binding */ TypingText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";



const TypingText = ({ title , textStyles  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__/* .textContainer */ .AR,
        className: `font-normal text-[14px] text-secondary-white ${textStyles}`,
        children: Array.from(title).map((letter, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__/* .textVariant2 */ .lM,
                children: letter === " " ? "\xa0" : letter
            }, index))
    });
const TitleText = ({ title , textStyles  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h2, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__/* .textVariant2 */ .lM,
        initial: "hidden",
        whileInView: "show",
        className: `mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`,
        children: title
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";




const openInNewTab = (url)=>{
    window.open(url, "_blank", "noopener,noreferrer");
};
const ExploreCard = ({ id , imgUrl , title , url , index , active , handleClick  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("right", "spring", index * 0.5, 0.75),
        className: `relative ${active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`,
        onClick: ()=>handleClick(id),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: imgUrl,
                alt: "planet-04",
                className: "absolute w-full h-full object-cover rounded-[24px]"
            }),
            active !== id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]",
                children: title
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].flexCenter */ .Z.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`,
                        onClick: ()=>openInNewTab(url),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/enter.png",
                            alt: "enter",
                            className: "w-1/2 h-1/2 object-contain"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-normal text-[16px] leading-[20.16px] text-white uppercase",
                        children: "Enter the Project"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white",
                        children: title
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6301);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";





const openInNewTab = (url)=>{
    window.open(url, "_blank", "noopener,noreferrer");
};
const contactMe = ()=>{
    window.location = "mailto:larsgerigk@gmx.de";
};
const Footer = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.footer, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .footerVariants */ .FT,
        initial: "hidden",
        whileInView: "show",
        className: `${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].xPaddings */ .Z.xPaddings} py-8 relative`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "footer-gradient"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex flex-col gap-8`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between flex-wrap gap-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "font-bold md:text-[64px] text-[44px] text-white",
                                children: "Get in touch"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: "flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]",
                                onClick: ()=>contactMe(),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/email.png",
                                        alt: "email",
                                        className: "w-[24px] h-[24px] object-contain"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-normal text-[16px] text-white",
                                        children: "Contact me"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-[50px] h-[2px] bg-white opacity-10"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "font-extrabold text-[24px] text-white",
                                        children: "GERIGK TM"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-normal text-[14px] text-white opacity-50",
                                        children: "Copyright \xa9 2022 Lars Gerigk. All rights reserved."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex gap-4",
                                        children: _constants__WEBPACK_IMPORTED_MODULE_2__/* .socials.map */ .UY.map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: social.imgUrl,
                                                alt: social.name,
                                                className: "w-[24px] h-[24px] object-contain cursor-pointer",
                                                onClick: ()=>openInNewTab(social.url)
                                            }, social.name))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";



const InsightCard = ({ imgUrl , title , subtitle , index  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__/* .fadeIn */ .Ji)("up", "spring", index * 0.5, 1),
        className: "flex md:flex-row flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: imgUrl,
                alt: "planet-01",
                className: "md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 md:ml-[62px] flex flex-col max-w-[650px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "font-normal lg:text-[42px] text-[26px] text-white",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white",
                                children: subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/arrow.svg",
                            alt: "arrow",
                            className: "w-[40%] h-[40%] object-contain"
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(621);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";







const Navbar = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.nav, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__/* .navVariants */ .yB,
        initial: "hidden",
        whileInView: "show",
        className: `${_styles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].xPaddings */ .Z.xPaddings} py-8 relative`,
        id: "pgtop",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-[50%] inset-0 gradient-01"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${_styles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex justify-between gap-8`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-extrabold text-[24px] leading-[30px] text-white",
                        children: "GERIGK TM"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-extrabold text-[30px] leading-[30px] mr-[6%] text-white",
                        children: "Portfolio"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                        initial: "hidden",
                        whileHover: "show",
                        animate: "hidden",
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/menu.svg",
                                alt: "menu",
                                className: "w-[24px] h-[24px] object-contain"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/page2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__/* .textContainer */ .AR,
                                    className: "absolute font-normal text-[20px] text-white text-center uppercase ml-[10px] mt-[-2.5px]",
                                    children: Array.from("Contact").map((letter, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
                                            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__/* .textVariant2 */ .lM,
                                            children: letter === " " ? "\xa0" : letter
                                        }, index))
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div)`
  position: relative;
  max-width: 200px;
  cursor: pointer;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(621);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";







const Navbar2 = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.nav, {
        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__/* .navVariants */ .yB,
        initial: "hidden",
        whileInView: "show",
        className: `${_styles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].xPaddings */ .Z.xPaddings} py-8 relative`,
        id: "pgtop",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-[50%] inset-0 gradient-01"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${_styles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex justify-between gap-8`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-extrabold text-[24px] leading-[30px] text-white",
                        children: "GERIGK TM"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-extrabold text-[30px] leading-[30px] mr-[9%] text-white",
                        children: "Portfolio"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                        initial: "hidden",
                        whileHover: "show",
                        animate: "hidden",
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/menu.svg",
                                alt: "menu",
                                className: "w-[24px] h-[24px] object-contain"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                                    variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__/* .textContainer */ .AR,
                                    className: "absolute font-normal text-[20px] text-white text-center uppercase ml-[10px] mt-[-2.5px]",
                                    children: Array.from("Home").map((letter, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
                                            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__/* .textVariant2 */ .lM,
                                            children: letter === " " ? "\xa0" : letter
                                        }, index))
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div)`
  position: relative;
  max-width: 200px;
  cursor: pointer;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6684:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NewFeatures = ()=>/*#__PURE__*/ _jsx("div", {
        children: "New Features"
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NewFeatures)));


/***/ }),

/***/ 6415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";




const SkillCard = ({ title , index  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("up", "spring", index * 0.1, 1),
        className: "flex md:flex-row flex-col gap-4 w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full flex justify-between items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].flexCenter */ .Z.flexCenter} w-full h-[50px] rounded-[24px] glassmorphism mb-[10px]`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "absolute font-semibold lg:text-[42px] text-[15px] text-white ",
                    children: title
                })
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1477:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const StartSteps = ()=>/*#__PURE__*/ _jsx("div", {
        children: "start steps"
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (StartSteps)));


/***/ }),

/***/ 8993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "L4": () => (/* reexport safe */ _InsightCard__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "NM": () => (/* reexport safe */ _ExploreCard__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "eN": () => (/* reexport safe */ _CustomTexts__WEBPACK_IMPORTED_MODULE_2__.e),
/* harmony export */   "gw": () => (/* reexport safe */ _CustomTexts__WEBPACK_IMPORTED_MODULE_2__.g),
/* harmony export */   "lH": () => (/* reexport safe */ _Navbar2__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "rX": () => (/* reexport safe */ _SkillCard__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2787);
/* harmony import */ var _Navbar2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7651);
/* harmony import */ var _CustomTexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2169);
/* harmony import */ var _ExploreCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1575);
/* harmony import */ var _StartSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1477);
/* harmony import */ var _NewFeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6684);
/* harmony import */ var _SkillCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6415);
/* harmony import */ var _InsightCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6156);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__, _Navbar2__WEBPACK_IMPORTED_MODULE_1__, _CustomTexts__WEBPACK_IMPORTED_MODULE_2__, _ExploreCard__WEBPACK_IMPORTED_MODULE_3__, _SkillCard__WEBPACK_IMPORTED_MODULE_6__, _InsightCard__WEBPACK_IMPORTED_MODULE_7__, _Footer__WEBPACK_IMPORTED_MODULE_8__]);
([_Navbar__WEBPACK_IMPORTED_MODULE_0__, _Navbar2__WEBPACK_IMPORTED_MODULE_1__, _CustomTexts__WEBPACK_IMPORTED_MODULE_2__, _ExploreCard__WEBPACK_IMPORTED_MODULE_3__, _SkillCard__WEBPACK_IMPORTED_MODULE_6__, _InsightCard__WEBPACK_IMPORTED_MODULE_7__, _Footer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kn": () => (/* binding */ insights),
/* harmony export */   "UY": () => (/* binding */ socials),
/* harmony export */   "nb": () => (/* binding */ skills),
/* harmony export */   "nw": () => (/* binding */ exploreWorlds)
/* harmony export */ });
/* unused harmony exports startingFeatures, newFeatures */
const exploreWorlds = [
    {
        id: "world-1",
        imgUrl: "/voice.png",
        title: "The Voice Asisstant",
        url: "https://islandgame.de/"
    },
    {
        id: "world-2",
        imgUrl: "/IslandGame2.png",
        title: "Island Game",
        url: "https://islandgame.de/"
    },
    {
        id: "world-3",
        imgUrl: "/discordProject.png",
        title: "All-In-One-Bot",
        url: "https://islandgame.de/"
    },
    {
        id: "world-4",
        imgUrl: "/calender.png",
        title: "The Calender App",
        url: "https://islandgame.de/"
    },
    {
        id: "world-5",
        imgUrl: "/gym.png",
        title: "The Gym App",
        url: "https://islandgame.de/"
    }
];
const startingFeatures = (/* unused pure expression or super */ null && ([
    "Find a world that suits you and you want to enter",
    "Enter the world by reading basmalah to be safe",
    "No need to beat around the bush, just stay on the gas and have fun"
]));
const newFeatures = [
    {
        imgUrl: "/vrpano.svg",
        title: "A new world",
        subtitle: "we have the latest update with new world for you to try never mind"
    },
    {
        imgUrl: "/headset.svg",
        title: "More realistic",
        subtitle: "In the latest update, your eyes are narrow, making the world more realistic than ever"
    }
];
const insights = [
    {
        imgUrl: "/discord.png",
        title: "The music function of the All-In-One-Bot was relaunched",
        subtitle: "Crash protection, new design and including PCMVolumeControl were added. Thank you everyone for sticking with us, from the entire team here at All-In-One"
    },
    {
        imgUrl: "/island.png",
        title: "Island Game gets active on our Steam page",
        subtitle: "Head to our Steam page at 5 pm EDT tomorrow (Friday) to grab access to the preview! Hope you can join us! (But if not, stay tuned, we'll be doing more of these!)"
    },
    {
        imgUrl: "/website.png",
        title: "New Website goes online",
        subtitle: "I hope this first newsletters gets you all excited for what's to come! We appreciate your support as this newsletter is the best way to stay up to date with what im doing"
    }
];
const skills = [
    {
        imgUrl: "/discord.png",
        title: "Python"
    },
    {
        imgUrl: "/island.png",
        title: "JavaScript"
    },
    {
        imgUrl: "/website.png",
        title: "C#"
    },
    {
        imgUrl: "/discord.png",
        title: "Java"
    },
    {
        imgUrl: "/island.png",
        title: "C"
    },
    {
        imgUrl: "/website.png",
        title: "C++"
    },
    {
        imgUrl: "/discord.png",
        title: "CSS"
    },
    {
        imgUrl: "/island.png",
        title: "HTML"
    },
    {
        imgUrl: "/website.png",
        title: "React JS"
    }
];
const socials = [
    {
        name: "twitter",
        imgUrl: "/twitter.svg",
        url: "https://twitter.com/Gamsa55584280"
    },
    {
        name: "linkedin",
        imgUrl: "/linkedin.svg",
        url: "https://www.linkedin.com/in/lars-gerigk-607133259/"
    },
    {
        name: "instagram",
        imgUrl: "/instagram.svg",
        url: "https://www.instagram.com/lars_think"
    },
    {
        name: "github",
        imgUrl: "/github.svg",
        url: "https://github.com/byGamsa"
    },
    {
        name: "yotube",
        imgUrl: "/youtube.png",
        url: "https://www.youtube.com/channel/UChmN2Mv6EROSr5pRC3y5yVw"
    }
];


/***/ }),

/***/ 1468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8993);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";





const About = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].paddings */ .Z.paddings} relative z-10`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "gradient-02 z-0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .staggerContainer */ .Jm,
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: false,
                    amount: 0.25
                },
                className: `${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto ${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].flexCenter */ .Z.flexCenter} flex-col`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .TypingText */ .gw, {
                        title: "| About Me",
                        textStyles: "text-center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .fadeIn */ .Ji)("up", "tween", 0.2, 1),
                        className: "mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",
                        children: "Hello, I am Lars and I am a Developer and Game Designer. I have a huge love for design, development, voice acting and story-telling and it's communities, especially with game development at Video Game Development Association, where I often led and designed for countless projects along with other talented and amazing developers across all disciplines."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {
                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .fadeIn */ .Ji)("up", "tween", 0.3, 1),
                        src: "/arrow-down.svg",
                        alt: "arrow down",
                        className: "w-[19px] h-[28px] object-contain mt-[28px]"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";





const contactMe = ()=>{
    window.location = "mailto:larsgerigk@gmx.de";
};
const Contact = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].paddings */ .Z.paddings} relative z-10`,
        id: "skills",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .staggerContainer */ .Jm,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TypingText */ .gw, {
                    title: "| Contact",
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TitleText */ .eN, {
                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Just send me a Email"
                    }),
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto mt-[50px] flex lg:flex-row flex-col gap-20 items-center w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-[50px] flex flex-col gap-[30px] w-full h-[100%]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("up", "spring", 0.4, 1),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex items-center flex-col gap-2 glassmorphism mb-[10px] rounded-[10px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative flex w-full gap-5 justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                                className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].flexCenter */ .Z.flexCenter} w-[20%] h-[40px] rounded-[10px] glassmorphism mb-[10px] mt-[15px] ml-[30%]`,
                                                variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("up", "spring", 0.4, 1),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    id: "name",
                                                    placeholder: " Name *",
                                                    className: "w-full h-full outline-transparent placeholder-white bg-transparent flex font-semibold rounded-[10px] text-white font-light"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                                className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].flexCenter */ .Z.flexCenter} w-[35%] h-[40px] rounded-[10px] glassmorphism mb-[10px] mt-[15px] mr-[30%]`,
                                                variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("up", "spring", 0.6, 1),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    id: "email",
                                                    placeholder: " Email *",
                                                    className: "w-full h-full outline-transparent placeholder-white bg-transparent flex font-semibold rounded-[10px] text-white font-light"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].flexCenter */ .Z.flexCenter} w-[60%] h-[200px] rounded-[10px] glassmorphism mb-[10px]  mt-[15px]`,
                                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("up", "spring", 0.8, 1),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            type: "text",
                                            id: "message",
                                            placeholder: " Your Message *",
                                            className: "resize-none w-full h-full outline-transparent placeholder-white bg-transparent flex font-semibold rounded-[10px] lg:text-[20px] text-[17px] text-white font-light"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: "flex items-center h-fit py-4 px-6 glassmorphism rounded-[32px] gap-[12px] mb-[10px]",
                                            onClick: ()=>contactMe(),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/email.png",
                                                    alt: "email",
                                                    className: "w-[24px] h-[24px] object-contain"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-normal text-[16px] text-white",
                                                    children: "Send Message"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8993);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6301);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";







const Explore = ()=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("world-2");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].paddings */ .Z.paddings}`,
        id: "explore",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .staggerContainer */ .Jm,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .TypingText */ .gw, {
                    title: "| My Projects",
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .TitleText */ .eN, {
                    title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            "Choose the project you want ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                className: "md:block hidden"
                            }),
                            " to explore"
                        ]
                    }),
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",
                    children: _constants__WEBPACK_IMPORTED_MODULE_6__/* .exploreWorlds.map */ .nw.map((world, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ExploreCard */ .NM, {
                            ...world,
                            index: index,
                            active: active,
                            handleClick: setActive
                        }, world.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";




const Feedback = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].paddings */ .Z.paddings}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .staggerContainer */ .Jm,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("right", "tween", 0.2, 1),
                    className: "flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "feedback-gradient"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white",
                                    children: "Gamsa"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white",
                                    children: "Founder GerigkTM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white",
                            children: "“Gamers can feel when developers are passionate about their games. They can smell it like a dog smells fear. Don't be afraid to hold onto your unique vision: just be aware that it may not turn out exactly how you envisioned.”"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)("left", "tween", 0.2, 1),
                    className: "relative flex-1 flex justify-center items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/GameMotivation.png",
                            alt: "planet-09",
                            className: "w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .zoomIn */ .kr)(0.4, 1),
                            className: "lg:block hidden absolute -left-[10%] top-[3%]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#pgtop",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/stamp2.png",
                                    alt: "stamp2",
                                    className: "w-[155px] h-[155px] object-contain"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
"use client";

const GetStarted = ()=>/*#__PURE__*/ _jsx("section", {
        children: "Get Started Section"
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (GetStarted)));


/***/ }),

/***/ 8537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";




const Hero = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].yPaddings */ .Z.yPaddings} sm:pl-16`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .staggerContainer */ .Jm,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center items-center flex-col relative z-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
                            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .textVariant */ .wt)(1.1),
                            className: _styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].heroHeading */ .Z.heroHeading,
                            children: "Lars"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .textVariant */ .wt)(1.2),
                            className: "flex flex-row justify-center items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: _styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].heroHeading */ .Z.heroHeading,
                                children: "Gerigk"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__/* .slideIn */ .Ym)("right", "tween", 0.2, 1.5),
                    className: "relative w-full md:-mt-[20px] -mt-[12px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute w-full h-[300px] hero-gradient rounded-tl-[100px] rounded-tr-[100px] z-[0] -top-[30px]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/IslandGame.png",
                            alt: "IslandGame",
                            className: "w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[100px] rounded-tr-[100px] z-10 relative"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#explore",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/stamp2.png",
                                    alt: "stamp2",
                                    className: "sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6301);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";






const News = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].paddings */ .Z.paddings} relative z-10`,
        id: "news",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .staggerContainer */ .Jm,
            initial: "hidden",
            whileInView: "show",
            viewport: {
                once: false,
                amount: 0.25
            },
            className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex flex-col`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .TypingText */ .gw, {
                    title: "| News",
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .TitleText */ .eN, {
                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "News of current projects"
                    }),
                    textStyles: "text-center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-[50px] flex flex-col gap-[30px]",
                    children: _constants__WEBPACK_IMPORTED_MODULE_3__/* .insights.map */ .Kn.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .InsightCard */ .L4, {
                            ...item,
                            index: index + 1
                        }, `insight-${index}`))
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6301);
/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use client";






const Skills = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].paddings */ .Z.paddings} relative z-10`,
        id: "skills",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__/* .staggerContainer */ .Jm,
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: false,
                    amount: 0.25
                },
                className: `${_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"].innerWidth */ .Z.innerWidth} mx-auto flex flex-col`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .TypingText */ .gw, {
                        title: "| Skills",
                        textStyles: "text-center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .TitleText */ .eN, {
                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: "Some of my Skills"
                        }),
                        textStyles: "text-center"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[50px] flex lg-flex-row flex-col gap-10 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-[30px] w-full",
                                children: _constants__WEBPACK_IMPORTED_MODULE_3__/* .skills.slice */ .nb.slice(0, 3).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .SkillCard */ .rX, {
                                        ...item,
                                        index: index + 1
                                    }, `skill-${index}`))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-[30px] w-full",
                                children: _constants__WEBPACK_IMPORTED_MODULE_3__/* .skills.slice */ .nb.slice(3, 6).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .SkillCard */ .rX, {
                                        ...item,
                                        index: index + 1 + 3
                                    }, `skill-${index}`))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-[30px] w-full",
                                children: _constants__WEBPACK_IMPORTED_MODULE_3__/* .skills.slice */ .nb.slice(6, 9).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .SkillCard */ .rX, {
                                        ...item,
                                        index: index + 1 + 6
                                    }, `skill-${index}`))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "\xa0"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3655:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
"use client";

const World = ()=>/*#__PURE__*/ _jsx("section", {
        children: "World section"
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (World)));


/***/ }),

/***/ 5707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CL": () => (/* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Sq": () => (/* reexport safe */ _News__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "nA": () => (/* reexport safe */ _Skills__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "r3": () => (/* reexport safe */ _Explore__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "r8": () => (/* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "x2": () => (/* reexport safe */ _Feedback__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8537);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1468);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9910);
/* harmony import */ var _Explore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1221);
/* harmony import */ var _GetStarted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(659);
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1506);
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3655);
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2325);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3997);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Hero__WEBPACK_IMPORTED_MODULE_0__, _About__WEBPACK_IMPORTED_MODULE_1__, _Contact__WEBPACK_IMPORTED_MODULE_2__, _Explore__WEBPACK_IMPORTED_MODULE_3__, _Skills__WEBPACK_IMPORTED_MODULE_5__, _News__WEBPACK_IMPORTED_MODULE_7__, _Feedback__WEBPACK_IMPORTED_MODULE_8__]);
([_Hero__WEBPACK_IMPORTED_MODULE_0__, _About__WEBPACK_IMPORTED_MODULE_1__, _Contact__WEBPACK_IMPORTED_MODULE_2__, _Explore__WEBPACK_IMPORTED_MODULE_3__, _Skills__WEBPACK_IMPORTED_MODULE_5__, _News__WEBPACK_IMPORTED_MODULE_7__, _Feedback__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styles = {
    innerWidth: "2xl:max-w-[1280px] w-full",
    interWidth: "lg:w-[80%] w-[100%]",
    paddings: "sm:p-16 xs:p-8 px-6 py-12",
    yPaddings: "sm:py-16 xs:py-8 py-12",
    xPaddings: "sm:px-16 px-6",
    topPaddings: "sm:pt-16 xs:pt-8 pt-12",
    bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexEnd: "flex justify-end",
    navPadding: "pt-[98px]",
    // hero section
    heroHeading: "font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",
    heroDText: "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AR": () => (/* binding */ textContainer),
/* harmony export */   "FT": () => (/* binding */ footerVariants),
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "Jm": () => (/* binding */ staggerContainer),
/* harmony export */   "Ym": () => (/* binding */ slideIn),
/* harmony export */   "kr": () => (/* binding */ zoomIn),
/* harmony export */   "lM": () => (/* binding */ textVariant2),
/* harmony export */   "wt": () => (/* binding */ textVariant),
/* harmony export */   "yB": () => (/* binding */ navVariants)
/* harmony export */ });
/* unused harmony export planetVariants */
const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0
        }
    }
};
const slideIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const staggerContainer = (staggerChildren, delayChildren)=>({
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    });
const textVariant = (delay)=>({
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    });
const textContainer = {
    hidden: {
        opacity: 0
    },
    show: (i = 1)=>({
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: i * 0.1
            }
        })
};
const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeIn"
        }
    }
};
const fadeIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const planetVariants = (direction)=>({
        hidden: {
            x: direction === "left" ? "-100%" : "100%",
            rotate: 120
        },
        show: {
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                duration: 1.8,
                delay: 0.5
            }
        }
    });
const zoomIn = (delay, duration)=>({
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5
        }
    }
};


/***/ })

};
;