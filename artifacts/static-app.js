(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(37);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(39);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(20);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(14);

var _helpers = __webpack_require__(40);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(14);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(38)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(11);

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/Router.js

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/scss/app.css
var app = __webpack_require__(48);

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/App.js

 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement("nav", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/autoloader"
  }, "Autoloader")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(8);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("/Users/Sri.Tikkireddy/PycharmProjects/interactive-db/node_modules/react-static/lib/browser");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(15);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-ace"
var external_react_ace_ = __webpack_require__(16);
var external_react_ace_default = /*#__PURE__*/__webpack_require__.n(external_react_ace_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(6);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/autoloader/FormatOptions.js


var autoloaderFormatOptions = [{
  value: "csv",
  label: "CSV"
}, {
  value: "avro",
  label: "Avro"
}, {
  value: "binaryFile",
  label: "Binary Files"
}, {
  value: "json",
  label: "JSON"
}, {
  value: "orc",
  label: "ORC"
}, {
  value: "parquet",
  label: "Parquet"
}, {
  value: "text",
  label: "Text"
}];

function AutoloaderFormatOptions(props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "What format is your data in:", /*#__PURE__*/external_react_default.a.createElement(external_react_select_default.a, {
    defaultValue: autoloaderFormatOptions[0],
    options: autoloaderFormatOptions,
    onChange: function onChange(e) {
      return props.setALoaderConfig({
        format: e.value
      });
    }
  }));
}

/* harmony default export */ var FormatOptions = (AutoloaderFormatOptions);
// EXTERNAL MODULE: external "ace-builds/src-noconflict/mode-python"
var mode_python_ = __webpack_require__(50);

// EXTERNAL MODULE: external "ace-builds/src-noconflict/theme-textmate"
var theme_textmate_ = __webpack_require__(51);

// EXTERNAL MODULE: external "ace-builds/src-noconflict/ext-language_tools"
var ext_language_tools_ = __webpack_require__(52);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/CloudSwitch.js

 // function onValueChange(event, props) {
//     props.setState({
//         cloud: event.target.value
//     });
// }

function isAzure(cloud) {
  return cloud === "azure";
}
function isAws(cloud) {
  return cloud === "aws";
}
function isGcp(cloud) {
  return cloud === "gcp";
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Toggles(props) {
  var alternativeTexts = props.hasOwnProperty("alternativeTexts") ? props.alternativeTexts : props.options;
  return props.options.map(function (option, index) {
    return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement("input", {
      type: "radio",
      id: option,
      name: props.groupName,
      value: option,
      checked: props.selectedValue === option,
      onChange: function onChange(event) {
        return props.setState(event, props);
      }
    }), /*#__PURE__*/external_react_default.a.createElement("label", {
      className: "cloudLabel",
      htmlFor: option
    }, capitalize(alternativeTexts[index])));
  });
}

function DefaultToggleSwitch(props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "radio-group-container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "radio-group"
  }, /*#__PURE__*/external_react_default.a.createElement(Toggles, extends_default()({
    groupName: props.groupName,
    options: props.options,
    selectedValue: props.selectedValue,
    setState: props.setState
  }, props))));
}
function CloudSwitch(props) {
  return /*#__PURE__*/external_react_default.a.createElement(DefaultToggleSwitch, extends_default()({
    groupName: "clouds",
    options: ["aws", "azure"],
    selectedValue: props.state.cloud
  }, props)); // return (
  //     <div className='radio-group-container'>
  //         <div className="radio-group">
  //             <CloudToggles
  //                 clouds={["aws", "azure"]}
  //                 {...props} />
  //         </div>
  //     </div>
  // );
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/autoloader/options.js


var autoloaderInitialState = {
  format: "csv",
  loadPath: null,
  schemaLocationPath: null,
  trigger_once: true,
  processing_time: {
    qty: null,
    units: null
  },
  include_existing_files: true,
  infer_column_types: false,
  schemaEvolutionMode: "addNewColumns",
  schema: true,
  schemaHints: false,
  schemaLocation: false,
  validateOptions: true,
  fileNotifications: false,
  fetchParallelism: 1,
  useDatabricksManagedQueues: true,
  azureQueueName: null,
  awsQueueUrl: null,
  scalaCode: null,
  pythonCode: null,
  cloud: "aws",
  awsAuthentication: "iamUser",
  iamUserAuth: {
    accessKey: null,
    secretKeyScope: null,
    secretKeyKey: null
  },
  iamRoleAuth: {
    roleArn: null,
    roleExternalId: null,
    roleSessionName: null,
    stsEndpoint: null
  },
  servicePrincipalAuth: {
    clientId: null,
    clientSecretScope: null,
    clientSecretKey: null,
    connectionString: null,
    resourceGroup: null,
    subscriptionId: null,
    tenantId: null
  }
};
var customQueueInitialState = {
  useDatabricksManagedQueues: true,
  azureQueueName: null
};

function pythonBuilder(indent) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.map(function (builderFunc, idx) {
    return "  .".concat(builderFunc.name, "(\"").concat(builderFunc.key, "\", ").concat(builderFunc.value, ")");
  }).reduce(function (l, r) {
    return l + " \n" + r;
  });
}

function pythonOptionsBuilder() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var options = args.map(function (option, index) {
    var val = option.stringify === true ? "\"" + option.value + "\"" : option.value;
    return {
      name: "option",
      key: option.key,
      value: val
    };
  });
  return pythonBuilder.apply(void 0, [null].concat(toConsumableArray_default()(options)));
}

function pythonVariables() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return args.filter(function (e) {
    return e != null;
  }).map(function (variable, idx) {
    return "".concat(variable.comment, "\n").concat(variable.name, "=").concat(variable.value);
  }).reduce(function (l, r) {
    return l + "\n\n" + r;
  });
}

function onlyIf(any, bool, list) {
  if (list === true) {
    return bool === true ? any : [null];
  }

  return bool === true ? any : null;
}

function schemaString(state, schemaVarName) {
  if (state.schema === false && ["csv", "json"].includes(state.format)) {
    return "";
  }

  return "  .schema(".concat(schemaVarName, ") \n");
}

function loadString(loadPathVarName) {
  return "  .load(".concat(loadPathVarName, ")");
}

function strIsNotEmpty(str) {
  return str != null && str.length > 0;
}

function dbSecrets(scopeVar, keyVar) {
  return "dbutils.secrets.get(scope=".concat(scopeVar, ", key=").concat(keyVar, ")");
}

function buildPythonFromAutoLoaderState(state) {
  var schemaVar = "provided_schema";
  var schemaPathVar = "inferred_schema_path";
  var schemaHints = "schema_hints_str";
  var loadPathVar = "src_autoload_path";
  var servicePrincipalScopeName = "service_principal_scope_name";
  var servicePrincipalScopeKeyName = "service_principal_scope_key_name";
  var iamUserSecretScopeName = "iam_secret_scope_name";
  var iamUserSecretScopeKeyName = "iam_secret_scope_key_name";
  var useAzureDatabricksManagedNotifications = state.useDatabricksManagedQueues === true && state.fileNotifications === true && isAzure(state.cloud);
  var useAwsDatabricksManagedNotifications = state.useDatabricksManagedQueues === true && state.fileNotifications === true && isAws(state.cloud);
  var variables = pythonVariables({
    comment: "# setup schema using struct types or string syntax",
    name: schemaVar,
    value: "'<build schema object here>'"
  }, {
    comment: "# setup autoloader source path for dir listing or events",
    name: loadPathVar,
    value: "'".concat(state.loadPath, "'")
  }, onlyIf({
    comment: "# setup path in cloud storage where to store schema inference path for schema evolution",
    name: schemaPathVar,
    value: "'".concat(state.schemaLocationPath, "'")
  }, strIsNotEmpty(state.schemaLocationPath)), onlyIf({
    comment: "# secret scope name for azure service principal for autoloader",
    name: servicePrincipalScopeName,
    value: "'".concat(state.servicePrincipalAuth.clientSecretScope, "'")
  }, useAzureDatabricksManagedNotifications === true), onlyIf({
    comment: "# secret scope key name for azure service principal for autoloader",
    name: servicePrincipalScopeKeyName,
    value: "'".concat(state.servicePrincipalAuth.clientSecretKey, "'")
  }, useAzureDatabricksManagedNotifications === true), onlyIf({
    comment: "# secret scope name for iam user secret key for autoloader",
    name: iamUserSecretScopeName,
    value: "'".concat(state.iamUserAuth.secretKeyScope, "'")
  }, useAwsDatabricksManagedNotifications === true && state.awsAuthentication === "iamUser"), onlyIf({
    comment: "# secret scope key name for iam user secret key for autoloader",
    name: iamUserSecretScopeKeyName,
    value: "'".concat(state.iamUserAuth.secretKeyKey, "'")
  }, useAwsDatabricksManagedNotifications === true && state.awsAuthentication === "iamUser"));

  var awsIamUserAuthOptions = toConsumableArray_default()(onlyIf([{
    key: "cloudFiles.awsAccessKey",
    value: state.iamUserAuth.accessKey,
    stringify: true
  }, {
    key: "cloudFiles.awsSecretKey",
    value: dbSecrets(iamUserSecretScopeName, iamUserSecretScopeKeyName),
    stringify: false
  }], state.awsAuthentication === "iamUser" && useAwsDatabricksManagedNotifications, true)); // onlyIf({key: "cloudFiles.awsSecretKey", value: state.iamUserAuth.secretKey, stringify: true},
  //     state.awsAuthentication === "iamUser" && useAwsDatabricksManagedNotifications),


  var awsIamRoleAuthOptions = toConsumableArray_default()(onlyIf([onlyIf({
    key: "cloudFiles.roleArn",
    value: state.iamRoleAuth.roleArn,
    stringify: true
  }, state.awsAuthentication === "iamRole"), onlyIf({
    key: "cloudFiles.roleExternalId",
    value: state.iamRoleAuth.roleExternalId,
    stringify: true
  }, state.awsAuthentication === "iamRole" && strIsNotEmpty(state.iamRoleAuth.roleExternalId)), onlyIf({
    key: "cloudFiles.roleSessionName",
    value: state.iamRoleAuth.roleSessionName,
    stringify: true
  }, state.awsAuthentication === "iamRole" && strIsNotEmpty(state.iamRoleAuth.roleSessionName)), onlyIf({
    key: "cloudFiles.stsEndpoint",
    value: state.iamRoleAuth.stsEndpoint,
    stringify: true
  }, state.awsAuthentication === "iamRole" && strIsNotEmpty(state.iamRoleAuth.stsEndpoint))], useAwsDatabricksManagedNotifications, true));

  var azureSPAuthOptions = toConsumableArray_default()(onlyIf([{
    key: "cloudFiles.clientId",
    value: state.servicePrincipalAuth.clientId,
    stringify: true
  }, {
    key: "cloudFiles.clientSecret",
    value: dbSecrets(servicePrincipalScopeName, servicePrincipalScopeKeyName),
    stringify: false
  }, onlyIf({
    key: "cloudFiles.connectionString",
    value: state.servicePrincipalAuth.connectionString,
    stringify: true
  }, strIsNotEmpty(state.servicePrincipalAuth.connectionString)), {
    key: "cloudFiles.resourceGroup",
    value: state.servicePrincipalAuth.resourceGroup,
    stringify: true
  }, {
    key: "cloudFiles.subscriptionId",
    value: state.servicePrincipalAuth.subscriptionId,
    stringify: true
  }, {
    key: "cloudFiles.tenantId",
    value: state.servicePrincipalAuth.tenantId,
    stringify: true
  }], useAzureDatabricksManagedNotifications, true));

  var options = [// format
  {
    key: "cloudFiles.format",
    value: state.format,
    stringify: true
  }, {
    key: "cloudFiles.includeExistingFiles",
    value: state.include_existing_files,
    stringify: true
  }, onlyIf({
    key: "cloudFiles.inferColumnTypes",
    value: state.infer_column_types,
    stringify: true
  }, state.infer_column_types === true), onlyIf({
    key: "cloudFiles.schemaEvolutionMode",
    value: state.schemaEvolutionMode,
    stringify: true
  }, ["csv", "json"].includes(state.format)), onlyIf({
    key: "cloudFiles.schemaLocation",
    value: schemaPathVar,
    stringify: false
  }, state.schemaLocation === true), onlyIf({
    key: "cloudFiles.schemaHints",
    value: schemaHints,
    stringify: false
  }, state.schemaHints === true), onlyIf({
    key: "cloudFiles.useNotifications",
    value: state.fileNotifications,
    stringify: true
  }, state.fileNotifications === true), onlyIf({
    key: "cloudFiles.queueName",
    value: state.azureQueueName,
    stringify: true
  }, state.useDatabricksManagedQueues === false && isAzure(state.cloud)), onlyIf({
    key: "cloudFiles.queueUrl",
    value: state.awsQueueUrl,
    stringify: true
  }, state.useDatabricksManagedQueues === false && isAws(state.cloud))].concat(toConsumableArray_default()(awsIamUserAuthOptions), toConsumableArray_default()(awsIamRoleAuthOptions), toConsumableArray_default()(azureSPAuthOptions), [{
    key: "cloudFiles.validateOptions",
    value: true,
    stringify: true
  }]).filter(function (e) {
    return e != null;
  });
  return variables + "\n\n" + "autoloader_df = (spark.readStream.format('cloudFiles') \n" + schemaString(state, schemaVar) + pythonOptionsBuilder.apply(void 0, toConsumableArray_default()(options)) + " \n" + loadString(loadPathVar) + ")";
}
// EXTERNAL MODULE: external "react-select/creatable"
var creatable_ = __webpack_require__(29);
var creatable_default = /*#__PURE__*/__webpack_require__.n(creatable_);

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/CheckBox.js

function CheckBox(props) {
  return /*#__PURE__*/external_react_default.a.createElement("span", {
    hidden: props.hidden
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "checkbox",
    id: props.id,
    checked: props.checked,
    value: props.checked,
    onChange: function onChange(s) {
      props.onChange();
    }
  }), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: props.id
  }, "\xA0\xA0", props.name));
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/autoloader/TriggerOptions.js





var processTimeUnitOptions = [{
  value: "minutes",
  label: "minutes"
}, {
  value: "seconds",
  label: "seconds"
}];
var processTimeQtyOptions = [{
  value: "5",
  label: "5"
}, {
  value: "10",
  label: "10"
}, {
  value: "15",
  label: "15"
}, {
  value: "30",
  label: "30"
}, {
  value: "45",
  label: "45"
}, {
  value: "60",
  label: "60"
}];

function AutoloaderTriggerOptions(props) {
  // const Checkbox = props => <input type="checkbox" {...props} />;
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: false,
    id: "batch",
    name: "Ingest Data in a Scheduled Batch?",
    checked: props.aLoaderConfig.trigger_once,
    onChange: function onChange() {
      props.setALoaderConfig({
        trigger_once: !props.aLoaderConfig.trigger_once,
        processing_time: {
          qty: null,
          units: null
        }
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", {
    hidden: props.aLoaderConfig.trigger_once
  }), /*#__PURE__*/external_react_default.a.createElement("br", {
    hidden: props.aLoaderConfig.trigger_once
  }), /*#__PURE__*/external_react_default.a.createElement("p", {
    hidden: props.aLoaderConfig.trigger_once
  }, "Stream ingest data every:"), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Container"], {
    hidden: props.aLoaderConfig.trigger_once
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement(creatable_default.a, {
    isClearable: true,
    options: processTimeQtyOptions,
    onChange: function onChange(e) {
      if (e == null) {
        //return null value for qty because the value was cleared
        props.setALoaderConfig({
          processing_time: {
            qty: null,
            units: null
          }
        });
        return;
      }

      props.setALoaderConfig({
        processing_time: {
          qty: e.value,
          units: props.aLoaderConfig.processing_time.units
        }
      });
    }
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_select_default.a, {
    options: processTimeUnitOptions,
    onChange: function onChange(e) {
      return props.setALoaderConfig({
        processing_time: {
          qty: props.aLoaderConfig.processing_time.qty,
          units: e.value
        }
      });
    }
  })))));
}

/* harmony default export */ var TriggerOptions = (AutoloaderTriggerOptions);
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/codeSection/Codeblock.js



function CodeBlock(props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Button_default.a, {
    disabled: true
  }, " Copy "), /*#__PURE__*/external_react_default.a.createElement(external_react_ace_default.a, {
    mode: props.language,
    theme: "textmate",
    onChange: props.onChange,
    name: "defaultEditor" + props.language,
    width: "100%",
    height: props.height,
    value: (props.language !== "python" ? JSON.stringify(props.state, null, 2) : "") + "\n" + props.codeMap[props.language],
    editorProps: {
      $blockScrolling: true
    },
    setOptions: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }
  }));
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/codeSection/CodeAccordian.js



function CodeAccordian(props) {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"], {
    defaultActiveKey: "0"
  }, props.languages.map(function (lang, idx) {
    return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Item, {
      eventKey: idx.toString()
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Header, null, " ", lang.toUpperCase(), " Code "), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Body, null, /*#__PURE__*/external_react_default.a.createElement(CodeBlock, {
      onChange: props.onChange,
      height: props.height,
      language: lang,
      state: props.state,
      codeMap: props.codeMap
    })));
  }));
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/TextInput.js

function TextInput(props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "form__group",
    hidden: props.hidden
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    className: "form__field",
    placeholder: props.name,
    name: props.name,
    id: props.id,
    value: props.value,
    onChange: function onChange(e) {
      props.onChange(e);
    }
  }), /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "form__label",
    htmlFor: props.id
  }, props.name));
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/DividerTopic.js

function DividerTopic(props) {
  return /*#__PURE__*/external_react_default.a.createElement("h4", {
    className: "divider line double-razor"
  }, " ", props.content, " ");
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/autoloader/AutoLoaderSchemaOptions.js





var autoloaderSchemaEvolutionFormats = ["csv", "json"];
var schemaEvolutionOptions = [{
  value: 'addNewColumns',
  label: 'Add New Columns'
}, {
  value: 'failOnNewColumns',
  label: 'Fail On New Columns'
}, {
  value: 'rescue',
  label: 'Capture failures in Rescue Column'
}, {
  value: 'none',
  label: 'Ignore all New Columns'
}];

function SchemaLocation(props) {
  if (props.aLoaderConfig.schemaLocation === false) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement(TextInput, {
    hidden: false,
    id: "schemaLocation",
    name: "Schema Location Path: ",
    value: props.aLoaderConfig.schemaLocationPath,
    onChange: function onChange(e) {
      return props.setALoaderConfig({
        schemaLocationPath: e.target.value
      });
    }
  });
}

function SchemaEvolutionOptions(props) {
  if (!autoloaderSchemaEvolutionFormats.includes(props.aLoaderConfig.format)) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("span", null, "How do you want to apply schema changes:", /*#__PURE__*/external_react_default.a.createElement(external_react_select_default.a, {
    defaultValue: // schemaEvolutionOptions[0]
    schemaEvolutionOptions.filter(function (v) {
      return v.value === props.aLoaderConfig.schemaEvolutionMode;
    })[0],
    options: schemaEvolutionOptions,
    onChange: function onChange(e) {
      return props.setALoaderConfig({
        schemaEvolutionMode: e.value
      });
    }
  }));
}

function AutoLoaderSchemaOptions(props) {
  if (!autoloaderSchemaEvolutionFormats.includes(props.aLoaderConfig.format)) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(DividerTopic, {
    content: "Schema Evolution"
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: false,
    id: "files-explicit schema",
    name: "Do you want to provide an explicit schema?",
    checked: props.aLoaderConfig.schema,
    onChange: function onChange() {
      if (!props.aLoaderConfig.schema === false) {
        props.setALoaderConfig({
          schemaLocation: true,
          schema: !props.aLoaderConfig.schema
        });
        return;
      }

      props.setALoaderConfig({
        schema: !props.aLoaderConfig.schema
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: false,
    id: "schemahints",
    name: "Do you want to provide an some schema hints?",
    checked: props.aLoaderConfig.schemaHints,
    onChange: function onChange() {
      return props.setALoaderConfig({
        schemaHints: !props.aLoaderConfig.schemaHints
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: false,
    id: "schemalocation",
    name: "Provide a schema location (required if not providing explicit schema)?",
    checked: props.aLoaderConfig.schemaLocation,
    onChange: function onChange() {
      if (props.aLoaderConfig.schema === false) {
        return;
      }

      props.setALoaderConfig({
        schemaLocation: !props.aLoaderConfig.schemaLocation
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(SchemaLocation, props), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(SchemaEvolutionOptions, props));
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/autoloader/AutoLoaderBaseOptions.js




function AutoLoaderBaseOptions(props) {
  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    id: "files-chkbox",
    name: "Do you want to process existing files?",
    defaultValue: props.aLoaderConfig.include_existing_files,
    checked: props.aLoaderConfig.include_existing_files,
    onChange: function onChange() {
      return props.setALoaderConfig({
        include_existing_files: !props.aLoaderConfig.include_existing_files
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(TextInput, {
    hidden: false,
    id: "loadPath",
    name: "Load Path: ",
    value: props.aLoaderConfig.loadPath,
    onChange: function onChange(e) {
      return props.setALoaderConfig({
        loadPath: e.target.value
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", {
    hidden: props.aLoaderConfig.format !== "json"
  }), /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: props.aLoaderConfig.format !== "json",
    id: "files-inferColumnTypes",
    name: "Do you want to infer the column types?",
    checked: props.aLoaderConfig.infer_column_types,
    onChange: function onChange() {
      return props.setALoaderConfig({
        infer_column_types: !props.aLoaderConfig.infer_column_types
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(AutoLoaderSchemaOptions, props));
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(30);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/components/autoloader/AutoLoaderFileNotificationOptions.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function AwsIamUserOptions(props) {
  if (props.aLoaderConfig.cloud !== "aws" || props.aLoaderConfig.awsAuthentication !== "iamUser") {
    return null;
  }

  var nestedKey = "iamUserAuth";
  var fields = [["accessKey", "IAM Access Key", nestedKey, props], ["secretKeyScope", "IAM Secret Key Databricks Secret Scope", nestedKey, props], ["secretKeyKey", "IAM Secret Key Databricks Secret Scope Key", nestedKey, props]];
  return /*#__PURE__*/external_react_default.a.createElement("span", null, fields.map(function (params) {
    return generateTextOptions.apply(void 0, toConsumableArray_default()(params));
  }));
}

function getNestedValuePayload(option, value, state, nestedKey) {
  var payload = {};

  var copyOfObj = _objectSpread({}, state[nestedKey]);

  Object.keys(copyOfObj).forEach(function (key) {
    return option === key ? copyOfObj[key] = value : null;
  });
  payload[nestedKey] = copyOfObj;
  return payload;
}

function generateTextOptions(name, label, nestedKey, props) {
  return /*#__PURE__*/external_react_default.a.createElement(TextInput, {
    hidden: false,
    id: name,
    name: label,
    value: props.aLoaderConfig[nestedKey][name],
    onChange: function onChange(e) {
      return props.setALoaderConfig(getNestedValuePayload(name, e.target.value, props.aLoaderConfig, nestedKey));
    }
  });
}

function AwsIamRoleOptions(props) {
  if (props.aLoaderConfig.cloud !== "aws" || props.aLoaderConfig.awsAuthentication !== "iamRole") {
    return null;
  }

  var nestedKey = "iamRoleAuth";
  var fields = [["roleArn", "IAM Role ARN", nestedKey, props], ["roleExternalId", "IAM Role External Id (optional)", nestedKey, props], ["roleSessionName", "IAM Role Session Name (optional)", nestedKey, props], ["stsEndpoint", "STS Endpoint (optional)", nestedKey, props]];
  return /*#__PURE__*/external_react_default.a.createElement("span", null, fields.map(function (params) {
    return generateTextOptions.apply(void 0, toConsumableArray_default()(params));
  }));
}

function AzureServicePrincipalOptions(props) {
  if (props.aLoaderConfig.cloud !== "azure") {
    return null;
  }

  var nestedKey = "servicePrincipalAuth";
  var fields = [["clientId", "Service Principal Client ID (application Id)", nestedKey, props], ["clientSecretScope", "Service Principal Secret Databricks Scope Name", nestedKey, props], ["clientSecretKey", "Service Principal Secret Databricks Scope Key Name", nestedKey, props], ["connectionString", "Connection String (optional in DBR 8.1)", nestedKey, props], ["resourceGroup", "Azure Storage Account Resource Group", nestedKey, props], ["subscriptionId", "Azure Resource Group Subscription", nestedKey, props], ["tenantId", "Azure Service Principal Tenant Id", nestedKey, props]];
  return /*#__PURE__*/external_react_default.a.createElement("span", null, fields.map(function (params) {
    return generateTextOptions.apply(void 0, toConsumableArray_default()(params));
  }));
}

function AwsAutoloaderAuthenticationOptions(props) {
  if (props.aLoaderConfig.cloud !== "aws") {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(DefaultToggleSwitch, extends_default()({
    groupName: "awsAuthOptions",
    alternativeTexts: ["IAM User (Programatic)", "IAM Role"],
    options: ["iamUser", "iamRole"],
    selectedValue: props.aLoaderConfig.awsAuthentication,
    setState: function setState(e) {
      return props.setALoaderConfig({
        awsAuthentication: e.target.value
      });
    }
  }, props)));
}

function CustomQueueNotificationOptions(props) {
  if (props.aLoaderConfig.useDatabricksManagedQueues === true || props.aLoaderConfig.cloud === "gcp") {
    return null;
  }

  var _ref = function (props) {
    if (props.aLoaderConfig.cloud === "azure") {
      var f = function f(e) {
        return props.setALoaderConfig({
          azureQueueName: e.target.value
        });
      };

      return ["Azure Queue Name: ", props.aLoaderConfig.azureQueueName, f];
    } else if (props.aLoaderConfig.cloud === "aws") {
      var _f = function _f(e) {
        return props.setALoaderConfig({
          awsQueueUrl: e.target.value
        });
      };

      return ["AWS SQS Url: ", props.aLoaderConfig.awsQueueUrl, _f];
    } else {
      return [null, null, function (e) {
        return e;
      }];
    }
  }(props),
      _ref2 = slicedToArray_default()(_ref, 3),
      name = _ref2[0],
      value = _ref2[1],
      changeFunc = _ref2[2];

  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(TextInput, {
    hidden: false,
    id: "queueContent",
    name: name,
    value: value,
    onChange: function onChange(e) {
      return changeFunc(e);
    }
  }));
}

function DatabricksManagedQueueOptions(props) {
  if (props.aLoaderConfig.useDatabricksManagedQueues === false) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(AwsAutoloaderAuthenticationOptions, props), /*#__PURE__*/external_react_default.a.createElement(AwsIamUserOptions, props), /*#__PURE__*/external_react_default.a.createElement(AwsIamRoleOptions, props), /*#__PURE__*/external_react_default.a.createElement(AzureServicePrincipalOptions, props));
}

function CloudSpecificNotificationOptions(props) {
  if (!props.aLoaderConfig.fileNotifications) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(DividerTopic, {
    content: "Cloud Specific Options"
  }), /*#__PURE__*/external_react_default.a.createElement(CloudSwitch, {
    state: props.aLoaderConfig,
    setState: function setState(e) {
      return props.setALoaderConfig({
        cloud: e.target.value
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: props.aLoaderConfig.cloud === "gcp",
    id: "customQueue",
    name: "Do you databricks to manage all file notifications?",
    checked: props.aLoaderConfig.useDatabricksManagedQueues,
    onChange: function onChange() {
      return props.setALoaderConfig({
        useDatabricksManagedQueues: !props.aLoaderConfig.useDatabricksManagedQueues
      });
    }
  }), /*#__PURE__*/external_react_default.a.createElement(CustomQueueNotificationOptions, props), /*#__PURE__*/external_react_default.a.createElement(DatabricksManagedQueueOptions, props));
}

function AutoLoaderFileNotificationOptions(props) {
  return /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(CheckBox, {
    hidden: false,
    id: "fileNotifications",
    name: "Do you want to use file notification triggers?",
    checked: props.aLoaderConfig.fileNotifications,
    onChange: function onChange() {
      return props.setALoaderConfig(_objectSpread({
        fileNotifications: !props.aLoaderConfig.fileNotifications
      }, customQueueInitialState));
    }
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(CloudSpecificNotificationOptions, props));
}
// CONCATENATED MODULE: /Users/Sri.Tikkireddy/PycharmProjects/interactive-db/src/pages/autoloader.js















function autoloader_onChange(newValue) {}

var useLegacyState = __webpack_require__(53);

function AutoLoader() {
  var _useLegacyState = useLegacyState(autoloaderInitialState),
      _useLegacyState2 = slicedToArray_default()(_useLegacyState, 2),
      state = _useLegacyState2[0],
      setALoaderConfig = _useLegacyState2[1];

  var _useState = Object(external_react_["useState"])(""),
      _useState2 = slicedToArray_default()(_useState, 2),
      pythonCode = _useState2[0],
      setPythonCode = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var pythonCode = buildPythonFromAutoLoaderState(state);
    setPythonCode(pythonCode);
  }, [state]);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Container"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"], {
    defaultActiveKey: "0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Item, {
    eventKey: "0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Header, null, " Basic settings"), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Body, null, /*#__PURE__*/external_react_default.a.createElement(FormatOptions, {
    setALoaderConfig: setALoaderConfig
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(AutoLoaderBaseOptions, {
    aLoaderConfig: state,
    setALoaderConfig: setALoaderConfig
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Item, {
    eventKey: "1"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Header, null, " Advanced Settings: File Notifications "), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Accordion"].Body, null, /*#__PURE__*/external_react_default.a.createElement(AutoLoaderFileNotificationOptions, {
    aLoaderConfig: state,
    setALoaderConfig: setALoaderConfig
  }))))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement(CodeAccordian, {
    onChange: autoloader_onChange,
    height: "500px",
    state: state,
    languages: ["python", "scala", "sql"],
    codeMap: {
      "python": pythonCode,
      "scala": pythonCode,
      "sql": pythonCode
    }
  }))));
}

/* harmony default export */ var autoloader = __webpack_exports__["default"] = (AutoLoader);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(9);

var _router = __webpack_require__(11);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-select/creatable");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(34);
module.exports = __webpack_require__(41);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(33)["default"];

var _require = __webpack_require__(18),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(18),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(35),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);








Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/autoloader.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/autoloader */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/autoloader.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/autoloader";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/autoloader.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/autoloader.js': t_1,
  '__react_static_root__/src/pages/index.js': t_2
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(14);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 8,
	"./": 8,
	"./index": 8,
	"./index.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(20);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(22);

var _interopRequireWildcard = __webpack_require__(23);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(42);

var _Suspense = _interopRequireDefault(__webpack_require__(43));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(45)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("/Users/Sri.Tikkireddy/PycharmProjects/interactive-db/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(23);

var _interopRequireDefault = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(5));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(44));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n\n.accordion-button.collapsed {\n  background: #e6e6e6;\n}\n\n.divider {\n  display: flex;\n}\n.divider:before, .divider:after {\n  content: \"\";\n  flex: 1 1;\n}\n\n.line {\n  align-items: center;\n  margin: 1em -1em;\n}\n.line:before, .line:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.double-razor:before, .double-razor:after {\n  height: 3px;\n  box-shadow: 0 -0.5px 0 black, 0 0.5px 0 black;\n  border-width: 0;\n}\n\n.form__field {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid #9b9b9b;\n  outline: 0;\n  font-size: 1.3rem;\n  color: black;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n.form__field:-ms-input-placeholder {\n  color: transparent;\n}\n.form__field::placeholder {\n  color: transparent;\n}\n.form__field:-moz-placeholder-shown ~ .form__label {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n.form__field:-ms-input-placeholder ~ .form__label {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n\n.form__group {\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  width: 100%;\n}\n\n.form__label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #9b9b9b;\n}\n\n.form__field:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  -o-border-image: linear-gradient(to right, #11998e, #38ef7d);\n     border-image: linear-gradient(to right, #11998e, #38ef7d);\n  border-image-slice: 1;\n}\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #11998e;\n  font-weight: 700;\n}\n\n/* reset input */\n.form__field:required, .form__field:invalid {\n  box-shadow: none;\n}\n\ninput[type=radio] {\n  position: absolute;\n  visibility: hidden;\n  display: none;\n}\n\n.cloudLabel {\n  color: #4d8ce3;\n  display: inline-block;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 5px 20px;\n}\n\ninput[type=radio]:checked + label {\n  color: white;\n  background: #79a9ea;\n}\n\n.cloudLabel + input[type=radio] + .cloudLabel {\n  border-left: solid 3px #79a9ea;\n}\n\n.radio-group-container {\n  display: flex;\n  justify-content: center;\n}\n\n.radio-group {\n  border: solid 3px #79a9ea;\n  display: inline-block;\n  margin: 20px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n", ""]);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/mode-python");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/theme-textmate");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/ext-language_tools");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("use-legacy-state");

/***/ })
/******/ ]);
});