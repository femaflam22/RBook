"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'register',
  data: function data() {
    return {
      data: {
        email: '',
        name: '',
        password: ''
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errorMessage', 'errors', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(['SET_LOADING'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['register'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('user', ['create'])), {}, {
    store: function store() {
      var _this = this;

      var payload = {
        image: 'user.png',
        header: 'header.jpg'
      };
      this.register(this.data).then(function () {
        _this.create(payload).then(function () {});
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-2ebeb09e] {\r\n    background-color: #EBEAEF;\n}\n.container[data-v-2ebeb09e] {\r\n    flex-wrap: wrap;\n}\n.card[data-v-2ebeb09e] {\r\n    border: none;\r\n    border-radius: 10px;\r\n    background-color: #6962f7;\r\n    width: 350px;\r\n    margin-top: -60px;\n}\np.mb-1[data-v-2ebeb09e] {\r\n    font-size: 25px;\r\n    color: #9FB7FD;\n}\n.btn-primary[data-v-2ebeb09e] {\r\n    border: none;\r\n    background: #463fac;\r\n    margin-bottom: 40px;\n}\n.btn-primary small[data-v-2ebeb09e] {\r\n    color: #9FB7FD;\n}\n.btn-primary span[data-v-2ebeb09e] {\r\n    font-size: 13px;\n}\n.card.two[data-v-2ebeb09e] {\r\n    border-top-right-radius: 60px;\r\n    border-top-left-radius: 0;\n}\n.form-group[data-v-2ebeb09e] {\r\n    position: relative;\r\n    margin-bottom: 2rem;\n}\n.form-control[data-v-2ebeb09e] {\r\n    border: none;\r\n    border-radius: 0;\r\n    outline: 0;\r\n    border-bottom: 1.5px solid #E6EBEE;\n}\n.form-control[data-v-2ebeb09e]:focus {\r\n    box-shadow: none;\r\n    border-radius: 0;\r\n    border-bottom: 2px solid #8A97A8;\n}\n.form-control-placeholder[data-v-2ebeb09e] {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 10px;\r\n    transition: all 200ms;\r\n    opacity: 0.5;\r\n    font-size: 80%;\n}\n.form-control:focus+.form-control-placeholder[data-v-2ebeb09e],\r\n.form-control:valid+.form-control-placeholder[data-v-2ebeb09e] {\r\n    font-size: 80%;\r\n    transform: translate3d(0, -90%, 0);\r\n    opacity: 1;\r\n    top: 10px;\r\n    color: #8B92AC;\n}\n.btn-block[data-v-2ebeb09e] {\r\n    border: none;\r\n    border-radius: 8px;\r\n    background-color: #5c5cdc;\r\n    padding: 10px 0 12px;\n}\n.btn-block[data-v-2ebeb09e]:focus {\r\n    box-shadow: none;\n}\n.btn-block span[data-v-2ebeb09e] {\r\n    font-size: 15px;\r\n    color: #D0E6FF;\n}\nu[data-v-2ebeb09e]{\r\n    font-size: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=2ebeb09e&scoped=true& */ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css& */ "./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ebeb09e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=2ebeb09e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container d-flex justify-content-center" }, [
    _vm.isLoading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex flex-column justify-content-between" }, [
      _c("div", { staticClass: "card mt-3 p-5" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary btn-lg" },
          [
            _c("small", [_vm._v("Already signed up?")]),
            _c("router-link", { attrs: { to: { name: "login" } } }, [
              _c("u", { staticClass: "text-white" }, [_vm._v(" Log in")])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card two bg-white px-5 py-4 mb-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.email,
                expression: "data.email"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.errors.email },
            attrs: { type: "email", id: "mail" },
            domProps: { value: _vm.data.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.data, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-control-placeholder", attrs: { for: "mail" } },
            [_vm._v("Email")]
          ),
          _vm._v(" "),
          _vm.errors.email
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.errors.email[0]) +
                    "\n                "
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.name,
                expression: "data.name"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.errors.name },
            attrs: { type: "text", id: "name" },
            domProps: { value: _vm.data.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.data, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-control-placeholder", attrs: { for: "name" } },
            [_vm._v("Name")]
          ),
          _vm._v(" "),
          _vm.errors.name
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.errors.name[0]) +
                    "\n                "
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.data.password,
                expression: "data.password"
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.errors.password },
            attrs: { type: "password", id: "password" },
            domProps: { value: _vm.data.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.data, "password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "form-control-placeholder",
              attrs: { for: "password" }
            },
            [_vm._v("Password")]
          ),
          _vm._v(" "),
          _vm.errors.password
            ? _c("div", { staticClass: "invalid-feedback" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.errors.password[0]) +
                    "\n                "
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block btn-lg mt-1 mb-2",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.store.apply(null, arguments)
              }
            }
          },
          [_vm._m(2)]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo mb-3" }, [
      _c("img", { attrs: { src: "http://127.0.0.1:8000/assets/img/r.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "mb-1" }, [
        _vm._v("Start reading all you want to read")
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "mb-3 text-white" }, [
        _vm._v("only with RBooks!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("Get Started"),
      _c("i", { staticClass: "fas fa-long-arrow-alt-right ml-2" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);