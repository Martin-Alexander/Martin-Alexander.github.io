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

/***/ "./_javascript/filterByCategory.js":
/*!*****************************************!*\
  !*** ./_javascript/filterByCategory.js ***!
  \*****************************************/
/*! exports provided: initializeFilterByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFilterByCategory", function() { return initializeFilterByCategory; });
/* harmony import */ var _setPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPosts */ "./_javascript/setPosts.js");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capitalize */ "./node_modules/capitalize/index.js");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(capitalize__WEBPACK_IMPORTED_MODULE_1__);


var initializeFilterByCategory = function initializeFilterByCategory(data, postList) {
  if (!postList) {
    return;
  }

  var categoryButtons = document.querySelectorAll(".category");
  var footer = document.querySelector("footer");
  var main = document.querySelector("main");
  var latestTag = document.querySelector("#latest");
  categoryButtons.forEach(function (categoryButton) {
    categoryButton.addEventListener("click", function (event) {
      var categoryName = categoryButton.dataset.categoryName;
      event.preventDefault();
      categoryButtons.forEach(function (btn) {
        return btn.classList.remove("blue-highlight");
      });
      latestTag.classList.remove("blue-highlight");
      categoryButton.classList.add("blue-highlight");
      footer.style.opacity = "0";
      main.style.opacity = "0";
      setTimeout(function () {
        Object(_setPosts__WEBPACK_IMPORTED_MODULE_0__["setPosts"])(data, postList);
        setTimeout(function () {
          main.style.opacity = "1";
          footer.style.opacity = "1";
        }, 300);
      }, 300);
      var url = new URL(location.href);
      url.pathname = "category/".concat(categoryName);
      url.search = "";
      document.title = "".concat(capitalize__WEBPACK_IMPORTED_MODULE_1___default()(categoryName), " \xB7 Matthew Bischoff");
      window.history.pushState(document.title, document.title, url.toString());
      var latestAndCarrotHtml = "<img id=\"carrot\" src=\"/assets/carrot.svg\" alt=\"\"><span>Latest</span>";

      if (latestTag.innerHTML !== latestAndCarrotHtml) {
        latestTag.innerHTML = latestAndCarrotHtml;
      }
    });
  });
};

/***/ }),

/***/ "./_javascript/filterByYear.js":
/*!*************************************!*\
  !*** ./_javascript/filterByYear.js ***!
  \*************************************/
/*! exports provided: initializeFilterByYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFilterByYear", function() { return initializeFilterByYear; });
/* harmony import */ var _setPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPosts */ "./_javascript/setPosts.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./_javascript/index.js");


var initializeFilterByYear = function initializeFilterByYear(data, postList) {
  var latestTag = document.querySelector("#latest");
  var yearsList = document.querySelector("#years");
  var footer = document.querySelector("footer");
  var main = document.querySelector("main");
  var categoryButtons = document.querySelectorAll(".category");

  if ([latestTag, yearsList].some(function (element) {
    return element === null;
  })) {
    return;
  }

  var currentYear = Object(_index__WEBPACK_IMPORTED_MODULE_1__["getYear"])();

  if (currentYear) {
    latestTag.innerText = currentYear;
    latestTag.classList.add("blue-highlight");
  }

  var uniqueYears = Array.from(new Set(data.items.map(function (item) {
    return new Date(item.date_published).getFullYear();
  })));
  uniqueYears.forEach(function (year) {
    yearsList.insertAdjacentHTML("beforeend", "\n      <li class=\"button-round\">\n        <a class=\"year\" data-year=\"".concat(year, "\" href=\"/?year=").concat(year, "\">\n          ").concat(year, "\n        </a>\n      </li>\n    "));
  });
  document.querySelectorAll(".year").forEach(function (yearButton) {
    yearButton.addEventListener("click", function (event) {
      var year = parseInt(yearButton.dataset.year);
      event.preventDefault();
      footer.style.opacity = "0";
      main.style.opacity = "0";
      setTimeout(function () {
        Object(_setPosts__WEBPACK_IMPORTED_MODULE_0__["setPosts"])(data, postList);
        setTimeout(function () {
          main.style.opacity = "1";
          footer.style.opacity = "1";
        }, 300);
      }, 300);
      var url = new URL(location.href);
      url.pathname = "";
      url.search = "year=".concat(year);
      latestTag.innerText = year;
      document.title = "".concat(year, " \xB7 Matthew Bischoff");
      window.history.pushState(document.title, document.title, url.toString());
      yearsList.style.height = "0px";
      yearsList.classList.toggle("show");
      categoryButtons.forEach(function (btn) {
        return btn.classList.remove("blue-highlight");
      });
    });
  });
  latestTag.addEventListener("click", function (event) {
    event.preventDefault();
    yearsList.classList.toggle("show");

    if (yearsList.classList.contains("show")) {
      yearsList.style.height = "".concat(uniqueYears.length * 38, "px");
    } else {
      yearsList.style.height = "0px";
    }

    latestTag.classList.add("blue-highlight");
  });
};

/***/ }),

/***/ "./_javascript/index.js":
/*!******************************!*\
  !*** ./_javascript/index.js ***!
  \******************************/
/*! exports provided: getCategory, getYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return getYear; });
/* harmony import */ var _setPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPosts */ "./_javascript/setPosts.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileMenu */ "./_javascript/mobileMenu.js");
/* harmony import */ var _infiniteScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteScroll */ "./_javascript/infiniteScroll.js");
/* harmony import */ var _filterByYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterByYear */ "./_javascript/filterByYear.js");
/* harmony import */ var _filterByCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterByCategory */ "./_javascript/filterByCategory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var getCategory = function getCategory() {
  var category;
  var categoryMatch = location.href.match(_wrapRegExp(/\/category\/(\w+)/, {
    category: 1
  }));

  if (categoryMatch) {
    category = categoryMatch.groups.category;
  }

  return category;
};
var getYear = function getYear() {
  var year = new URL(location.href).searchParams.get("year");
  return year;
};
var postListElement = document.querySelector(".posts");
var main = document.querySelector("main");
var footer = document.querySelector("footer");
var posts = document.querySelector(".posts");

if (posts) {
  footer.style.opacity = "0";
  footer.style.transition = "opacity 0.4s ease";
  main.style.opacity = "0";
  main.style.transition = "opacity 0.4s ease";
}

fetch("/feed.json").then(function (response) {
  return response.json();
}).then(function (data) {
  Object(_setPosts__WEBPACK_IMPORTED_MODULE_0__["setPosts"])(data, postListElement);
  Object(_infiniteScroll__WEBPACK_IMPORTED_MODULE_2__["initializeInfiniteScroll"])(data, postListElement);
  Object(_filterByYear__WEBPACK_IMPORTED_MODULE_3__["initializeFilterByYear"])(data, postListElement);
  Object(_filterByCategory__WEBPACK_IMPORTED_MODULE_4__["initializeFilterByCategory"])(data, postListElement);
  setTimeout(function () {
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }, 100);
})["catch"](function () {
  setTimeout(function () {
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }, 100);
});
Object(_mobileMenu__WEBPACK_IMPORTED_MODULE_1__["initializeMobileMenu"])();

/***/ }),

/***/ "./_javascript/infiniteScroll.js":
/*!***************************************!*\
  !*** ./_javascript/infiniteScroll.js ***!
  \***************************************/
/*! exports provided: initializeInfiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInfiniteScroll", function() { return initializeInfiniteScroll; });
/* harmony import */ var _renderPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPosts */ "./_javascript/renderPosts.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./_javascript/index.js");


var initializeInfiniteScroll = function initializeInfiniteScroll(data, postListElement) {
  var posts = document.querySelector(".posts");

  if (posts === null) {
    return;
  }

  window.addEventListener("scroll", function () {
    var year = Object(_index__WEBPACK_IMPORTED_MODULE_1__["getYear"])();
    var category = Object(_index__WEBPACK_IMPORTED_MODULE_1__["getCategory"])();
    var pixelsToBottomOfPage = document.body.clientHeight - window.scrollY - window.innerHeight;

    if (pixelsToBottomOfPage < 1500) {
      var postIndex = document.querySelectorAll("article.post").length;
      var postData = Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__["postsThatShouldBeShown"])(data, category, year)[postIndex];

      if (postData !== undefined) {
        Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__["renderNewPost"])(postData, postListElement);
      }
    }
  });
};

/***/ }),

/***/ "./_javascript/mobileMenu.js":
/*!***********************************!*\
  !*** ./_javascript/mobileMenu.js ***!
  \***********************************/
/*! exports provided: initializeMobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeMobileMenu", function() { return initializeMobileMenu; });
var initializeMobileMenu = function initializeMobileMenu() {
  var mobileMenu = document.querySelector("#mobile-menu");
  var hamburgerButton = document.querySelector("#hamburger-button");
  var mobileMenuButton = document.querySelector("#close-mobile-menu");

  if ([mobileMenu, hamburgerButton, mobileMenuButton].some(function (element) {
    return element === null;
  })) {
    return false;
  }

  hamburgerButton.addEventListener("click", function () {
    mobileMenu.style.display = "block";
    setTimeout(function () {
      return mobileMenu.style.opacity = "1";
    }, 0);
    document.body.classList.add("fix");
  });
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.style.opacity = "0";
    setTimeout(function () {
      mobileMenu.style.display = "none";
    }, 250);
    document.body.classList.remove("fix");
  });
};

/***/ }),

/***/ "./_javascript/renderPosts.js":
/*!************************************!*\
  !*** ./_javascript/renderPosts.js ***!
  \************************************/
/*! exports provided: postsThatShouldBeShown, renderNewPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsThatShouldBeShown", function() { return postsThatShouldBeShown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNewPost", function() { return renderNewPost; });
var postsThatShouldBeShown = function postsThatShouldBeShown(postsData, category, year) {
  var posts = [];

  if (category) {
    posts = postsData.items.filter(function (post) {
      return post.categories.includes(category);
    });
  } else {
    posts = postsData.items;
  }

  if (year) {
    posts = posts.filter(function (item) {
      return new Date(item.date_published).getFullYear() == year;
    });
  }

  return posts;
};
var renderNewPost = function renderNewPost(postData, postList) {
  postList.insertAdjacentHTML("beforeend", postHTML(postData));
  var newPostElement = postList.querySelector(".post:last-child");
  var readMoreButton = newPostElement.querySelector(".read-more > a");

  if (readMoreButton) {
    var readMoreContent = newPostElement.querySelector(".read-more-content");
    readMoreButton.addEventListener("click", function (event) {
      event.preventDefault();
      readMoreContent.style.display = "block";
      setTimeout(function () {
        readMoreContent.style.opacity = "1";
      }, 100);
      var url = new URL(location.href);
      url.pathname = postData.url;
      document.title = "".concat(postData.title, " \xB7 Matthew Bischoff");
      window.history.pushState(document.title, document.title, url.toString());
      readMoreButton.remove();
    });
  }
};

var postHTML = function postHTML(postData) {
  var html;

  if (postData.format == "tweet") {
    html = tweetPostHTML(postData);
  } else if (postData.format == "link") {
    html = linkPostHTML(postData);
  } else {
    html = longFormPostHTML(postData);
  }

  return "\n    <article class=\"post\">\n      ".concat(html, "\n    </article>\n  ");
};

var longFormPostHTML = function longFormPostHTML(postData) {
  var url = postData.url;
  var title = postData.title;
  var content;

  if (postData.content_html.includes("<!-- more -->")) {
    var splitContent = postData.content_html.split("<!-- more -->");
    content = splitContent[0];
    content += "\n      <div class=\"read-more\">\n        <a href=\"".concat(url, "\"> Read More </a>\n      </div>\n      <div class=\"read-more-content\">\n        ").concat(splitContent[1], "\n      <div>\n    ");
  } else {
    content = postData.content_html;
  }

  return "\n    <div class=\"long-form-post\">\n      ".concat(dateHTML(postData), "\n      <a href=\"").concat(url, "\">\n        <h2 class=\"post-title\">\n          ").concat(title, "\n        </h2>\n      </a>\n\n      ").concat(content, "\n    </div>\n  ");
};

var linkPostHTML = function linkPostHTML(postData) {
  var link = postData.external_url;
  var title = postData.title;
  return "\n    <div class=\"link-post\">\n      ".concat(dateHTML(postData), "\n      <h2><a href=\"").concat(link, "\" target=\"_blank\">").concat(title, "</a></h2>\n    </div>\n  ");
};

var tweetPostHTML = function tweetPostHTML(postData) {
  var colour = postData.colour;
  var content = postData.content_html;
  return "\n    <div class=\"short-form-post\">\n      <div class=\"colour-".concat(colour, "\"></div>\n      <div class=\"colour-dark-").concat(colour, "\">\n        ").concat(dateHTML(postData), "\n        ").concat(content, "\n      </div>\n    </div>\n  ");
};

var dateHTML = function dateHTML(postData) {
  var xmlSchemaData = postData.date_published;
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  var date = new Date(postData.date_published).toLocaleDateString("en-US", options);
  return "\n    <time datetime=\"".concat(xmlSchemaData, "\" class=\"post-date\">\n      <a href=\"").concat(postData.url, "\">").concat(date, "</a>\n    </time>\n  ");
};

/***/ }),

/***/ "./_javascript/setPosts.js":
/*!*********************************!*\
  !*** ./_javascript/setPosts.js ***!
  \*********************************/
/*! exports provided: setPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPosts", function() { return setPosts; });
/* harmony import */ var _renderPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPosts */ "./_javascript/renderPosts.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./_javascript/index.js");


var setPosts = function setPosts(data, postList) {
  var year = Object(_index__WEBPACK_IMPORTED_MODULE_1__["getYear"])();
  var category = Object(_index__WEBPACK_IMPORTED_MODULE_1__["getCategory"])();
  var posts = document.querySelector(".posts");

  if (posts === null) {
    return;
  }

  Array.from(document.querySelectorAll("article.post")).forEach(function (article) {
    return article.remove();
  });
  Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__["postsThatShouldBeShown"])(data, category, year).slice(0, 5).forEach(function (post) {
    return Object(_renderPosts__WEBPACK_IMPORTED_MODULE_0__["renderNewPost"])(post, postList);
  });
};

/***/ }),

/***/ "./node_modules/capitalize/index.js":
/*!******************************************!*\
  !*** ./node_modules/capitalize/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.words = function (string) {
  return string.toLowerCase().replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
    return m.toUpperCase()
  })
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map