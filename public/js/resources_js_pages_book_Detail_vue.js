"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_book_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  name: "bookDetail",
  data: function data() {
    return {
      book: {},
      message: null
    };
  },
  created: function created() {
    this.getBook();
    this.checkBook();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'errorMessage', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('books', ['detail'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('libraries', ['create', 'check'])), {}, {
    getBook: function getBook() {
      var _this = this;

      this.detail(this.$route.params.book).then(function (result) {
        _this.book = result.data[0];
      });
    },
    add: function add() {
      var user = JSON.parse(localStorage.getItem('user'));
      var payload = {
        user_id: user.id,
        book_id: this.$route.params.book,
        last_chapter: 0
      };
      this.create(payload).then(function () {});
    },
    checkBook: function checkBook() {
      var _this2 = this;

      var user = JSON.parse(localStorage.getItem('user'));
      var payload = {
        user_id: user.id,
        book_id: this.$route.params.book
      };
      this.check(payload).then(function (result) {
        _this2.message = result.message;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.wraper[data-v-c157e004]{\r\n    padding-top: 100px;\n}\n.card[data-v-c157e004] {\r\n    width: 500px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    padding: 8px;\r\n    position: relative;\r\n    height: auto;    \r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n    margin-bottom: 60px;\n}\n.card h5[data-v-c157e004]{\r\n    letter-spacing: 5px;\n}\n.upper[data-v-c157e004] {\r\n    background-color: #463fac;\r\n    height: 360px;\r\n    border-radius: 15px;\r\n    z-index: 10;\r\n    margin-top: 14px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.upper img[data-v-c157e004]{\r\n    width: 100px;\r\n    height: 160px;\n}\n.desc-book[data-v-c157e004] {\r\n    width: 410px;\r\n    height: auto;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 340px;\r\n    border-radius: 12px;\r\n    left: 9%;\r\n    z-index: 12;\r\n    padding: 15px;\n}\n.down[data-v-c157e004] {\r\n    background-color: #eeeff3;\r\n    height: 480px;\r\n    border-radius: 15px;\r\n    margin-top: -14px;\n}\n.box[data-v-c157e004] {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #463fac;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\n}\n.dots[data-v-c157e004] {\r\n    font-size: 15px;\n}\n.sinopsis[data-v-c157e004] {\r\n    margin-top: 20px;\r\n    height:380px;\r\n    background-color: #f4f6fa;\r\n    border-radius: 10px;\r\n    padding: 12px\n}\n.sinopsis span[data-v-c157e004] {\r\n    font-size: 11px;\r\n    height:325px;\r\n    overflow-y: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 17;\r\n    -webkit-box-orient: vertical;\r\n    text-overflow: ellipsis;\r\n    text-align: justify;\n}\n.sinopsis a[data-v-c157e004]{\r\n    color: #6962f7;\r\n    font-size: 10px;\n}\n@media (max-width: 640px){\n.card[data-v-c157e004]{\r\n        max-width: 350px;\r\n        width: 100%;\n}\n.desc-book[data-v-c157e004]{\r\n        max-width: 285px;\n}\n.down[data-v-c157e004]{\r\n        height: 530px;\n}\n.sinopsis[data-v-c157e004]{\r\n        height: 450px;\n}\n.sinopsis span[data-v-c157e004]{\r\n        height: 405px;\n}\n.desc-book h6[data-v-c157e004] {\r\n        font-size: 14px;\n}\n.desc-book i[data-v-c157e004] {\r\n        font-size: 12px;\n}\n.desc-book span[data-v-c157e004] {\r\n        font-size: 11px;\n}\n.box[data-v-c157e004]{\r\n        width: 35px;\r\n        height: 35px;\n}\n}\n@media (max-width: 410px){\n.wraper[data-v-c157e004]{\r\n        padding-left: 10px;\r\n        padding-right: 10px;\n}\n.card[data-v-c157e004]{\r\n        width: 100%;\r\n        border-radius: 0;\r\n        box-shadow: none;\r\n        background-color: transparent;\n}\n.desc-book h6[data-v-c157e004]{\r\n        font-size: 12px;\n}\n}\n@media (max-width: 360px){\n.desc-book[data-v-c157e004]{\r\n        max-width: 270px;\n}\n}\n@media (max-width: 345px){\n.desc-book[data-v-c157e004]{\r\n        max-width: 240px;\r\n        left: 11%;\n}\n}\n@media (max-width: 320px){\n.desc-book[data-v-c157e004]{\r\n        left: 10%;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_c157e004_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_c157e004_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_c157e004_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/book/Detail.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/book/Detail.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_c157e004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=c157e004&scoped=true& */ "./resources/js/pages/book/Detail.vue?vue&type=template&id=c157e004&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/book/Detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Detail_vue_vue_type_style_index_0_id_c157e004_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css& */ "./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_c157e004_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_vue_vue_type_template_id_c157e004_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c157e004",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/book/Detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/book/Detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/book/Detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_c157e004_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=style&index=0&id=c157e004&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/book/Detail.vue?vue&type=template&id=c157e004&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/book/Detail.vue?vue&type=template&id=c157e004&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_c157e004_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_c157e004_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_c157e004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=template&id=c157e004&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=template&id=c157e004&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=template&id=c157e004&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Detail.vue?vue&type=template&id=c157e004&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "wraper d-flex justify-content-center align-items-center" },
    [
      _vm.isLoading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "category.books.index",
                    params: { id: _vm.$route.params.id }
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-arrow-left text-muted mt-1" })]
            ),
            _vm._v(" "),
            _c("div")
          ],
          1
        ),
        _vm._v(" "),
        _vm.errorMessage
          ? _c("div", { staticClass: "alert alert-danger mb-4" }, [
              _vm._v(
                "\r\n            " + _vm._s(_vm.errorMessage) + "\r\n        "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "upper d-flex flex-column text-white" }, [
          _c("img", {
            staticClass: "rounded",
            attrs: { src: _vm.book.url_image }
          }),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-0 mt-2 font-weight-bold" }, [
            _vm._v(_vm._s(_vm.book.title))
          ]),
          _vm._v(" "),
          _c(
            "small",
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: { name: "user.view", params: { id: _vm.book.user_id } }
                  }
                },
                [
                  _c("a", { staticClass: "text-white", attrs: { href: "#" } }, [
                    _vm._v(_vm._s(_vm.book.user_name))
                  ])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "down" }, [
          _c("div", { staticClass: "desc-book" }, [
            _c("div", { staticClass: "d-flex flex-row align-items-center" }, [
              _c("div", { staticClass: "box" }, [
                _c(
                  "span",
                  { staticClass: "dots" },
                  [
                    _vm.message == "empty"
                      ? _c(
                          "a",
                          {
                            staticClass: "text-white",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.add.apply(null, arguments)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-plus" })]
                        )
                      : _c(
                          "router-link",
                          { attrs: { to: { name: "library.index" } } },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "text-white",
                                attrs: { href: "#" }
                              },
                              [_c("i", { staticClass: "fas fa-bookmark" })]
                            )
                          ]
                        )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex flex-column ml-3" }, [
                _vm.message == "empty"
                  ? _c("h6", { staticClass: "mb-0 font-weight-bold" }, [
                      _vm._v("Tambahkan ke perpustakaan")
                    ])
                  : _c("h6", { staticClass: "mb-0 font-weight-bold" }, [
                      _vm._v("Telah ditambahkan ke perpustakaan")
                    ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c("div", { staticClass: "d-flex align-items-center mr-2" }, [
                    _c("i", { staticClass: "fas fa-eye mr-1" }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(_vm._s(_vm._f("numFormatter")(_vm.book.readers)))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "sinopsis" }, [
              _c("span", { staticClass: "d-block" }, [
                _vm._v(_vm._s(_vm.book.description))
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center" }, [
      _c("i", { staticClass: "fas fa-star mr-1" }),
      _vm._v(" "),
      _c("span", [_vm._v("300k")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);