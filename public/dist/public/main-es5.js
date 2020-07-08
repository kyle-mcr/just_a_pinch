function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<html lang=\"en\">\n\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <link href='http://fonts.googleapis.com/css?family=Oleo+Script' rel='stylesheet' type='text/css'>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n            integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n        <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\n            integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n            crossorigin=\"anonymous\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\n            integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\n            crossorigin=\"anonymous\"></script>\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\n            integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\n            crossorigin=\"anonymous\"></script>\n        <title>Document</title>\n    </head>\n    \n    <body>\n    \n        <router-outlet></router-outlet>\n    \n    </body>\n    \n    </html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"head\">\n        <h4 id=\"title\">What Ingredients Do You Have?</h4>\n        <button id=\"btnd\" class=\"btn btn-danger float-right\" (click)=\"resetToFalse()\">reset</button>\n    </div>\n    <div class=\"main\">\n    <form ngForm #checkForm=\"ngForm\" (submit)=\"getClicked(checkForm)\">\n        <div class=\"accordion d-inline-block\" id=\"accordionExample\">\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingOne\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n                        aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                        Baking and Grain\n                    </button>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                        <div *ngFor=\"let i of igs[0]\">\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingTwo\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\n                        aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n                        Sweeteners and Spices\n                    </button>\n                </div>\n\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                        <div *ngFor=\"let i of igs[1]\">\n\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingThree\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\n                        aria-expanded=\"true\" aria-controls=\"collapseThree\">\n                        Dairy\n                    </button>\n                </div>\n\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                        <div *ngFor=\"let i of igs[2]\">\n\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingFour\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFour\"\n                        aria-expanded=\"true\" aria-controls=\"collapseFour\">\n                        Misc\n                    </button>\n                </div>\n\n                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                        <div *ngFor=\"let i of igs[3]\">\n\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\n                        </div>\n                    </div>\n                </div>\n                <button id=\"subbtn\" type=\"submit\">Submit</button>\n            </div>\n        </div>\n        <div *ngIf=\"recipesFound\" class=\"results pb-4\">\n            <h4 id=\"title\" class=\"display-4 ml-4\">Recipes!</h4>\n            <div *ngFor=\"let i of recipesFound\" class=\"result mt-2 ml-4\">\n                <h5>{{i.title}}</h5>\n                <div class=\"ingredss\">\n                    <img *ngIf=\"i.thumbnail\" src=\"{{i.thumbnail}}\" alt=\"\">\n                    <img *ngIf=\"!i.thumbnail\"\n                        src=\"http://lehighvalleymarketplace.com/wp-content/uploads/2010/11/bakingbasics.jpg\" alt=\"\">\n                    <p id=\"ing_list\"><b id=\"ings\">Ingredients needed:</b> {{i.ingredients}}</p>\n\n                </div>\n                <a href=\"{{i.href}}\" target=\"_blank\">link to recipe</a>\n                <hr class=\"mt-1\">\n            </div>\n        </div>\n    </form>\n    </div>\n\n\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Dessert Recipes!';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/http.service.ts"); // <-- import FormsModule.


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0;\n  padding: 0;\n}\n.head h4, .head button{\n  display: inline-block;\n}\n.head button{\n  width: 90px;\n}\n#subbtn{\n  width: 250px;\n margin: auto;\n }\n#btnd{\n  position:absolute; top:0; right:0;\n  margin:1%;\n  padding: 1px;\n }\nimg{\n   margin-bottom:10px;\n }\n#ing_list{\n   width:80%;\n }\n#subbtn {\n  background:linear-gradient(to bottom, #E5BA9C 50%, rgb(144, 124, 118) 100%);\n  border-radius:4px;\n  border:1px solid #d6bcd6;\n  display:inline-block;\n  cursor:pointer;\n  color:#4a402b;\n  font-family:Arial;\n  font-size:22px;\n  padding:7px 25px;\n  text-decoration:none;\n  width: 93%;\n }\n#subbtn:hover {\n  background:linear-gradient(to bottom,rgb(128, 103, 96) 10%, #E5BA9C 100%);\n  border:1px solid #E5BA9C;\n }\n#subbtn:active {\n  position:relative;\n  top:1px;\n }\n#subbtn:active {\n  position:relative;\n  top:1px;\n}\n.container {\npadding:5%;\nmargin-left: 0px;\n}\n.main{\n  margin-top: 3%;\n  margin-left: 3%;\n}\n.main button {\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\n\tbackground-color:#ededed;\n\tborder-radius:4px;\n\tborder:1px solid #d6bcd6;\n\tdisplay:inline-block;\n\tcursor:pointer;\n  color:#4a402b;\n  text-decoration: none;\n\tfont-family:Arial;\n\tfont-size:17px;\n\tpadding:7px 25px;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #e1e2ed;\n    width: 100%;\n    \n}\n.main button:hover {\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\n  background-color:#bab1ba;\n  text-decoration: none;\n\n}\n.main button:active {\n\tposition:relative;\n  top:1px;\n  text-decoration: none;\n\n}\n.form-check{\n    display: inline-block;\n    margin-left:2%;\n}\n.form-check:hover {\n\tbackground:linear-gradient(to bottom, #e9fff0 5%, #ededed 100%);\n    background-color:#fafffc;\n    border-radius: 5px;\n}\n.card{\n  background: rgb(255, 245, 245, 0.4);\n}\n.card-body{\n  font-size: 20px;\n  color: #4a402b;\n  font-weight: bold;\n  background: rgb(243, 232, 232,0.45);\n}\n#title{\n    font: 400 50px/1 'Oleo Script', Helvetica, sans-serif;\n    color: white;\n    font-size: 4vh;\n    text-shadow: 4px 4px 0px rgba(0,0,0,0.1);\n    margin-left: 3%;\n    text-shadow: 2px 2px 1px rgba(206,89,55,0.47);\n    margin-bottom:1px;\n  }\n.accordion{\n    width: 35%;\n    background-size: cover;\n    display: inline-block;\n  }\n#ings{\n    margin-top: 10px;\n  }\n.result{\n    display: inline-block;\n    width: 45%;\n    vertical-align: top;\n  }\n.results{\n    width:60%;\n    background-color: rgba(255, 255, 255, 0.452);\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 2%;\n    margin-top: 1%;\n    margin-bottom: 2%;\n  }\n.results img{\n    height: 130px;\n    width: 130px;\n    border-radius: 20px;\n  }\n.result a{\n    background:linear-gradient(to bottom, #E5BA9C 15%, rgb(165, 141, 135) 100%);\n     border-radius:4px;\n     border:1px solid #d6bcd6;\n     display:inline-block;\n    cursor:pointer;\n    color:#4a402b;\n  text-decoration: none;\n     font-family:Arial;\n    text-shadow:0px 1px 0px #e1e2ed;\n    padding: 1px 18px 1px 18px;\n    margin-top: 2%;\n    text-decoration: none;\n  }\n.result a:hover {\n    background:linear-gradient(to bottom, rgb(182, 147, 137) 15%, #E5BA9C 100%);\n    border:1px solid #E5BA9C;\n    text-decoration: none;\n    color:#4a402b;\n  }\n.result a:active {\n    position:relative;\n    top:1px;\n  }\n.result p, .result img{\n    vertical-align: top;\n    display: inline-block;\n  }\n.result p{\n    margin-top: -10px;\n    width: 50%;\n    font-size: 16px;\n    margin-left: 2%;\n  }\n.result h5{\n    font-size: 21px;\n    height: 55px;\n    margin-top: 3%;\n  }\n.ingredss{\n    margin-bottom: 3%;\n  }\n@media only screen and (max-width: 480px) {\n  #btnd{\n    display:none;\n  }\n    .accordion{\n        width:100%;\n    }\n    .results{\n      width: 100%;\n      margin-left: 0%;\n    }\n    .result{\n      width: 90%;\n    }\n    .results h5{\n      font-size: 26px;\n      height: 62px;\n      padding:1%;\n      margin-bottom: 2%;\n    }\n    .results p{\n      width: 100%;\n    }\n    .result p{\n      margin-top: 0;\n      font-size: 18px;\n\n    }\n\n  \n  h4{\n    font: 400 40px/1 'Oleo Script', Helvetica, sans-serif;\n    color: #2b2b2b;\n    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.47);\n    padding-top: 2%;\n    margin-bottom:2px;\n  }\n\n}\n@media only screen and (min-width: 480px) and (max-width: 1080px) {\n    .container {\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: 100vh;\n    }\n     #ing_list{\n   width:80%;\n }\n    .accordion{\n        width:85%;\n        font-size: 20px;\n    }\n    .accordion button{\n      font-size: 23px;\n    }\n    .container h4{\n        font-size: 65px;\n    }\n    .results{\n      width: 85%;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtDQUNiLFlBQVk7Q0FDWjtBQUNBO0VBQ0MsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE9BQU87RUFDakMsU0FBUztFQUNULFlBQVk7Q0FDYjtBQUNBO0dBQ0Usa0JBQWtCO0NBQ3BCO0FBQ0E7R0FDRSxTQUFTO0NBQ1g7QUFDQTtFQUNDLDJFQUEyRTtFQUMzRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0NBQ1g7QUFDQTtFQUNDLHlFQUF5RTtFQUN6RSx3QkFBd0I7Q0FDekI7QUFDQTtFQUNDLGlCQUFpQjtFQUNqQixPQUFPO0NBQ1I7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixPQUFPO0FBQ1Q7QUFDQTtBQUNBLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7Q0FDQywrREFBK0Q7Q0FDL0Qsd0JBQXdCO0NBQ3hCLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGNBQWM7RUFDYixhQUFhO0VBQ2IscUJBQXFCO0NBQ3RCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtJQUNqQiwrQkFBK0I7SUFDL0IsV0FBVzs7QUFFZjtBQUNBO0NBQ0MsK0RBQStEO0VBQzlELHdCQUF3QjtFQUN4QixxQkFBcUI7O0FBRXZCO0FBQ0E7Q0FDQyxpQkFBaUI7RUFDaEIsT0FBTztFQUNQLHFCQUFxQjs7QUFFdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7Q0FDQywrREFBK0Q7SUFDNUQsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQ0FBbUM7QUFDckM7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osY0FBYztJQUNkLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsNkNBQTZDO0lBQzdDLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLDJFQUEyRTtLQUMxRSxpQkFBaUI7S0FDakIsd0JBQXdCO0tBQ3hCLG9CQUFvQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtFQUNmLHFCQUFxQjtLQUNsQixpQkFBaUI7SUFDbEIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSwyRUFBMkU7SUFDM0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixPQUFPO0VBQ1Q7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBRUY7RUFDRTtJQUNFLFlBQVk7RUFDZDtJQUNFO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7TUFDRSxXQUFXO01BQ1gsZUFBZTtJQUNqQjtJQUNBO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxlQUFlO01BQ2YsWUFBWTtNQUNaLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLGVBQWU7O0lBRWpCOzs7RUFHRjtJQUNFLHFEQUFxRDtJQUNyRCxjQUFjO0lBQ2Qsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUY7QUFDQTtJQUNJO1FBQ0ksa0NBQWtDO1FBQ2xDLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsYUFBYTtJQUNqQjtLQUNDO0dBQ0YsU0FBUztDQUNYO0lBQ0c7UUFDSSxTQUFTO1FBQ1QsZUFBZTtJQUNuQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO01BQ0UsVUFBVTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uaGVhZCBoNCwgLmhlYWQgYnV0dG9ue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGVhZCBidXR0b257XG4gIHdpZHRoOiA5MHB4O1xufVxuI3N1YmJ0bntcbiAgd2lkdGg6IDI1MHB4O1xuIG1hcmdpbjogYXV0bztcbiB9XG4gI2J0bmR7XG4gIHBvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgcmlnaHQ6MDtcbiAgbWFyZ2luOjElO1xuICBwYWRkaW5nOiAxcHg7XG4gfVxuIGltZ3tcbiAgIG1hcmdpbi1ib3R0b206MTBweDtcbiB9XG4gI2luZ19saXN0e1xuICAgd2lkdGg6ODAlO1xuIH1cbiAjc3ViYnRuIHtcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRTVCQTlDIDUwJSwgcmdiKDE0NCwgMTI0LCAxMTgpIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOjRweDtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZDZiY2Q2O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGNvbG9yOiM0YTQwMmI7XG4gIGZvbnQtZmFtaWx5OkFyaWFsO1xuICBmb250LXNpemU6MjJweDtcbiAgcGFkZGluZzo3cHggMjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIHdpZHRoOiA5MyU7XG4gfVxuICNzdWJidG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiKDEyOCwgMTAzLCA5NikgMTAlLCAjRTVCQTlDIDEwMCUpO1xuICBib3JkZXI6MXB4IHNvbGlkICNFNUJBOUM7XG4gfVxuICNzdWJidG46YWN0aXZlIHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDoxcHg7XG4gfVxuI3N1YmJ0bjphY3RpdmUge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjFweDtcbn1cbi5jb250YWluZXIge1xucGFkZGluZzo1JTtcbm1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWFpbntcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLm1haW4gYnV0dG9uIHtcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWRlZGVkIDUlLCAjYmFiMWJhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlZGVkZWQ7XG5cdGJvcmRlci1yYWRpdXM6NHB4O1xuXHRib3JkZXI6MXB4IHNvbGlkICNkNmJjZDY7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRjdXJzb3I6cG9pbnRlcjtcbiAgY29sb3I6IzRhNDAyYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LWZhbWlseTpBcmlhbDtcblx0Zm9udC1zaXplOjE3cHg7XG5cdHBhZGRpbmc6N3B4IDI1cHg7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIHRleHQtc2hhZG93OjBweCAxcHggMHB4ICNlMWUyZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG4ubWFpbiBidXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiYWIxYmEgNSUsICNlZGVkZWQgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6I2JhYjFiYTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG59XG4ubWFpbiBidXR0b246YWN0aXZlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDoxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuLmZvcm0tY2hlY2t7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xufVxuLmZvcm0tY2hlY2s6aG92ZXIge1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlOWZmZjAgNSUsICNlZGVkZWQgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmFmZmZjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0gXG4uY2FyZHtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjQ1LCAyNDUsIDAuNCk7XG59XG4uY2FyZC1ib2R5e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNGE0MDJiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogcmdiKDI0MywgMjMyLCAyMzIsMC40NSk7XG59XG4jdGl0bGV7XG4gICAgZm9udDogNDAwIDUwcHgvMSAnT2xlbyBTY3JpcHQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDFweCByZ2JhKDIwNiw4OSw1NSwwLjQ3KTtcbiAgICBtYXJnaW4tYm90dG9tOjFweDtcbiAgfVxuXG4gIC5hY2NvcmRpb257XG4gICAgd2lkdGg6IDM1JTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAjaW5nc3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5yZXN1bHR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICAucmVzdWx0c3tcbiAgICB3aWR0aDo2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1Mik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICB9XG4gIC5yZXN1bHRzIGltZ3tcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIC5yZXN1bHQgYXtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNFNUJBOUMgMTUlLCByZ2IoMTY1LCAxNDEsIDEzNSkgMTAwJSk7XG4gICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgICBib3JkZXI6MXB4IHNvbGlkICNkNmJjZDY7XG4gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGNvbG9yOiM0YTQwMmI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgZm9udC1mYW1pbHk6QXJpYWw7XG4gICAgdGV4dC1zaGFkb3c6MHB4IDFweCAwcHggI2UxZTJlZDtcbiAgICBwYWRkaW5nOiAxcHggMThweCAxcHggMThweDtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnJlc3VsdCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxODIsIDE0NywgMTM3KSAxNSUsICNFNUJBOUMgMTAwJSk7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRTVCQTlDO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjojNGE0MDJiO1xuICB9XG4gIC5yZXN1bHQgYTphY3RpdmUge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHRvcDoxcHg7XG4gIH1cbiAgLnJlc3VsdCBwLCAucmVzdWx0IGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucmVzdWx0IHB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICB9XG4gIC5yZXN1bHQgaDV7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgfVxuICAuaW5ncmVkc3N7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAjYnRuZHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgICAuYWNjb3JkaW9ue1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICAucmVzdWx0c3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIH1cbiAgICAucmVzdWx0e1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLnJlc3VsdHMgaDV7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICBwYWRkaW5nOjElO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgfVxuICAgIC5yZXN1bHRzIHB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnJlc3VsdCBwe1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgIH1cblxuICBcbiAgaDR7XG4gICAgZm9udDogNDAwIDQwcHgvMSAnT2xlbyBTY3JpcHQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMyYjJiMmI7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40Nyk7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206MnB4O1xuICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB9XG4gICAgICNpbmdfbGlzdHtcbiAgIHdpZHRoOjgwJTtcbiB9XG4gICAgLmFjY29yZGlvbntcbiAgICAgICAgd2lkdGg6ODUlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5hY2NvcmRpb24gYnV0dG9ue1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIGg0e1xuICAgICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgfVxuICAgIC5yZXN1bHRze1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(http, router, route) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.router = router;
        this.route = route;
        this.igs = [[{
          name: "All Purpose Flour",
          value: "flour"
        }, {
          name: "Baking Soda",
          value: "baking soda"
        }, {
          name: "Baking Powder",
          value: "baking powder"
        }, {
          name: "Rolled Oats",
          value: "rolled oat"
        }, {
          name: "Yeast",
          value: "yeast"
        }, {
          name: "Cornstarch",
          value: "cornstarch"
        }, {
          name: "Cake Mix",
          value: "cake mix"
        }, {
          name: "Coconut Flakes",
          value: "flaked coconut"
        }, {
          name: "Cocoa Powder",
          value: "cocoa powder"
        }, {
          name: "Nuts",
          value: "nuts"
        }, {
          name: "Vanilla Extract",
          value: "vanilla extract"
        }], [{
          name: "Sugar",
          value: "sugar"
        }, {
          name: "Brown Sugar",
          value: "brown sugar"
        }, {
          name: "Powdered Sugar",
          value: " powdered sugar"
        }, {
          name: "Cinnamon",
          value: "cinnamon"
        }, {
          name: "Nutmeg",
          value: "nutmeg"
        }, {
          name: "Ginger",
          value: "ginger"
        }, {
          name: "Honey",
          value: "honey"
        }, {
          name: "Maple Syrup",
          value: "maple syrup"
        }, {
          name: "Molasses",
          value: "molasses"
        }, {
          name: "Agave Nectar",
          value: "agave nectar"
        }, {
          name: "Corn Syrup",
          value: "corn syrup"
        }, {
          name: "Artificial Sweetener",
          value: "sugar substitute"
        }], [{
          name: "Butter",
          value: "butter"
        }, {
          name: "Margarine",
          value: "margarine"
        }, {
          name: "Eggs",
          value: "eggs"
        }, {
          name: "Cream",
          value: "cream"
        }, {
          name: "Buttermilk",
          value: "buttermilk"
        }, {
          name: "Half and Half",
          value: "half and half"
        }, {
          name: "Powdered Milk",
          value: "powdered milk"
        }, {
          name: "Cream Cheese",
          value: "cream cheese"
        }, {
          name: "Condensed Milk",
          value: "condensed milk"
        }, {
          name: "Whipped Cream",
          value: "whipped cream"
        }, {
          name: "Soy Milk",
          value: "soy milk"
        }, {
          name: "Skim Milk",
          value: "skim milk"
        }], [{
          name: "Peanut Butter",
          value: "peanut butter"
        }, {
          name: "Graham Crackers",
          value: "graham crackers"
        }, {
          name: "Chocolate Syrup",
          value: "chocolate syrup"
        }, {
          name: "Marshmallows",
          value: "marshmallows"
        }, {
          name: "Chocolate Chips",
          value: "milk chocolate chips"
        }, {
          name: "Raspberry Jam",
          value: "raspberry jam"
        }, {
          name: "Jelly",
          value: "jelly"
        }, {
          name: "Jello",
          value: "jello"
        }, {
          name: "White Chocolate",
          value: "white chocolate"
        }, {
          name: "Sprinkles",
          value: "sprinkles"
        }, {
          name: "Apples",
          value: "apple"
        }]];
        this.igsinform = {};
        this.newArry = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getClicked",
        value: function getClicked($event) {
          this.recipesFound = [];

          for (var key in this.igsinform) {
            if (this.igsinform[key] == true) {
              this.newArry.push(key);
            }
          }

          var thisString = this.newArry.join(",");
          this.getRecipes(thisString);
          this.newArry = [];
        }
      }, {
        key: "getRecipes",
        value: function getRecipes(str) {
          var _this = this;

          var qstr = "dessert";
          var recipes = this.http.getRecipes(str, qstr);
          recipes.subscribe(function (data) {
            var a = JSON.parse(data);

            for (var i = 0; i < a.results.length; i++) {
              _this.recipesFound.push(a.results[i]);
            }
          });
        }
      }, {
        key: "resetToFalse",
        value: function resetToFalse() {
          for (var key in this.igsinform) {
            if (this.igsinform[key] == true) {
              this.igsinform[key] = false;
            }
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/http.service.ts":
  /*!*********************************!*\
    !*** ./src/app/http.service.ts ***!
    \*********************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(_http) {
        _classCallCheck(this, HttpService);

        this._http = _http;
      }

      _createClass(HttpService, [{
        key: "getRecipes",
        value: function getRecipes(istr, qstr) {
          console.log(istr);
          return this._http.get("/api/".concat(istr, "/").concat(qstr));
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kylemcreynolds/Desktop/just_a_pinch/public/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map