"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhyper_aff_land"] = self["webpackChunkhyper_aff_land"] || []).push([["src_css_style_scss"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg.png */ \"./src/images/bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/label.png */ \"./src/images/label.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/partners.png */ \"./src/images/partners.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 80px;\n  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);\n  z-index: 10000;\n}\n.header .logo {\n  max-width: 152px;\n}\n.header .nav a {\n  margin-left: 40px;\n  color: #ffffff;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all 0.2s ease-in;\n}\n.header .nav a:hover {\n  color: var(--primary-color);\n}\n\n.grid-wrapper {\n  z-index: -1;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  height: 100vh;\n  transition: all 0.2s ease-in-out;\n}\n\n.grid {\n  position: relative;\n  width: 200%;\n}\n\n.hero {\n  position: relative;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  min-height: 100vh;\n  overflow: hidden;\n}\n.hero__container {\n  margin-top: 80px;\n  align-items: flex-start;\n}\n.hero__block {\n  padding-top: 45px;\n  width: 50%;\n}\n.hero__title {\n  position: fixed;\n  top: 335px;\n  transform: translateY(-50%);\n  width: 50%;\n  color: #8fff00;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 90px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n.hero .gradient-bg, .hero .gradient-bg-sticky {\n  position: fixed;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  height: 30vh;\n  opacity: 0.8;\n  background: linear-gradient(0deg, #8fff00 -44.35%, rgba(143, 255, 0, 0) 104.84%);\n  z-index: 0;\n}\n.hero .gradient-bg-sticky {\n  position: absolute;\n}\n\n.benefits {\n  padding-bottom: 100vh;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 85px;\n}\n.benefits__title {\n  color: #8fff00;\n  text-align: right;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 85px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 100%;\n  text-transform: uppercase;\n}\n.benefits__subtitle {\n  margin-top: 10px;\n  color: rgba(255, 255, 255, 0.8);\n  text-align: right;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 167%;\n  text-transform: lowercase;\n}\n\n.label-wrapper,\n.label-wrapper-sticky {\n  content: \"\";\n  width: 100%;\n  height: 40px;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n}\n\n.label-wrapper-sticky {\n  position: sticky;\n}\n\n.label {\n  content: \"\";\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n\n.label-img {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0px;\n  height: 40px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: contain;\n  background-repeat: repeat-x;\n  transform: none;\n  width: 4320px;\n  animation: slide 20s linear infinite;\n}\n\n.info,\n.advantages,\n.partners,\n.collaboration,\n.contact,\n.footer {\n  position: relative;\n  z-index: 3000;\n}\n\n.info {\n  position: relative;\n  background-color: #ffffff;\n  padding: 200px 0;\n}\n.info__text {\n  color: #000;\n  text-align: center;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n}\n.info__bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 252px;\n  background: linear-gradient(0deg, rgba(143, 255, 0, 0) 0%, #8fff00 104.84%);\n  z-index: -1;\n}\n\n.advantages {\n  background-color: #000000;\n  padding-bottom: 200px;\n}\n.advantages__container {\n  display: flex;\n}\n.advantages__item {\n  position: relative;\n  padding: 89px 36px 0 36px;\n  width: 33%;\n  height: 325px;\n  border: 4px solid #8fff00;\n  margin: -4px -4px 0 0;\n  transition: all 0.2s ease-in-out;\n}\n.advantages__item:hover {\n  border-color: #ffffff;\n  background-color: #ffffff;\n}\n.advantages__item:hover .advantages__title,\n.advantages__item:hover .advantages__subtitle {\n  color: #000;\n}\n.advantages__icon {\n  position: absolute;\n  display: grid;\n  place-content: center;\n  top: -45px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background-color: #8fff00;\n}\n.advantages__icon img {\n  width: 40px;\n  height: 40px;\n}\n.advantages__title {\n  margin-bottom: 22px;\n  color: #8fff00;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 120%;\n  text-transform: uppercase;\n}\n.advantages__subtitle {\n  color: #fff;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 145.385%;\n}\n\n.partners {\n  background-color: #000000;\n}\n.partners__title {\n  margin-bottom: 50px;\n  color: #8fff00;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 100px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 131%;\n  text-transform: uppercase;\n}\n.partners__carousel {\n  content: \"\";\n  position: relative;\n  overflow: hidden;\n  height: 140px;\n  display: grid;\n  place-items: center;\n}\n.partners__images {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0px;\n  height: 100%;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-size: contain;\n  background-repeat: repeat-x;\n  transform: none;\n  width: 4466px;\n  animation: carousel 30s linear infinite;\n}\n\n.collaboration {\n  background-color: #000000;\n}\n.collaboration__container {\n  padding: 200px 0;\n  border-bottom: 4px solid #8fff00;\n}\n.collaboration__title {\n  margin-bottom: 40px;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 130%;\n  text-transform: uppercase;\n}\n.collaboration__text {\n  color: #fff;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n}\n.collaboration__button {\n  margin-top: 50px;\n  width: 260px;\n}\n\n.contact {\n  background-color: #000000;\n}\n.contact__container {\n  position: relative;\n  padding: 200px 0;\n}\n.contact__title {\n  margin-bottom: 50px;\n  color: #8fff00;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 50px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 130%;\n  text-transform: uppercase;\n}\n.contact__form,\n.contact .form {\n  display: flex;\n  align-items: flex-end;\n}\n.contact__form__button,\n.contact .form__button {\n  margin: 0 auto;\n  width: 260px;\n}\n.contact__form__block,\n.contact .form__block {\n  width: 40%;\n}\n.contact__form__block--big,\n.contact .form__block--big {\n  width: 60%;\n}\n.contact__form__input,\n.contact .form__input {\n  padding: 15px 20px;\n  color: #ffffff;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  font-family: \"Roboto Mono\", monospace;\n  display: block;\n  height: 66px;\n  background-color: transparent;\n  border: 1px solid #fff;\n  width: 100%;\n}\n.contact__form__input:active, .contact__form__input:focus,\n.contact .form__input:active,\n.contact .form__input:focus {\n  outline: none;\n  border-color: #8fff00;\n}\n.contact__form__input--short,\n.contact .form__input--short {\n  width: 70%;\n  margin-bottom: 45px;\n}\n.contact__form__input--message,\n.contact .form__input--message {\n  height: 180px;\n}\n.contact .radar {\n  width: 255px;\n  position: absolute;\n  top: 250px;\n  right: 115px;\n}\n.contact .radar__container {\n  width: 100%;\n  position: relative;\n}\n.contact .radar__circle, .contact .radar__base, .contact .radar__half {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.contact .radar__circle {\n  animation: rotation 2s linear infinite;\n}\n.contact .radar__half {\n  animation: reverse-rotation 10s linear infinite;\n}\n\n.footer {\n  background-color: #000000;\n  padding: 0px 0 70px 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n}\n.footer .logo {\n  margin-bottom: 27px;\n}\n\n@media (max-width: 1000px) {\n  .grid-wrapper {\n    display: none;\n  }\n}\n@media (max-width: 800px) {\n  .container {\n    padding: 20px;\n  }\n  .title {\n    font-size: 60px;\n  }\n}\n@media (max-width: 500px) {\n  .container {\n    padding: 20px;\n  }\n  .title {\n    font-size: 44px;\n  }\n  .logo {\n    max-width: 200px;\n  }\n  .label-wrapper {\n    height: 64px;\n  }\n  .label-img {\n    bottom: 0;\n    left: 0;\n    height: 32px;\n    transform: none;\n    width: 6000px;\n    animation: slide 20s linear infinite;\n  }\n  .subtitle {\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 20px;\n    width: 80%;\n  }\n}\n@keyframes slide {\n  0% {\n    transform: translate(0);\n  }\n  100% {\n    transform: translate(-2160px);\n  }\n}\n@keyframes carousel {\n  0% {\n    transform: translate(0);\n  }\n  100% {\n    transform: translate(-2783px);\n  }\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes reverse-rotation {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hyper-aff-land/./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hyper-aff-land/./src/css/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hyper-aff-land/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/bg.png":
/*!***************************!*\
  !*** ./src/images/bg.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e98d567118c52bac1b4b.png\";\n\n//# sourceURL=webpack://hyper-aff-land/./src/images/bg.png?");

/***/ }),

/***/ "./src/images/label.png":
/*!******************************!*\
  !*** ./src/images/label.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f31ec1f03f8d8d2d869.png\";\n\n//# sourceURL=webpack://hyper-aff-land/./src/images/label.png?");

/***/ }),

/***/ "./src/images/partners.png":
/*!*********************************!*\
  !*** ./src/images/partners.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c7730bd38b33c3412a1.png\";\n\n//# sourceURL=webpack://hyper-aff-land/./src/images/partners.png?");

/***/ })

}]);