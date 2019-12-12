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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_Server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/Server */ \"./src/server/Server.js\");\n\nvar server = new _server_Server__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/BaseController.js":
/*!*******************************************!*\
  !*** ./src/controllers/BaseController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BaseController =\n/*#__PURE__*/\nfunction () {\n  function BaseController(router, path) {\n    _classCallCheck(this, BaseController);\n\n    this.router = router;\n    this.path = path;\n  }\n\n  _createClass(BaseController, [{\n    key: \"endPointPath\",\n    value: function endPointPath(endpoint) {\n      return \"/\".concat(this.path, \"/\").concat(endpoint);\n    }\n  }]);\n\n  return BaseController;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseController);\n\n//# sourceURL=webpack:///./src/controllers/BaseController.js?");

/***/ }),

/***/ "./src/controllers/ItemsController.js":
/*!********************************************!*\
  !*** ./src/controllers/ItemsController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ \"./src/controllers/BaseController.js\");\n/* harmony import */ var _database_ItemsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/ItemsData */ \"./src/database/ItemsData.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ItemsControllers =\n/*#__PURE__*/\nfunction (_BaseController) {\n  _inherits(ItemsControllers, _BaseController);\n\n  function ItemsControllers(router) {\n    var _this;\n\n    _classCallCheck(this, ItemsControllers);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemsControllers).call(this, router, 'items'));\n\n    _this.router.route(_this.endPointPath('cover')).get(_this.getMainPageItems);\n\n    _this.router.route(_this.endPointPath('search')).get(_this.search);\n\n    return _this;\n  }\n\n  _createClass(ItemsControllers, [{\n    key: \"getMainPageItems\",\n    value: function getMainPageItems(__req, res) {\n      Object(_database_ItemsData__WEBPACK_IMPORTED_MODULE_1__[\"getCoverItems\"])().then(function (set) {\n        res.status(200).send({\n          results: set\n        });\n      })[\"catch\"](function (error) {\n        res.status(500).send({\n          error: error\n        });\n      });\n    }\n  }, {\n    key: \"search\",\n    value: function search(req, res) {\n      Object(_database_ItemsData__WEBPACK_IMPORTED_MODULE_1__[\"getSearchResults\"])(req.query).then(function (set) {\n        res.status(200).send({\n          results: set\n        });\n      })[\"catch\"](function (error) {\n        res.status(500).send({\n          error: error\n        });\n      });\n    }\n  }]);\n\n  return ItemsControllers;\n}(_BaseController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsControllers);\n\n//# sourceURL=webpack:///./src/controllers/ItemsController.js?");

/***/ }),

/***/ "./src/controllers/MetadataController.js":
/*!***********************************************!*\
  !*** ./src/controllers/MetadataController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ \"./src/controllers/BaseController.js\");\n/* harmony import */ var _database_MetaData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/MetaData */ \"./src/database/MetaData.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar MetadataController =\n/*#__PURE__*/\nfunction (_BaseContoller) {\n  _inherits(MetadataController, _BaseContoller);\n\n  function MetadataController(router) {\n    var _this;\n\n    _classCallCheck(this, MetadataController);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MetadataController).call(this, router, 'meta'));\n\n    _this.router.route(_this.endPointPath('types')).get(_this.getTypes);\n\n    _this.router.route(_this.endPointPath('rarities')).get(_this.getRarities);\n\n    return _this;\n  }\n\n  _createClass(MetadataController, [{\n    key: \"getTypes\",\n    value: function getTypes(_req, res) {\n      Object(_database_MetaData__WEBPACK_IMPORTED_MODULE_1__[\"getTypes\"])().then(function (set) {\n        res.status(200).send({\n          'types': set\n        });\n      })[\"catch\"](function (error) {\n        res.status(500).send({\n          error: error\n        });\n      });\n    }\n  }, {\n    key: \"getRarities\",\n    value: function getRarities(__req, res) {\n      Object(_database_MetaData__WEBPACK_IMPORTED_MODULE_1__[\"getRarities\"])().then(function (set) {\n        res.status(200).send({\n          'rarities': set\n        });\n      })[\"catch\"](function (error) {\n        res.status(500).send({\n          error: error\n        });\n      });\n    }\n  }]);\n\n  return MetadataController;\n}(_BaseController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetadataController);\n\n//# sourceURL=webpack:///./src/controllers/MetadataController.js?");

/***/ }),

/***/ "./src/controllers/RecipeController.js":
/*!*********************************************!*\
  !*** ./src/controllers/RecipeController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ \"./src/controllers/BaseController.js\");\n/* harmony import */ var _database_recipeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/recipeData */ \"./src/database/recipeData.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar RecipeController =\n/*#__PURE__*/\nfunction (_BaseController) {\n  _inherits(RecipeController, _BaseController);\n\n  function RecipeController(router) {\n    var _this;\n\n    _classCallCheck(this, RecipeController);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecipeController).call(this, router, 'recipes'));\n\n    _this.router.route(_this.endPointPath(':itemId')).get(_this.getRecipeData);\n\n    return _this;\n  }\n\n  _createClass(RecipeController, [{\n    key: \"getRecipeData\",\n    value: function getRecipeData(req, res) {\n      // for now deal with not finding a recipe\n      Object(_database_recipeData__WEBPACK_IMPORTED_MODULE_1__[\"getRecipe\"])(req.params.itemId).then(function (data) {\n        res.status(200).send(data);\n      });\n    }\n  }]);\n\n  return RecipeController;\n}(_BaseController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeController);\n\n//# sourceURL=webpack:///./src/controllers/RecipeController.js?");

/***/ }),

/***/ "./src/database/ItemsData.js":
/*!***********************************!*\
  !*** ./src/database/ItemsData.js ***!
  \***********************************/
/*! exports provided: getCoverItems, getSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoverItems\", function() { return getCoverItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchResults\", function() { return getSearchResults; });\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mssql */ \"mssql\");\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mssql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbConfig */ \"./src/database/dbConfig.js\");\n\n\nvar getCoverItems = function getCoverItems() {\n  return new Promise(function (resolve, reject) {\n    // const connection = sql.ConnectionError(dbConfig);\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request(); // req.query(`SELECT TOP 30 * FROM Items WHERE vendor_value > 10000`)\n\n        req.query(\"SELECT TOP 60 * FROM Items\").then(function (set) {\n          var results = [];\n          set.recordset.forEach(function (result) {\n            results.push(result);\n          });\n          resolve(results);\n        })[\"catch\"](function (error) {\n          console.log('getCoverItems', error);\n          console.log('crafting mat');\n          reject(error);\n        });\n      }\n    });\n  });\n};\nvar getSearchResults = function getSearchResults(data) {\n  var queries = [];\n  var minLevel = data.minLevel ? data.minLevel : 0;\n  var maxLevel = data.maxLevel ? data.maxLevel : 80; // adjust min level to legal values\n\n  minLevel = minLevel >= 0 ? minLevel : 0;\n  minLevel = minLevel <= 80 ? minLevel : 80;\n  minLevel = minLevel <= maxLevel ? minLevel : maxLevel; // adjust max level to legal values\n\n  maxLevel = maxLevel <= 80 ? maxLevel : 80;\n  maxLevel = maxLevel >= 0 ? maxLevel : 0;\n  maxLevel = maxLevel >= minLevel ? maxLevel : minLevel;\n  data.types && data.types.length && queries.push(\"type in ('\".concat(data.types.join('\\', \\''), \"')\"));\n  data.rarities && data.rarities.length && queries.push(\"rarity in ('\".concat(data.rarities.join('\\',\\''), \"')\")); // data.minLevel && queries.push(`rating >= ${data.minLevel}`);\n\n  queries.push(\"rating >= \".concat(minLevel));\n  queries.push(\"rating <= \".concat(maxLevel));\n  var allQueries = queries.length ? \"WHERE \".concat(queries.join(' AND ')) : '';\n  var queryString = \"SELECT TOP 100 * FROM Items \".concat(allQueries);\n  console.log(queryString);\n  return new Promise(function (resolve, reject) {\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request();\n        req.query(queryString).then(function (set) {\n          var results = [];\n          set.recordset.forEach(function (result) {\n            results.push(result);\n          });\n          resolve(results);\n        })[\"catch\"](function (error) {\n          console.log('getSearchResults', error);\n          reject(error);\n        });\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/database/ItemsData.js?");

/***/ }),

/***/ "./src/database/MetaData.js":
/*!**********************************!*\
  !*** ./src/database/MetaData.js ***!
  \**********************************/
/*! exports provided: getTypes, getRarities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTypes\", function() { return getTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRarities\", function() { return getRarities; });\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mssql */ \"mssql\");\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mssql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbConfig */ \"./src/database/dbConfig.js\");\n\n\nvar getTypes = function getTypes() {\n  return new Promise(function (resolve, reject) {\n    // const connection = sql.Connection(dbConfig);\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        console.log('error connecting to database...', err);\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request();\n        req.query('SELECT DISTINCT type FROM Items').then(function (set) {\n          var types = [];\n          set.recordset.forEach(function (type) {\n            types.push(type.type);\n          });\n          resolve(types);\n        })[\"catch\"](function (error) {\n          console.log('getTypes', error);\n          reject(error);\n        });\n      }\n    });\n  });\n};\nvar getRarities = function getRarities() {\n  return new Promise(function (resolve, reject) {\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        console.log('error connecting to database', err);\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request();\n        req.query('SELECT DISTINCT rarity FROM Items').then(function (set) {\n          var rarities = [];\n          set.recordset.forEach(function (rarity) {\n            rarities.push(rarity.rarity);\n          });\n          resolve(rarities);\n        })[\"catch\"](function (error) {\n          console.log('getRarities', error);\n          reject(error);\n        });\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/database/MetaData.js?");

/***/ }),

/***/ "./src/database/dbConfig.js":
/*!**********************************!*\
  !*** ./src/database/dbConfig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server: process.env.CRAFT_UTIL_DB_HOST,\n  database: process.env.CRAFT_UTIL_DB_NAME,\n  user: process.env.CRAFT_UTIL_DB_USER,\n  password: process.env.CRAFT_UTIL_DB_PSWRD,\n  options: {\n    encrypt: true\n  }\n});\n\n//# sourceURL=webpack:///./src/database/dbConfig.js?");

/***/ }),

/***/ "./src/database/recipeData.js":
/*!************************************!*\
  !*** ./src/database/recipeData.js ***!
  \************************************/
/*! exports provided: getRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecipe\", function() { return getRecipe; });\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mssql */ \"mssql\");\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mssql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbConfig */ \"./src/database/dbConfig.js\");\n\n\nvar getRecipe = function getRecipe(itemId) {\n  return new Promise(function (resolve, reject) {\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request();\n        req.query(\"SELECT * FROM Recipes WHERE output_item_id=\".concat(itemId)).then(function (set) {\n          var recipeSet = [];\n          set.recordset.forEach(function (recipe) {\n            recipeSet.push(recipe);\n          });\n\n          if (recipeSet.length === 1) {\n            var ingredients = [];\n            var itemIds = [itemId];\n            var parsedIngredients = JSON.parse(recipeSet[0].ingredients);\n            parsedIngredients.forEach(function (ingredient) {\n              var item_id = ingredient.item_id;\n              ingredients.push({\n                item_id: item_id,\n                count: ingredient.count\n              });\n              addItemId(item_id, itemIds);\n            });\n            var root = recipeSet[0].output_item_id;\n            var nodes = {};\n            var items = {};\n            nodes[\"node-\".concat(root)] = {\n              id: root,\n              ingredients: ingredients\n            };\n            buildNodes(nodes, itemIds).then(function () {\n              return buildItems(items, itemIds);\n            }).then(function () {\n              var recipe = {\n                root: root,\n                nodes: nodes,\n                items: items\n              };\n              resolve({\n                status: 1,\n                recipe: recipe\n              });\n            });\n          } else {\n            resolve({\n              status: 0,\n              recipe: {}\n            });\n          }\n        });\n      }\n    });\n  });\n};\n\nvar addItemId = function addItemId(itemId, arr) {\n  if (!arr.some(function (id) {\n    return id === itemId;\n  })) {\n    arr.push(itemId);\n  }\n};\n\nvar buildNodes = function buildNodes(nodes, itemIds) {\n  return new Promise(function (resolve, reject) {\n    nextNode(nodes, itemIds, 0, resolve, reject);\n  });\n};\n\nvar nextNode = function nextNode(nodes, itemIds, current, resolve, reject) {\n  if (current < itemIds.length) {\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request();\n        req.query(\"SELECT * FROM Recipes WHERE output_item_id=\".concat(itemIds[current])).then(function (set) {\n          if (set.recordset.length) {\n            var parsedIngredients = JSON.parse(set.recordset[0].ingredients);\n            var ingredients = [];\n            parsedIngredients.forEach(function (ingredient) {\n              var item_id = ingredient.item_id;\n              addItemId(item_id, itemIds);\n              ingredients.push({\n                item_id: item_id,\n                count: ingredient.count\n              });\n            });\n            var nodeKey = \"node-\".concat(itemIds[current]);\n            nodes[nodeKey] = nodes[nodeKey] || {\n              id: itemIds[current],\n              ingredients: ingredients\n            };\n          }\n\n          nextNode(nodes, itemIds, current + 1, resolve, reject);\n        })[\"catch\"](function (error) {\n          reject(error);\n        });\n      }\n    });\n  } else {\n    resolve();\n  }\n};\n\nvar buildItems = function buildItems(items, itemIds) {\n  return new Promise(function (resolve, reject) {\n    nextItem(items, itemIds, resolve, reject);\n  });\n};\n\nvar nextItem = function nextItem(items, itemIds, resolve, reject) {\n  if (itemIds.length) {\n    var currentId = itemIds.pop();\n    mssql__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"], function (err) {\n      if (err) {\n        reject(err);\n      } else {\n        var req = new mssql__WEBPACK_IMPORTED_MODULE_0___default.a.Request();\n        req.query(\"SELECT * FROM Items WHERE id=\".concat(currentId)).then(function (set) {\n          if (set.recordset.length) {\n            var itemKey = \"item-\".concat(currentId);\n            items[itemKey] = items[itemKey] || set.recordset[0];\n          }\n\n          nextItem(items, itemIds, resolve, reject);\n        })[\"catch\"](function (error) {\n          reject(error);\n        });\n      }\n    });\n  } else {\n    resolve();\n  }\n};\n\n//# sourceURL=webpack:///./src/database/recipeData.js?");

/***/ }),

/***/ "./src/server/Server.js":
/*!******************************!*\
  !*** ./src/server/Server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controllers_MetadataController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/MetadataController */ \"./src/controllers/MetadataController.js\");\n/* harmony import */ var _controllers_ItemsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/ItemsController */ \"./src/controllers/ItemsController.js\");\n/* harmony import */ var _controllers_RecipeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/RecipeController */ \"./src/controllers/RecipeController.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar Server = function Server() {\n  _classCallCheck(this, Server);\n\n  _defineProperty(this, \"app\", undefined);\n\n  _defineProperty(this, \"router\", undefined);\n\n  this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n  this.router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n  this.router.get('/', function (req, res) {\n    return res.status(200).send({\n      'message': 'this works too'\n    });\n  });\n  this.app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\n  this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  this.app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n  this.app.use('/', this.router); // The rest of the REST will go here\n\n  var metadataController = new _controllers_MetadataController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.router);\n  var itemsController = new _controllers_ItemsController__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.router);\n  var recipeController = new _controllers_RecipeController__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.router);\n  var port = process.env.PORT || 3002;\n  this.app.listen(port);\n  console.log(\"Host listening on port \".concat(port));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Server);\n\n//# sourceURL=webpack:///./src/server/Server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mssql\");\n\n//# sourceURL=webpack:///external_%22mssql%22?");

/***/ })

/******/ });