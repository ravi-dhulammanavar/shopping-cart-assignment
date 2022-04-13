/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcode_exercise"] = self["webpackChunkcode_exercise"] || []).push([["src_cart_js-src_common_scss"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveCart\": () => (/* binding */ saveCart),\n/* harmony export */   \"syncCartCount\": () => (/* binding */ syncCartCount)\n/* harmony export */ });\n/* harmony import */ var _drawer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.scss */ \"./src/drawer.scss\");\n/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.js */ \"./src/drawer.js\");\n/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drawer_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconsole.log('cart js loaded');\n\nasync function apiCall(endPoint) {\n  try {\n    let response = await fetch(`http://localhost:5001/${endPoint}`);\n\n    if (response.ok) {\n      let data = await response.json();\n      return data;\n    } else {\n      throw new Error('Some this went wrong!');\n    }\n  } catch (e) {\n    console.log('Error Within Catch method');\n    console.log(e);\n  }\n}\n\nfunction saveCart(e) {\n  try {\n    var productSKU = e.target.attributes.datasku.nodeValue;\n    var productPrice = e.target.attributes.price.nodeValue;\n    var newItem = {\n      pid: productSKU,\n      qty: 1,\n      price: productPrice,\n      total: productPrice\n    };\n    var cartList = JSON.parse(localStorage.getItem('itemsInCart')) || [];\n    var cartCount = JSON.parse(localStorage.getItem('cartCount'));\n    var item = cartList.find(item => item.pid === productSKU);\n\n    if (item) {\n      item.qty += 1;\n      item.total = item.qty * item.price;\n    } else {\n      cartCount += 1;\n      cartList.push(newItem);\n    }\n\n    localStorage.setItem('itemsInCart', JSON.stringify(cartList));\n    localStorage.setItem('cartCount', cartCount);\n    syncCartCount();\n  } catch {}\n}\nfunction syncCartCount() {\n  var cartCount = localStorage.getItem('cartCount');\n  var cartElem = document.querySelector('.cart-count');\n  var cartItems = JSON.parse(localStorage.getItem('itemsInCart'));\n  var filteredData = cartItems.filter(function (product) {\n    return product.qty != 0;\n  }); // console.log(filteredData.length);\n\n  cartElem.innerText = filteredData.length + ' Items';\n  var cartCountElem = document.querySelector('.drawer__title');\n  cartCountElem.innerText = 'MY CART ' + filteredData.length + ' Items';\n\n  if (filteredData.length <= 0) {\n    var drawer = document.querySelector('.drawer__content');\n    drawer.setAttribute('class', 'drawer__content empty');\n    var emptyCart = document.createElement('h5');\n    emptyCart.setAttribute('class', 'empty-h5');\n    emptyCart.innerText = 'No Items In your Cart';\n    drawer.appendChild(emptyCart);\n    document.querySelector('.btn-checkout').innerText = 'Start Shoping';\n  } else {\n    var drawer = document.querySelector('.drawer__content');\n    drawer.setAttribute('class', 'drawer__content');\n  }\n}\nsyncCartCount();\n\nfunction getCartItems() {\n  document.querySelector('.cart-list').innerHTML = '';\n  var cartItems = JSON.parse(localStorage.getItem('itemsInCart'));\n\n  for (const item of cartItems) {\n    if (item.qty >= 1) {\n      displayCartItem(item);\n    }\n  }\n}\n\nvar cartBTN = document.querySelector('.cart-btn');\ncartBTN.addEventListener('click', function () {\n  // console.log('clicked');\n  getCartItems();\n});\n\nasync function displayCartItem(item) {\n  var products = await apiCall('products');\n  var filteredData = products.filter(function (product) {\n    return product.sku === item.pid;\n  }); // console.log(item);\n  // console.log(filteredData[0].sku);\n\n  var singleproduct = filteredData[0];\n  var cartDiv = document.querySelector('.cart-list');\n  var cartItemlist = document.createElement('div');\n  cartItemlist.setAttribute('class', 'cart-item');\n  cartDiv.appendChild(cartItemlist);\n  var cartImageDiv = document.createElement('div');\n  cartImageDiv.setAttribute('class', 'cart-image');\n  cartItemlist.appendChild(cartImageDiv);\n  var cartImage = document.createElement('img');\n  const myArray = singleproduct.imageURL.split('/');\n  let imageName = myArray.slice(-1)[0];\n  let imageDir = myArray[4];\n\n  var img = __webpack_require__(\"./static/images/products sync recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${imageDir}/${imageName}`);\n\n  cartImage.setAttribute('src', img);\n  cartImageDiv.appendChild(cartImage);\n  var cartDescDiv = document.createElement('div');\n  cartDescDiv.setAttribute('class', 'cart-pro-desc');\n  cartItemlist.appendChild(cartDescDiv);\n  var cartTitle = document.createElement('h3');\n  cartTitle.innerText = singleproduct.name;\n  cartDescDiv.appendChild(cartTitle);\n  var catSecondDiv = document.createElement('div');\n  catSecondDiv.setAttribute('class', 'second-inner');\n  cartDescDiv.appendChild(catSecondDiv);\n  var buttonGroup = document.createElement('div');\n  buttonGroup.setAttribute('class', 'button-group');\n  catSecondDiv.appendChild(buttonGroup);\n  var decreamentBtn = document.createElement('button');\n  decreamentBtn.setAttribute('class', 'decrease');\n  decreamentBtn.setAttribute('datasku', singleproduct.sku);\n  decreamentBtn.innerText = '-';\n  buttonGroup.appendChild(decreamentBtn);\n  decreamentBtn.addEventListener('click', decreaseCount);\n  var cartInput = document.createElement('input');\n  cartInput.setAttribute('class', 'cart-input');\n  cartInput.setAttribute('value', item.qty);\n  buttonGroup.appendChild(cartInput);\n  var increamentBtn = document.createElement('button');\n  increamentBtn.setAttribute('class', 'increase');\n  increamentBtn.setAttribute('datasku', singleproduct.sku);\n  increamentBtn.innerText = '+';\n  buttonGroup.appendChild(increamentBtn);\n  increamentBtn.addEventListener('click', increaseCount);\n  var multipleDiv = document.createElement('div');\n  multipleDiv.setAttribute('class', 'calculate');\n  catSecondDiv.appendChild(multipleDiv);\n  var multipleP = document.createElement('p');\n  multipleP.innerText = '× Rs.' + item.price;\n  multipleDiv.appendChild(multipleP);\n  var totalDiv = document.createElement('div');\n  totalDiv.setAttribute('class', 'single-tota-price');\n  catSecondDiv.appendChild(totalDiv);\n  var totalP = document.createElement('p');\n  totalP.innerText = 'Rs.' + item.total;\n  totalDiv.appendChild(totalP);\n}\n\nwindow.addEventListener('DOMContentLoaded', getCartItems);\n\nfunction increaseCount(e) {\n  // console.log(\"increase\");\n  var productSKU = e.target.attributes.datasku.nodeValue; // console.log(productSKU);\n\n  var cartList = JSON.parse(localStorage.getItem('itemsInCart')) || [];\n  var cartCount = JSON.parse(localStorage.getItem('cartCount'));\n  var item = cartList.find(item => item.pid === productSKU);\n\n  if (item) {\n    // console.log(item);\n    item.qty += 1;\n    item.total = item.qty * item.price;\n    cartCount += 1;\n  } else {}\n\n  localStorage.setItem('itemsInCart', JSON.stringify(cartList));\n  syncCartCount();\n  getCartItems();\n}\n\nfunction decreaseCount(e) {\n  var productSKU = e.target.attributes.datasku.nodeValue; // console.log(\"decrease\");\n\n  var cartList = JSON.parse(localStorage.getItem('itemsInCart')) || [];\n  var cartCount = JSON.parse(localStorage.getItem('cartCount'));\n  var item = cartList.find(item => item.pid === productSKU);\n\n  if (item) {\n    // console.log(item);\n    item.qty -= 1;\n    item.total = item.qty * item.price;\n    cartCount += 1;\n  } else {}\n\n  localStorage.setItem('itemsInCart', JSON.stringify(cartList));\n  syncCartCount();\n  getCartItems();\n}\n\nfunction calculateTotal() {\n  var cartItems = JSON.parse(localStorage.getItem('itemsInCart'));\n  var total = 0;\n  var filteredData = cartItems.map(item => item.total + total);\n\n  const reducer = (accumulator, curr) => accumulator + curr;\n\n  console.log(filteredData.reduce(reducer)); // console.log(filteredData);\n}\n\ncalculateTotal();\n\n//# sourceURL=webpack://code-exercise/./src/cart.js?");

/***/ }),

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/***/ (() => {

eval("var drawer = function () {\n  /**\n  * Element.closest() polyfill\n  * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill\n  */\n  if (!Element.prototype.closest) {\n    if (!Element.prototype.matches) {\n      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;\n    }\n\n    Element.prototype.closest = function (s) {\n      var el = this;\n      var ancestor = this;\n      if (!document.documentElement.contains(el)) return null;\n\n      do {\n        if (ancestor.matches(s)) return ancestor;\n        ancestor = ancestor.parentElement;\n      } while (ancestor !== null);\n\n      return null;\n    };\n  } //\n  // Settings\n  //\n\n\n  var settings = {\n    speedOpen: 50,\n    speedClose: 350,\n    activeClass: 'is-active',\n    visibleClass: 'is-visible',\n    selectorTarget: '[data-drawer-target]',\n    selectorTrigger: '[data-drawer-trigger]',\n    selectorClose: '[data-drawer-close]'\n  }; //\n  // Methods\n  //\n  // Toggle accessibility\n\n  var toggleccessibility = function (event) {\n    if (event.getAttribute('aria-expanded') === 'true') {\n      event.setAttribute('aria-expanded', false);\n    } else {\n      event.setAttribute('aria-expanded', true);\n    }\n  }; // Open Drawer\n\n\n  var openDrawer = function (trigger) {\n    // Find target\n    var target = document.getElementById(trigger.getAttribute('aria-controls')); // Make it active\n\n    target.classList.add(settings.activeClass); // Make body overflow hidden so it's not scrollable\n\n    document.documentElement.style.overflow = 'hidden'; // Toggle accessibility\n\n    toggleccessibility(trigger); // Make it visible\n\n    setTimeout(function () {\n      target.classList.add(settings.visibleClass);\n    }, settings.speedOpen);\n  }; // Close Drawer\n\n\n  var closeDrawer = function (event) {\n    // Find target\n    var closestParent = event.closest(settings.selectorTarget),\n        childrenTrigger = document.querySelector('[aria-controls=\"' + closestParent.id + '\"'); // Make it not visible\n\n    closestParent.classList.remove(settings.visibleClass); // Remove body overflow hidden\n\n    document.documentElement.style.overflow = ''; // Toggle accessibility\n\n    toggleccessibility(childrenTrigger); // Make it not active\n\n    setTimeout(function () {\n      closestParent.classList.remove(settings.activeClass);\n    }, settings.speedClose);\n  }; // Click Handler\n\n\n  var clickHandler = function (event) {\n    // Find elements\n    var toggle = event.target,\n        open = toggle.closest(settings.selectorTrigger),\n        close = toggle.closest(settings.selectorClose); // Open drawer when the open button is clicked\n\n    if (open) {\n      openDrawer(open);\n    } // Close drawer when the close button (or overlay area) is clicked\n\n\n    if (close) {\n      closeDrawer(close);\n    } // Prevent default link behavior\n\n\n    if (open || close) {\n      event.preventDefault();\n    }\n  }; // Keydown Handler, handle Escape button\n\n\n  var keydownHandler = function (event) {\n    if (event.key === 'Escape' || event.keyCode === 27) {\n      // Find all possible drawers\n      var drawers = document.querySelectorAll(settings.selectorTarget),\n          i; // Find active drawers and close them when escape is clicked\n\n      for (i = 0; i < drawers.length; ++i) {\n        if (drawers[i].classList.contains(settings.activeClass)) {\n          closeDrawer(drawers[i]);\n        }\n      }\n    }\n  }; //\n  // Inits & Event Listeners\n  //\n\n\n  document.addEventListener('click', clickHandler, false);\n  document.addEventListener('keydown', keydownHandler, false);\n};\n\ndrawer();\n\n//# sourceURL=webpack://code-exercise/./src/drawer.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgb(255, 255, 255);\\n}\\nbody .slick-prev:before,\\nbody .slick-next:before {\\n  font-family: \\\"slick\\\";\\n  font-size: 26px;\\n  line-height: 1;\\n  opacity: 0.75;\\n  color: black;\\n}\\nbody .slick-next {\\n  right: 0px;\\n  z-index: 99;\\n}\\nbody .slick-prev {\\n  left: 0px;\\n  z-index: 99;\\n}\\nbody div#banners {\\n  margin-top: 10px;\\n}\\nbody #main-header {\\n  box-shadow: 2px 2px 11px rgb(181, 181, 181);\\n}\\nbody div.main-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\nbody div.main-header nav.menu a {\\n  font-size: 16px;\\n  text-decoration: none;\\n  color: rgb(58, 58, 58);\\n  margin-right: 20px;\\n}\\nbody div.main-header nav a {\\n  font-size: 14px;\\n  text-decoration: none;\\n  color: rgb(58, 58, 58);\\n  margin-right: 3px;\\n}\\nbody div.main-header button.cart-btn i {\\n  color: #d00155;\\n  font-size: 28px;\\n}\\nbody div.main-header button.cart-btn {\\n  background: #d0d0d0;\\n  border: 1px solid #b0b0b0;\\n  padding: 10px;\\n}\\nbody footer#main-footer {\\n  background: #e6e6e6;\\n  padding: 15px;\\n}\\nbody p.copyright {\\n  margin: 0px;\\n  font-size: 13px;\\n}\\nbody .login-section {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\nbody form#login-form label,\\nbody form#login-form input {\\n  display: block;\\n}\\nbody .form-input {\\n  outline: 0;\\n  border-width: 0 0 2px;\\n  border-color: rgb(0, 0, 0);\\n  width: 300px;\\n}\\nbody .form-group {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column-reverse;\\n  margin: 41px 0px;\\n}\\nbody .label-helper {\\n  position: absolute;\\n  bottom: 95%;\\n}\\nbody .form-input:focus + .label-helper {\\n  color: rgb(80, 218, 227) !important;\\n  bottom: 95%;\\n  font-family: arial;\\n  font-size: 14px;\\n  line-height: 1;\\n  opacity: 1;\\n  padding: 4px;\\n}\\nbody .form-input:focus {\\n  border-color: rgb(80, 218, 227) !important;\\n  width: 300px;\\n}\\nbody .login-section {\\n  padding: 65px 1px;\\n}\\nbody .btn-primary {\\n  background: #d00156;\\n  border: 10px;\\n  width: 100%;\\n  padding: 10px;\\n}\\nbody .cart-image img {\\n  width: 84px;\\n}\\nbody .cart-item {\\n  display: flex;\\n  background: white;\\n  padding: 9px;\\n  margin-top: 10px;\\n}\\nbody input.cart-input {\\n  width: 45px;\\n  text-align: center;\\n  border: 0px;\\n}\\nbody .cart-pro-desc {\\n  margin-left: 17px;\\n}\\nbody .second-inner {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: baseline;\\n}\\nbody .drawer__content {\\n  background: #e7e7e7;\\n}\\nbody .button-group button {\\n  background: #d00155;\\n  border: 1px solid #fff;\\n  border-radius: 19px;\\n  padding: 0px 10px;\\n  font-size: 22px;\\n  color: #fff;\\n}\\nbody .cart-pro-desc h3 {\\n  font-size: 20px;\\n}\\nbody .drawer__content.empty {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nbody .drawer__content.empty .empty-h5 {\\n  display: block;\\n}\\nbody .drawer__content .empty-h5 {\\n  display: none;\\n}\\nbody .cart-pro-desc {\\n  width: 76%;\\n}\\nbody button.btn.btn-checkout {\\n  padding: 10px;\\n  background: #d00156;\\n  width: 100%;\\n  font-size: 19px;\\n  color: #fff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://code-exercise/./src/common.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/drawer.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/drawer.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%0A%3Csvg width=%2715px%27 height=%2716px%27 viewBox=%270 0 15 16%27 version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27%3E%3Cg id=%27Page-1%27 stroke=%27none%27 stroke-width=%271%27 fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg id=%272.-Menu%27 transform=%27translate%28-15.000000, -13.000000%29%27 stroke=%27%23000000%27%3E%3Cg id=%27Group%27 transform=%27translate%2815.000000, 13.521000%29%27%3E%3Cpath d=%27M0,0.479000129 L15,14.2971819%27 id=%27Path-3%27%3E%3C/path%3E%3Cpath d=%27M0,14.7761821 L15,-1.24344979e-14%27 id=%27Path-3%27%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ \"data:image/svg+xml,%0A%3Csvg width=%2715px%27 height=%2716px%27 viewBox=%270 0 15 16%27 version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27%3E%3Cg id=%27Page-1%27 stroke=%27none%27 stroke-width=%271%27 fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg id=%272.-Menu%27 transform=%27translate%28-15.000000, -13.000000%29%27 stroke=%27%23000000%27%3E%3Cg id=%27Group%27 transform=%27translate%2815.000000, 13.521000%29%27%3E%3Cpath d=%27M0,0.479000129 L15,14.2971819%27 id=%27Path-3%27%3E%3C/path%3E%3Cpath d=%27M0,14.7761821 L15,-1.24344979e-14%27 id=%27Path-3%27%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".drawer__header {\\n  padding: 1.5rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid #ddd;\\n}\\n\\n.drawer__close {\\n  margin: 0;\\n  padding: 0;\\n  border: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n.drawer__wrapper {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  height: 100%;\\n  width: 100%;\\n  max-width: 500px;\\n  z-index: 9999;\\n  overflow: auto;\\n  transition: transform 0.3s;\\n  will-change: transform;\\n  background-color: #fff;\\n  display: flex;\\n  flex-direction: column;\\n  -webkit-transform: translateX(103%);\\n  transform: translateX(103%);\\n  /* extra 3% because of box-shadow */\\n  -webkit-overflow-scrolling: touch;\\n  /* enables momentum scrolling in iOS overflow elements */\\n  box-shadow: 0 2px 6px #777;\\n}\\n\\n.drawer__content {\\n  position: relative;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n  height: 100%;\\n  flex-grow: 1;\\n  padding: 1.5rem;\\n}\\n\\n.drawer.is-active {\\n  display: block;\\n}\\n\\n.drawer.is-visible .drawer__wrapper {\\n  -webkit-transform: translateX(0);\\n  transform: translateX(0);\\n}\\n\\n.drawer.is-visible .drawer__overlay {\\n  opacity: 0.5;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://code-exercise/./src/drawer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/common.scss":
/*!*************************!*\
  !*** ./src/common.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./common.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://code-exercise/./src/common.scss?");

/***/ }),

/***/ "./src/drawer.scss":
/*!*************************!*\
  !*** ./src/drawer.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drawer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./drawer.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/drawer.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drawer_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drawer_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drawer_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_drawer_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://code-exercise/./src/drawer.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://code-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./static/images/products sync recursive ^\\.\\/.*\\/.*$":
/*!***************************************************!*\
  !*** ./static/images/products/ sync ^\.\/.*\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./baby/baby-dove.jpg\": \"./static/images/products/baby/baby-dove.jpg\",\n\t\"./baby/cerelac.jpg\": \"./static/images/products/baby/cerelac.jpg\",\n\t\"./baby/mamy.jpg\": \"./static/images/products/baby/mamy.jpg\",\n\t\"./baby/pampers.jpg\": \"./static/images/products/baby/pampers.jpg\",\n\t\"./baby/red-wipes.jpg\": \"./static/images/products/baby/red-wipes.jpg\",\n\t\"./baby/shampoo.jpg\": \"./static/images/products/baby/shampoo.jpg\",\n\t\"./baby/wipes.jpg\": \"./static/images/products/baby/wipes.jpg\",\n\t\"./bakery-cakes-dairy/bread.jpg\": \"./static/images/products/bakery-cakes-dairy/bread.jpg\",\n\t\"./bakery-cakes-dairy/paneer.jpg\": \"./static/images/products/bakery-cakes-dairy/paneer.jpg\",\n\t\"./bakery-cakes-dairy/yogurt-blue.jpg\": \"./static/images/products/bakery-cakes-dairy/yogurt-blue.jpg\",\n\t\"./bakery-cakes-dairy/yogurt-red.jpg\": \"./static/images/products/bakery-cakes-dairy/yogurt-red.jpg\",\n\t\"./beauty-hygiene/closeup.jpg\": \"./static/images/products/beauty-hygiene/closeup.jpg\",\n\t\"./beauty-hygiene/dove.jpg\": \"./static/images/products/beauty-hygiene/dove.jpg\",\n\t\"./beauty-hygiene/listerine.jpg\": \"./static/images/products/beauty-hygiene/listerine.jpg\",\n\t\"./beauty-hygiene/shampoo.jpg\": \"./static/images/products/beauty-hygiene/shampoo.jpg\",\n\t\"./beauty-hygiene/tissues.jpg\": \"./static/images/products/beauty-hygiene/tissues.jpg\",\n\t\"./beverages/bournvita.jpg\": \"./static/images/products/beverages/bournvita.jpg\",\n\t\"./beverages/coke.jpg\": \"./static/images/products/beverages/coke.jpg\",\n\t\"./beverages/red-label.jpg\": \"./static/images/products/beverages/red-label.jpg\",\n\t\"./beverages/tata-tea.jpg\": \"./static/images/products/beverages/tata-tea.jpg\",\n\t\"./fruit-n-veg/apple.jpg\": \"./static/images/products/fruit-n-veg/apple.jpg\",\n\t\"./fruit-n-veg/capsicum-green.jpg\": \"./static/images/products/fruit-n-veg/capsicum-green.jpg\",\n\t\"./fruit-n-veg/kiwi-green.jpg\": \"./static/images/products/fruit-n-veg/kiwi-green.jpg\",\n\t\"./fruit-n-veg/pomegrante.jpg\": \"./static/images/products/fruit-n-veg/pomegrante.jpg\",\n\t\"./fruit-n-veg/tomato.jpg\": \"./static/images/products/fruit-n-veg/tomato.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./static/images/products sync recursive ^\\\\.\\\\/.*\\\\/.*$\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/_sync_^\\.\\/.*\\/.*$?");

/***/ }),

/***/ "data:image/svg+xml,%0A%3Csvg width=%2715px%27 height=%2716px%27 viewBox=%270 0 15 16%27 version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27%3E%3Cg id=%27Page-1%27 stroke=%27none%27 stroke-width=%271%27 fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg id=%272.-Menu%27 transform=%27translate%28-15.000000, -13.000000%29%27 stroke=%27%23000000%27%3E%3Cg id=%27Group%27 transform=%27translate%2815.000000, 13.521000%29%27%3E%3Cpath d=%27M0,0.479000129 L15,14.2971819%27 id=%27Path-3%27%3E%3C/path%3E%3Cpath d=%27M0,14.7761821 L15,-1.24344979e-14%27 id=%27Path-3%27%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%0A%3Csvg width=%2715px%27 height=%2716px%27 viewBox=%270 0 15 16%27 version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27%3E%3Cg id=%27Page-1%27 stroke=%27none%27 stroke-width=%271%27 fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg id=%272.-Menu%27 transform=%27translate%28-15.000000, -13.000000%29%27 stroke=%27%23000000%27%3E%3Cg id=%27Group%27 transform=%27translate%2815.000000, 13.521000%29%27%3E%3Cpath d=%27M0,0.479000129 L15,14.2971819%27 id=%27Path-3%27%3E%3C/path%3E%3Cpath d=%27M0,14.7761821 L15,-1.24344979e-14%27 id=%27Path-3%27%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%0A%3Csvg width=%2715px%27 height=%2716px%27 viewBox=%270 0 15 16%27 version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27%3E%3Cg id=%27Page-1%27 stroke=%27none%27 stroke-width=%271%27 fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg id=%272.-Menu%27 transform=%27translate%28-15.000000, -13.000000%29%27 stroke=%27%23000000%27%3E%3Cg id=%27Group%27 transform=%27translate%2815.000000, 13.521000%29%27%3E%3Cpath d=%27M0,0.479000129 L15,14.2971819%27 id=%27Path-3%27%3E%3C/path%3E%3Cpath d=%27M0,14.7761821 L15,-1.24344979e-14%27 id=%27Path-3%27%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://code-exercise/data:image/svg+xml,%250A%253Csvg_width=%252715px%2527_height=%252716px%2527_viewBox=%25270_0_15_16%2527_version=%25271.1%2527_xmlns=%2527http://www.w3.org/2000/svg%2527_xmlns:xlink=%2527http://www.w3.org/1999/xlink%2527%253E%253Cg_id=%2527Page-1%2527_stroke=%2527none%2527_stroke-width=%25271%2527_fill=%2527none%2527_fill-rule=%2527evenodd%2527%253E%253Cg_id=%25272.-Menu%2527_transform=%2527translate%2528-15.000000,_-13.000000%2529%2527_stroke=%2527%2523000000%2527%253E%253Cg_id=%2527Group%2527_transform=%2527translate%252815.000000,_13.521000%2529%2527%253E%253Cpath_d=%2527M0,0.479000129_L15,14.2971819%2527_id=%2527Path-3%2527%253E%253C/path%253E%253Cpath_d=%2527M0,14.7761821_L15,-1.24344979e-14%2527_id=%2527Path-3%2527%253E%253C/path%253E%253C/g%253E%253C/g%253E%253C/g%253E%253C/svg%253E?");

/***/ }),

/***/ "./static/images/products/baby/baby-dove.jpg":
/*!***************************************************!*\
  !*** ./static/images/products/baby/baby-dove.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c82180890053cf3ebb8f.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/baby-dove.jpg?");

/***/ }),

/***/ "./static/images/products/baby/cerelac.jpg":
/*!*************************************************!*\
  !*** ./static/images/products/baby/cerelac.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"090f9591a72d8018c10a.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/cerelac.jpg?");

/***/ }),

/***/ "./static/images/products/baby/mamy.jpg":
/*!**********************************************!*\
  !*** ./static/images/products/baby/mamy.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bf737cc5d5a90b7ec160.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/mamy.jpg?");

/***/ }),

/***/ "./static/images/products/baby/pampers.jpg":
/*!*************************************************!*\
  !*** ./static/images/products/baby/pampers.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"35275a6d4619b25771b5.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/pampers.jpg?");

/***/ }),

/***/ "./static/images/products/baby/red-wipes.jpg":
/*!***************************************************!*\
  !*** ./static/images/products/baby/red-wipes.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2658fe9937524e1254e5.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/red-wipes.jpg?");

/***/ }),

/***/ "./static/images/products/baby/shampoo.jpg":
/*!*************************************************!*\
  !*** ./static/images/products/baby/shampoo.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"32eb8fbd3b7492cd70c0.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/shampoo.jpg?");

/***/ }),

/***/ "./static/images/products/baby/wipes.jpg":
/*!***********************************************!*\
  !*** ./static/images/products/baby/wipes.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"78e7f35834cd78837441.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/baby/wipes.jpg?");

/***/ }),

/***/ "./static/images/products/bakery-cakes-dairy/bread.jpg":
/*!*************************************************************!*\
  !*** ./static/images/products/bakery-cakes-dairy/bread.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a28687be2f7a8c6892d5.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/bakery-cakes-dairy/bread.jpg?");

/***/ }),

/***/ "./static/images/products/bakery-cakes-dairy/paneer.jpg":
/*!**************************************************************!*\
  !*** ./static/images/products/bakery-cakes-dairy/paneer.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d5604f006833e7f3126a.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/bakery-cakes-dairy/paneer.jpg?");

/***/ }),

/***/ "./static/images/products/bakery-cakes-dairy/yogurt-blue.jpg":
/*!*******************************************************************!*\
  !*** ./static/images/products/bakery-cakes-dairy/yogurt-blue.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c7beea983fc0f2ccb898.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/bakery-cakes-dairy/yogurt-blue.jpg?");

/***/ }),

/***/ "./static/images/products/bakery-cakes-dairy/yogurt-red.jpg":
/*!******************************************************************!*\
  !*** ./static/images/products/bakery-cakes-dairy/yogurt-red.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"87ac9f92e4b2c0b253c2.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/bakery-cakes-dairy/yogurt-red.jpg?");

/***/ }),

/***/ "./static/images/products/beauty-hygiene/closeup.jpg":
/*!***********************************************************!*\
  !*** ./static/images/products/beauty-hygiene/closeup.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a6727975332f768fc018.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beauty-hygiene/closeup.jpg?");

/***/ }),

/***/ "./static/images/products/beauty-hygiene/dove.jpg":
/*!********************************************************!*\
  !*** ./static/images/products/beauty-hygiene/dove.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4070f144456eadb407ee.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beauty-hygiene/dove.jpg?");

/***/ }),

/***/ "./static/images/products/beauty-hygiene/listerine.jpg":
/*!*************************************************************!*\
  !*** ./static/images/products/beauty-hygiene/listerine.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c95b00f93f7947634216.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beauty-hygiene/listerine.jpg?");

/***/ }),

/***/ "./static/images/products/beauty-hygiene/shampoo.jpg":
/*!***********************************************************!*\
  !*** ./static/images/products/beauty-hygiene/shampoo.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2160960e2f3f580effd4.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beauty-hygiene/shampoo.jpg?");

/***/ }),

/***/ "./static/images/products/beauty-hygiene/tissues.jpg":
/*!***********************************************************!*\
  !*** ./static/images/products/beauty-hygiene/tissues.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"503269a7407980dc0f92.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beauty-hygiene/tissues.jpg?");

/***/ }),

/***/ "./static/images/products/beverages/bournvita.jpg":
/*!********************************************************!*\
  !*** ./static/images/products/beverages/bournvita.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ed858c0243d033dc48f9.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beverages/bournvita.jpg?");

/***/ }),

/***/ "./static/images/products/beverages/coke.jpg":
/*!***************************************************!*\
  !*** ./static/images/products/beverages/coke.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2c914bd5701eefe04823.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beverages/coke.jpg?");

/***/ }),

/***/ "./static/images/products/beverages/red-label.jpg":
/*!********************************************************!*\
  !*** ./static/images/products/beverages/red-label.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9ced0206efe1100394c8.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beverages/red-label.jpg?");

/***/ }),

/***/ "./static/images/products/beverages/tata-tea.jpg":
/*!*******************************************************!*\
  !*** ./static/images/products/beverages/tata-tea.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4f0878cae309e247c78e.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/beverages/tata-tea.jpg?");

/***/ }),

/***/ "./static/images/products/fruit-n-veg/apple.jpg":
/*!******************************************************!*\
  !*** ./static/images/products/fruit-n-veg/apple.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7d8737faabb19a3391b9.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/fruit-n-veg/apple.jpg?");

/***/ }),

/***/ "./static/images/products/fruit-n-veg/capsicum-green.jpg":
/*!***************************************************************!*\
  !*** ./static/images/products/fruit-n-veg/capsicum-green.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8221474bed2e03f115a8.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/fruit-n-veg/capsicum-green.jpg?");

/***/ }),

/***/ "./static/images/products/fruit-n-veg/kiwi-green.jpg":
/*!***********************************************************!*\
  !*** ./static/images/products/fruit-n-veg/kiwi-green.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ae8a7f1700b4f4431759.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/fruit-n-veg/kiwi-green.jpg?");

/***/ }),

/***/ "./static/images/products/fruit-n-veg/pomegrante.jpg":
/*!***********************************************************!*\
  !*** ./static/images/products/fruit-n-veg/pomegrante.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2e25276abc3d5d74747a.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/fruit-n-veg/pomegrante.jpg?");

/***/ }),

/***/ "./static/images/products/fruit-n-veg/tomato.jpg":
/*!*******************************************************!*\
  !*** ./static/images/products/fruit-n-veg/tomato.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8f0a5264e06398f4a750.jpg\";\n\n//# sourceURL=webpack://code-exercise/./static/images/products/fruit-n-veg/tomato.jpg?");

/***/ })

}]);