/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_javascript/addArrowIconToLatest.js":
/*!*********************************************!*\
  !*** ./_javascript/addArrowIconToLatest.js ***!
  \*********************************************/
/*! exports provided: addArrowIconToLatest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addArrowIconToLatest\", function() { return addArrowIconToLatest; });\nvar addArrowIconToLatest = function addArrowIconToLatest() {\n  var latestTag = document.querySelector(\"#latest\");\n\n  if (latestTag === null) {\n    return;\n  }\n\n  latestTag.insertAdjacentHTML(\"afterbegin\", \"<img id=\\\"carrot\\\" src=\\\"/assets/carrot.svg\\\" alt=\\\"\\\">\");\n};\n\n//# sourceURL=webpack:///./_javascript/addArrowIconToLatest.js?");

/***/ }),

/***/ "./_javascript/filterByYear.js":
/*!*************************************!*\
  !*** ./_javascript/filterByYear.js ***!
  \*************************************/
/*! exports provided: initializeFilterByYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeFilterByYear\", function() { return initializeFilterByYear; });\nvar initializeFilterByYear = function initializeFilterByYear(data) {\n  var latestTag = document.querySelector(\"#latest\");\n  var yearsList = document.querySelector(\"#years\");\n\n  if ([latestTag, yearsList].some(function (element) {\n    return element === null;\n  })) {\n    return;\n  }\n\n  var uniqueYears = Array.from(new Set(data.items.map(function (item) {\n    return new Date(item.date_published).getFullYear();\n  })));\n  uniqueYears.forEach(function (year) {\n    return yearsList.insertAdjacentHTML(\"beforeend\", \"\\n    <li class=\\\"button-round\\\">\\n      <a href=\\\"/?year=\".concat(year, \"\\\">\\n        \").concat(year, \"\\n      </a>\\n    </li>\\n  \"));\n  });\n  latestTag.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    yearsList.classList.toggle(\"show\");\n\n    if (yearsList.classList.contains(\"show\")) {\n      yearsList.style.height = \"\".concat(uniqueYears.length * 38, \"px\");\n    } else {\n      yearsList.style.height = \"0px\";\n    }\n\n    latestTag.classList.toggle(\"blue-highlight\");\n  });\n};\n\n//# sourceURL=webpack:///./_javascript/filterByYear.js?");

/***/ }),

/***/ "./_javascript/index.js":
/*!******************************!*\
  !*** ./_javascript/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPosts */ \"./_javascript/setPosts.js\");\n/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileMenu */ \"./_javascript/mobileMenu.js\");\n/* harmony import */ var _infiniteScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteScroll */ \"./_javascript/infiniteScroll.js\");\n/* harmony import */ var _filterByYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterByYear */ \"./_javascript/filterByYear.js\");\n/* harmony import */ var _addArrowIconToLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addArrowIconToLatest */ \"./_javascript/addArrowIconToLatest.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nObject(_addArrowIconToLatest__WEBPACK_IMPORTED_MODULE_4__[\"addArrowIconToLatest\"])();\nvar category;\nvar categoryMatch = location.href.match(_wrapRegExp(/\\/category\\/(\\w+)/, {\n  category: 1\n}));\n\nif (categoryMatch) {\n  category = categoryMatch.groups.category;\n}\n\nvar year = new URL(location.href).searchParams.get(\"year\");\nvar postListElement = document.querySelector(\".posts\");\nvar main = document.querySelector(\"main\");\nvar footer = document.querySelector(\"footer\");\nvar posts = document.querySelector(\".posts\");\n\nif (posts) {\n  footer.style.opacity = \"0\";\n  footer.style.transition = \"opacity 0.4s ease\";\n  main.style.opacity = \"0\";\n  main.style.transition = \"opacity 0.4s ease\";\n}\n\nfetch(\"/feed.json\").then(function (response) {\n  return response.json();\n}).then(function (data) {\n  Object(_setPosts__WEBPACK_IMPORTED_MODULE_0__[\"setPosts\"])(data, postListElement, category, year);\n  Object(_infiniteScroll__WEBPACK_IMPORTED_MODULE_2__[\"initializeInfiniteScroll\"])(data, postListElement, category, year);\n  Object(_filterByYear__WEBPACK_IMPORTED_MODULE_3__[\"initializeFilterByYear\"])(data);\n  setTimeout(function () {\n    main.style.opacity = \"1\";\n    footer.style.opacity = \"1\";\n  }, 100);\n})[\"catch\"](function () {\n  setTimeout(function () {\n    main.style.opacity = \"1\";\n    footer.style.opacity = \"1\";\n  }, 100);\n});\nObject(_mobileMenu__WEBPACK_IMPORTED_MODULE_1__[\"initializeMobileMenu\"])();\n\n//# sourceURL=webpack:///./_javascript/index.js?");

/***/ }),

/***/ "./_javascript/infiniteScroll.js":
/*!***************************************!*\
  !*** ./_javascript/infiniteScroll.js ***!
  \***************************************/
/*! exports provided: initializeInfiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeInfiniteScroll\", function() { return initializeInfiniteScroll; });\n/* harmony import */ var _renderPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPosts */ \"./_javascript/renderPosts.js\");\n\nvar initializeInfiniteScroll = function initializeInfiniteScroll(data, postListElement, category, year) {\n  var posts = document.querySelector(\".posts\");\n\n  if (posts === null) {\n    return;\n  }\n\n  window.addEventListener(\"scroll\", function () {\n    var pixelsToBottomOfPage = document.body.clientHeight - window.scrollY - window.innerHeight;\n\n    if (pixelsToBottomOfPage < 1500) {\n      var postIndex = document.querySelectorAll(\"article.post\").length;\n      var postData = Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__[\"postsThatShouldBeShown\"])(data, category, year)[postIndex];\n\n      if (postData !== undefined) {\n        Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__[\"renderNewPost\"])(postData, postListElement);\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack:///./_javascript/infiniteScroll.js?");

/***/ }),

/***/ "./_javascript/mobileMenu.js":
/*!***********************************!*\
  !*** ./_javascript/mobileMenu.js ***!
  \***********************************/
/*! exports provided: initializeMobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeMobileMenu\", function() { return initializeMobileMenu; });\nvar initializeMobileMenu = function initializeMobileMenu() {\n  var mobileMenu = document.querySelector(\"#mobile-menu\");\n  var hamburgerButton = document.querySelector(\"#hamburger-button\");\n  var mobileMenuButton = document.querySelector(\"#close-mobile-menu\");\n\n  if ([mobileMenu, hamburgerButton, mobileMenuButton].some(function (element) {\n    return element === null;\n  })) {\n    return false;\n  }\n\n  hamburgerButton.addEventListener(\"click\", function () {\n    mobileMenu.classList.add(\"show\");\n    document.body.classList.add(\"fix\");\n  });\n  mobileMenuButton.addEventListener(\"click\", function () {\n    mobileMenu.classList.remove(\"show\");\n    document.body.classList.remove(\"fix\");\n  });\n};\n\n//# sourceURL=webpack:///./_javascript/mobileMenu.js?");

/***/ }),

/***/ "./_javascript/renderPosts.js":
/*!************************************!*\
  !*** ./_javascript/renderPosts.js ***!
  \************************************/
/*! exports provided: postsThatShouldBeShown, renderNewPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postsThatShouldBeShown\", function() { return postsThatShouldBeShown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewPost\", function() { return renderNewPost; });\nvar postsThatShouldBeShown = function postsThatShouldBeShown(postsData, category, year) {\n  var posts = [];\n\n  if (category !== undefined) {\n    posts = postsData.items.filter(function (post) {\n      return post.categories.includes(category);\n    });\n  } else {\n    posts = postsData.items;\n  }\n\n  if (year !== null) {\n    posts = posts.filter(function (item) {\n      return new Date(item.date_published).getFullYear() == year;\n    });\n  }\n\n  return posts;\n};\nvar renderNewPost = function renderNewPost(postData, postList) {\n  postList.insertAdjacentHTML(\"beforeend\", postHTML(postData));\n  var newPostElement = postList.querySelector(\".post:last-child\");\n  var readMoreButton = newPostElement.querySelector(\".read-more > a\");\n\n  if (readMoreButton) {\n    var readMoreContent = newPostElement.querySelector(\".read-more-content\");\n    readMoreButton.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      readMoreContent.style.display = \"block\";\n      setTimeout(function () {\n        readMoreContent.style.opacity = \"1\";\n      }, 100);\n      var url = new URL(location.href);\n      url.pathname = postData.url;\n      document.title = \"\".concat(postData.title, \" \\xB7 Matthew Bischoff\");\n      window.history.pushState(document.title, document.title, url.toString());\n      readMoreButton.remove();\n    });\n  }\n};\n\nvar postHTML = function postHTML(postData) {\n  var html;\n\n  if (postData.format == \"tweet\") {\n    html = tweetPostHTML(postData);\n  } else if (postData.format == \"link\") {\n    html = linkPostHTML(postData);\n  } else {\n    html = longFormPostHTML(postData);\n  }\n\n  return \"\\n    <article class=\\\"post\\\">\\n      \".concat(html, \"\\n    </article>\\n  \");\n};\n\nvar longFormPostHTML = function longFormPostHTML(postData) {\n  var url = postData.url;\n  var title = postData.title;\n  var content;\n\n  if (postData.content_html.includes(\"<!-- more -->\")) {\n    var splitContent = postData.content_html.split(\"<!-- more -->\");\n    content = splitContent[0];\n    content += \"\\n      <div class=\\\"read-more\\\">\\n        <a href=\\\"\".concat(url, \"\\\"> Read More </a>\\n      </div>\\n      <div class=\\\"read-more-content\\\">\\n        \").concat(splitContent[1], \"\\n      <div>\\n    \");\n  } else {\n    content = postData.content_html;\n  }\n\n  return \"\\n    <div class=\\\"long-form-post\\\">\\n      \".concat(dateHTML(postData.date_published), \"\\n\\n      <a href=\\\"\").concat(url, \"\\\">\\n        <h2 class=\\\"post-title\\\">\\n          \").concat(title, \"\\n        </h2>\\n      </a>\\n\\n      \").concat(content, \"\\n    </div>\\n  \");\n};\n\nvar linkPostHTML = function linkPostHTML(postData) {\n  var link = postData.external_url;\n  var title = postData.title;\n  return \"\\n    <div class=\\\"link-post\\\">\\n      \".concat(dateHTML(postData.date_published), \"\\n\\n      <h2><a href=\\\"\").concat(link, \"\\\" target=\\\"_blank\\\">\").concat(title, \"</a></h2>\\n    </div>\\n  \");\n};\n\nvar tweetPostHTML = function tweetPostHTML(postData) {\n  var colour = postData.colour;\n  var content = postData.content_html;\n  return \"\\n    <div class=\\\"short-form-post\\\">\\n      <div class=\\\"colour-\".concat(colour, \"\\\"></div>\\n      <div class=\\\"colour-dark-\").concat(colour, \"\\\">\\n        \").concat(dateHTML(postData.date_published), \"\\n        \").concat(content, \"\\n      </div>\\n    </div>\\n  \");\n};\n\nvar dateHTML = function dateHTML(postPublishedAt) {\n  var xmlSchemaData = postPublishedAt;\n  var options = {\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\"\n  };\n  var date = new Date(postPublishedAt).toLocaleDateString(\"en-US\", options);\n  return \"<time datetime=\\\"\".concat(xmlSchemaData, \"\\\" class=\\\"post-date\\\">\").concat(date, \"</time>\");\n};\n\n//# sourceURL=webpack:///./_javascript/renderPosts.js?");

/***/ }),

/***/ "./_javascript/setPosts.js":
/*!*********************************!*\
  !*** ./_javascript/setPosts.js ***!
  \*********************************/
/*! exports provided: setPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPosts\", function() { return setPosts; });\n/* harmony import */ var _renderPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPosts */ \"./_javascript/renderPosts.js\");\n\nvar setPosts = function setPosts(data, postList, category, year) {\n  var posts = document.querySelector(\".posts\");\n\n  if (posts === null) {\n    return;\n  }\n\n  Array.from(document.querySelectorAll(\"article.post\")).forEach(function (article) {\n    return article.remove();\n  });\n  Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__[\"postsThatShouldBeShown\"])(data, category, year).slice(0, 5).forEach(function (post) {\n    return Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__[\"renderNewPost\"])(post, postList);\n  });\n};\n\n//# sourceURL=webpack:///./_javascript/setPosts.js?");

/***/ })

/******/ });