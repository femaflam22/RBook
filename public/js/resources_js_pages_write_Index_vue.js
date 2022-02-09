"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_write_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SidebarUser',
  props: {
    selected: {
      type: Number,
      "default": 5,
      required: true
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['logout'])), {}, {
    logoutUser: function logoutUser() {
      this.logout().then(function () {});
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SidebarUser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/SidebarUser.vue */ "./resources/js/components/SidebarUser.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserWriterList',
  components: {
    "sidebar": _components_SidebarUser_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      books: []
    };
  },
  created: function created() {
    this.getBooks();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['errors', 'errorMessage', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('books', ['show', 'delete'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('categories', ['subtract'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('libraries', ['deleteFromAuthor'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('chapters', ['deleteAllChapter'])), {}, {
    getBooks: function getBooks() {
      var _this = this;

      var user = JSON.parse(localStorage.getItem('user'));
      this.show(user.id).then(function (result) {
        _this.books = result.data;
      });
    },
    deleteBook: function deleteBook(e) {
      var _this2 = this;

      var category = e.target.getAttribute("data");
      var id = e.target.id;
      this["delete"](id).then(function () {
        _this2.subtract(category).then(function () {
          _this2.deleteAllChapter(id).then(function () {
            _this2.deleteFromAuthor(id).then(function () {
              _this2.getBooks();
            });
          });
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#sidebar[data-v-ab8b46a8] {\r\n    padding: 15px 0px 15px 0px;\r\n    border-radius: 10px;\r\n    background-color: #463fac;\n}\n#sidebar .h4[data-v-ab8b46a8] {\r\n    font-weight: 500;\r\n    padding-left: 15px\n}\n#sidebar ul[data-v-ab8b46a8] {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding-left: 0rem\n}\n#sidebar ul li[data-v-ab8b46a8] {\r\n    padding: 10px 0;\r\n    display: block;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    border-left: 5px solid transparent;\r\n    background-color: #463fac;\n}\n#sidebar ul li.active[data-v-ab8b46a8] {\r\n    border-left: 5px solid #d96a26;\r\n    background-color: #44007c;\n}\n#sidebar ul li a[data-v-ab8b46a8] {\r\n    display: block\n}\n#sidebar ul li a .fas[data-v-ab8b46a8],\r\n#sidebar ul li a .far[data-v-ab8b46a8] {\r\n    color: #ddd\n}\n#sidebar ul li a .link[data-v-ab8b46a8] {\r\n    color: #fff;\r\n    font-weight: 500\n}\n#sidebar ul li a .link-desc[data-v-ab8b46a8] {\r\n    font-size: 0.8rem;\r\n    color: #ddd\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-bbd31aae]{\r\n    padding-top: 80px;\r\n    padding-bottom: 40px;\n}\n#main-content[data-v-bbd31aae] {\r\n    padding: 30px;\r\n    border-radius: 15px;\n}\n.btn[data-v-bbd31aae] {\r\n    border-radius: 25px;\n}\n.new[data-v-bbd31aae] {\r\n    font-size: 12px;\n}\n.card[data-v-bbd31aae] {\r\n    padding: 20px;\r\n    border: none;\n}\n.inputs[data-v-bbd31aae] {\r\n    position: relative;\n}\n.form-control[data-v-bbd31aae] {\r\n    text-indent: 15px;\r\n    border: none;\r\n    height: 45px;\r\n    border-radius: 0px;\r\n    border-bottom: 1px solid #eee;\n}\n.form-control[data-v-bbd31aae]:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #eee;\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid blue;\n}\n.form-control[data-v-bbd31aae]:focus {\r\n    color: blue;\n}\n.inputs i[data-v-bbd31aae] {\r\n    position: absolute;\r\n    top: 14px;\r\n    left: 4px;\r\n    color: #b8b9bc;\n}\n.book[data-v-bbd31aae] {\r\n    height: 40px;\r\n    width: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #eee;\r\n    margin-right: 10px;\r\n    border-radius: 5px;\n}\n.time-text[data-v-bbd31aae] {\r\n    font-size: 12px;\r\n    color: #989898;\n}\n.dots[data-v-bbd31aae] {\r\n    height: 7px;\r\n    width: 7px;\r\n    background-color: #eee;\r\n    display: flex;\r\n    border-radius: 50%;\r\n    margin-left: 7px;\r\n    margin-right: 7px;\n}\n.yellow[data-v-bbd31aae] {\r\n    color: #ffab2e;\n}\n.purple[data-v-bbd31aae] {\r\n    color: #572ce8;\n}\n.content-text[data-v-bbd31aae] {\r\n    height: 40px;\r\n    width: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    font-weight: 700;\n}\n.content-text-1[data-v-bbd31aae] {\r\n    background-color: #ffe7cc;\r\n    color: #ffa03a;\n}\n.content-text-2[data-v-bbd31aae] {\r\n    background-color: #572ce86b;\r\n    color: #572ce8;\n}\n.delete[data-v-bbd31aae] {\r\n    background-color: #f0b0b0;\r\n    color: #ec2f2f;\n}\n@media (max-width: 500px){\n#main-content[data-v-bbd31aae] {\r\n        padding: 20px;\n}\n#sidebar ul li a .link[data-v-bbd31aae]{\r\n        font-size: 13px;\n}\n#sidebar ul li a .link-desc[data-v-bbd31aae]{\r\n        font-size: 11px;\n}\n.h4[data-v-bbd31aae]{\r\n        font-size: 16px;\n}\n}\n@media (max-width: 420px){\n#main-content[data-v-bbd31aae] {\r\n        padding: 0;\n}\n.content-text[data-v-bbd31aae]{\r\n        width: 25px;\r\n        height: 25px;\r\n        font-size: 10px;\n}\n.btn[data-v-bbd31aae]{\r\n        font-size: 11px;\n}\n.book-title[data-v-bbd31aae]{\r\n        font-size: 13px;\n}\n.book[data-v-bbd31aae]{\r\n        width: 30px;\r\n        height: 30px;\n}\n.dots[data-v-bbd31aae]{\r\n        margin-left: 4px;\r\n        margin-right: 4px;\n}\n}\n@media (max-width: 320px){\n.dots[data-v-bbd31aae]{\r\n        display: none;\n}\n.book-genre[data-v-bbd31aae]{\r\n        display: none;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_style_index_0_id_ab8b46a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_style_index_0_id_ab8b46a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_style_index_0_id_ab8b46a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bbd31aae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bbd31aae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bbd31aae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/SidebarUser.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/SidebarUser.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarUser_vue_vue_type_template_id_ab8b46a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true& */ "./resources/js/components/SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true&");
/* harmony import */ var _SidebarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarUser.vue?vue&type=script&lang=js& */ "./resources/js/components/SidebarUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _SidebarUser_vue_vue_type_style_index_0_id_ab8b46a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css& */ "./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SidebarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarUser_vue_vue_type_template_id_ab8b46a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarUser_vue_vue_type_template_id_ab8b46a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ab8b46a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SidebarUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/write/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/write/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_bbd31aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=bbd31aae&scoped=true& */ "./resources/js/pages/write/Index.vue?vue&type=template&id=bbd31aae&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/write/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_bbd31aae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css& */ "./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_bbd31aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_bbd31aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bbd31aae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/write/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SidebarUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/SidebarUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/write/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/write/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_style_index_0_id_ab8b46a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=style&index=0&id=ab8b46a8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_bbd31aae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=style&index=0&id=bbd31aae&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_template_id_ab8b46a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_template_id_ab8b46a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUser_vue_vue_type_template_id_ab8b46a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/write/Index.vue?vue&type=template&id=bbd31aae&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/write/Index.vue?vue&type=template&id=bbd31aae&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bbd31aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bbd31aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bbd31aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=bbd31aae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=template&id=bbd31aae&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SidebarUser.vue?vue&type=template&id=ab8b46a8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-3 my-lg-0 my-md-1 mb-2" }, [
    _c("div", { staticClass: "bg-purple border", attrs: { id: "sidebar" } }, [
      _c("div", { staticClass: "h4 text-white text-left" }, [
        _vm._v("Kelola Akun")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c(
          "li",
          { class: { active: _vm.selected == 1 } },
          [
            _c("router-link", { attrs: { to: { name: "user.index" } } }, [
              _c(
                "a",
                {
                  staticClass: "text-decoration-none d-flex align-items-center",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "fas fa-user mr-3" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex flex-column" }, [
                    _c("div", { staticClass: "link" }, [_vm._v("Akun Saya")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "link-desc" }, [
                      _vm._v("lihat profil saya")
                    ])
                  ])
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.selected == 2 } },
          [
            _c("router-link", { attrs: { to: { name: "user.edit" } } }, [
              _c(
                "a",
                {
                  staticClass: "text-decoration-none d-flex align-items-center",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "fas fa-cog mr-3" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex flex-column" }, [
                    _c("div", { staticClass: "link" }, [_vm._v("Edit Profil")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "link-desc" }, [
                      _vm._v("edit data akun anda")
                    ])
                  ])
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.selected == 3 } },
          [
            _c("router-link", { attrs: { to: { name: "write_book.index" } } }, [
              _c(
                "a",
                {
                  staticClass: "text-decoration-none d-flex align-items-center",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "fas fa-align-right mr-3" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex flex-column" }, [
                    _c("div", { staticClass: "link" }, [
                      _vm._v("Daftar Tulisan")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "link-desc" }, [
                      _vm._v("lihat & kelola karya anda")
                    ])
                  ])
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.selected == 4 } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "user.reset_password" } } },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "text-decoration-none d-flex align-items-center",
                    attrs: { href: "#" }
                  },
                  [
                    _c("div", { staticClass: "fas fa-lock mr-3" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex flex-column" }, [
                      _c("div", { staticClass: "link" }, [
                        _vm._v("Reset Password")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "link-desc" }, [
                        _vm._v("ubah kata sandi anda")
                      ])
                    ])
                  ]
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { class: { active: _vm.selected == 5 } }, [
          _c(
            "a",
            {
              staticClass: "text-decoration-none d-flex align-items-center",
              attrs: { href: "#" },
              on: { click: _vm.logoutUser }
            },
            [
              _c("div", { staticClass: "fas fa-power-off mr-3" }),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column" }, [
      _c("div", { staticClass: "link" }, [_vm._v("Logout")]),
      _vm._v(" "),
      _c("div", { staticClass: "link-desc" }, [_vm._v("keluar dari akun anda")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=template&id=bbd31aae&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/write/Index.vue?vue&type=template&id=bbd31aae&scoped=true& ***!
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
  return _c("div", { staticClass: "container" }, [
    _vm.isLoading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("sidebar", { attrs: { selected: 3 } }),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-9 my-lg-0 my-1" }, [
          _c(
            "div",
            { staticClass: "bg-white border", attrs: { id: "main-content" } },
            [
              _vm.errorMessage
                ? _c("div", { staticClass: "alert alert-danger mb-4" }, [
                    _vm._v(
                      "\r\n                    " +
                        _vm._s(_vm.errorMessage) +
                        "\r\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row d-flex justify-content-center my-2" },
                [
                  _c("div", { staticClass: "col-md-10" }, [
                    _c(
                      "div",
                      { staticClass: "card" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-between align-items-center"
                          },
                          [
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v("Daftar Tulisan")
                            ]),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              { attrs: { to: { name: "write_book.add" } } },
                              [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-purple text-white" },
                                  [
                                    _c("i", { staticClass: "fa fa-plus mr-2" }),
                                    _vm._v("Tambah")
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0),
                        _vm._v(" "),
                        _vm.books.length < 1
                          ? _c("div", [_vm._m(1)])
                          : _vm._l(_vm.books, function(book, index) {
                              return _c(
                                "div",
                                { key: index, staticClass: "mt-3" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between align-items-center"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex flex-row align-items-center"
                                        },
                                        [
                                          book.status == "completed"
                                            ? _c(
                                                "span",
                                                { staticClass: "book" },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-book yellow"
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          book.status == "onGoing"
                                            ? _c(
                                                "span",
                                                { staticClass: "book" },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-book purple"
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "d-flex flex-column"
                                            },
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass: "text-dark",
                                                  attrs: {
                                                    to: {
                                                      name: "write_book.detail",
                                                      params: { id: book.id }
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass: "book-title"
                                                    },
                                                    [_vm._v(_vm._s(book.title))]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex flex-row align-items-center time-text"
                                                },
                                                [
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "book-genre"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          book.category_name
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    staticClass: "dots"
                                                  }),
                                                  _vm._v(" "),
                                                  _c("small", [
                                                    _vm._v(
                                                      "Dibuat pada " +
                                                        _vm._s(
                                                          _vm._f("updatedDays")(
                                                            book.created_at
                                                          )
                                                        )
                                                    )
                                                  ])
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "d-flex" }, [
                                        book.status == "completed"
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "content-text content-text-1"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-check"
                                                })
                                              ]
                                            )
                                          : book.status == "onGoing"
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "content-text content-text-2"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-keyboard"
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "content-text delete ml-1"
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-trash-alt",
                                              attrs: {
                                                data: book.category_id,
                                                id: book.id
                                              },
                                              on: { click: _vm.deleteBook }
                                            })
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            })
                      ],
                      2
                    )
                  ])
                ]
              )
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3 inputs" }, [
      _c("i", { staticClass: "fa fa-search" }),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control ",
        attrs: { type: "text", placeholder: "Cari judul buku..." }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pt-5" }, [
      _c("img", {
        staticClass: "d-block m-auto",
        attrs: {
          src: "http://127.0.0.1:8000/assets/img/homework.png",
          width: "70"
        }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-center text-empty" }, [
        _vm._v("kamu belum membuat cerita apapun")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);