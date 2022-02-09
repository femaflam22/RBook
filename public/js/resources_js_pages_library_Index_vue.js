"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_library_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=script&lang=js& ***!
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
  name: "libraryIndex",
  data: function data() {
    return {
      books: [],
      chapters: []
    };
  },
  created: function created() {
    this.getBooks();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'errorMessage', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('libraries', ['index', 'delete'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('chapters', ['show'])), {}, {
    getBooks: function getBooks() {
      var _this = this;

      var user = JSON.parse(localStorage.getItem('user'));
      this.index(user.id).then(function (result) {
        _this.books = result.data;
        var array = [];

        for (var i = 0; i < _this.books.length; i++) {
          _this.show(_this.books[i].book_id).then(function (result) {
            array.push(result.data.length);
          });

          _this.chapters = array;
        }

        ;
      });
    },
    deleteBook: function deleteBook(id) {
      var _this2 = this;

      this["delete"](id).then(function () {
        _this2.getBooks();
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-2de974c5]{\r\n    padding: 80px 0;\n}\n.card[data-v-2de974c5] {\r\n    border: none;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    margin-right: 20px;\n}\n.badge[data-v-2de974c5]{\r\n    display: flex;\r\n    justify-content: flex-end;\n}\n.badge a[data-v-2de974c5] {\r\n    background-color: #ebc633;\r\n    text-decoration: none;\r\n    width: auto;\r\n    height: auto;\r\n    padding:  5px 10px;\r\n    border-radius: 5px;\r\n    color: #fffbec;\r\n    margin-right: 10px;\r\n    font-size: 14px;\n}\n.delete[data-v-2de974c5] {\r\n    font-size: 18px;\r\n    padding-top: 5px;\n}\n.text1[data-v-2de974c5] {\r\n    font-size: 14px;\r\n    font-weight: 600\n}\n.text2[data-v-2de974c5] {\r\n    color: #a5aec0\n}\n.image[data-v-2de974c5]{\r\n    width: 100px;\r\n    height: 160px;\r\n    margin: auto;\n}\np[data-v-2de974c5] {\r\n    font-size: 12px;\r\n    display: flex;\n}\n.color-text[data-v-2de974c5] {\r\n    color: #757575 !important\n}\nbutton[data-v-2de974c5] {\r\n    font-size: 12px;\r\n    background-color: #ebc633 !important;\r\n    text-align: center;\n}\nbutton[data-v-2de974c5]:focus {\r\n    box-shadow: none !important;\r\n    outline-width: 0\n}\n@media (max-width: 575px){\n.empty[data-v-2de974c5]{\r\n        margin-left: 15px;\n}\n.list[data-v-2de974c5]{\r\n        padding-left: 15px;\r\n        margin-left: 15px;\n}\n}\n@media (max-width: 380px){\nh3[data-v-2de974c5]{\r\n        font-size: 20px;\n}\n.empty img[data-v-2de974c5]{\r\n        width: 150px;\n}\n}\n@media (max-width: 340px){\nh3[data-v-2de974c5]{\r\n        font-size: 16px;\n}\np[data-v-2de974c5]{\r\n        font-size: 11px;\n}\n.empty img[data-v-2de974c5]{\r\n        width: 120px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_2de974c5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_2de974c5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_2de974c5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/library/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/library/Index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_2de974c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2de974c5&scoped=true& */ "./resources/js/pages/library/Index.vue?vue&type=template&id=2de974c5&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/library/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_2de974c5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css& */ "./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2de974c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_2de974c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2de974c5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/library/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/library/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/library/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_2de974c5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=style&index=0&id=2de974c5&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/library/Index.vue?vue&type=template&id=2de974c5&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/library/Index.vue?vue&type=template&id=2de974c5&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2de974c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2de974c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2de974c5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=2de974c5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=template&id=2de974c5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=template&id=2de974c5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Index.vue?vue&type=template&id=2de974c5&scoped=true& ***!
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
  return _c("div", { staticClass: "container mt-5 mb-5" }, [
    _vm.isLoading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
    _vm._v(" "),
    _vm.errorMessage
      ? _c("div", { staticClass: "alert alert-danger mb-4" }, [
          _vm._v("\r\n        " + _vm._s(_vm.errorMessage) + "\r\n    ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.books.length < 1
      ? _c(
          "div",
          { staticClass: "pb-0 mb-0 justify-content-center text-light empty" },
          [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col text-center" }, [
                _c("div", { staticClass: "border-0" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "row justify-content-center" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-lg-4 col" },
                        [
                          _c("p", { staticClass: "small color-text" }, [
                            _vm._v(
                              "Segera mulai membaca buku dengan menambahkan buku ke dalam perpustakaanmu sekarang"
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "category.books.index",
                                  params: { id: 1 }
                                }
                              }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary border-0 my-2",
                                  attrs: { type: "button" }
                                },
                                [_c("b", [_vm._v("Tambahkan Buku")])]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "mt-2",
                            attrs: {
                              src: "http://127.0.0.1:8000/assets/img/books.png",
                              width: "200"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      : _c(
          "div",
          { staticClass: "d-flex flex-wrap justify-content-center list" },
          _vm._l(_vm.books, function(book, index) {
            return _c("div", { key: index, staticClass: "card p-3 mb-3" }, [
              _c("div", { staticClass: "d-flex flex-column" }, [
                _c("div", { staticClass: "ms-2 c-details mb-3" }, [
                  _c("h6", { staticClass: "mb-0" }, [
                    _vm._v(_vm._s(book.book_name))
                  ])
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "image",
                  attrs: { src: book.url_image }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4" }, [
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-end" },
                  [
                    book.last_chapter == 0
                      ? _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "library.detail",
                                params: {
                                  id: book.id,
                                  book: book.book_id,
                                  part: 1
                                }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "badge" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("lanjut baca")
                              ])
                            ])
                          ]
                        )
                      : _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "library.detail",
                                params: {
                                  id: book.id,
                                  book: book.book_id,
                                  part: book.last_chapter
                                }
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "badge" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("lanjut baca")
                              ])
                            ])
                          ]
                        ),
                    _vm._v(" "),
                    _c("i", {
                      staticClass: "fas fa-trash-alt text-danger delete",
                      on: {
                        click: function($event) {
                          return _vm.deleteBook(book.id)
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-1" }, [
                  _c("span", { staticClass: "text1" }, [
                    _vm._v(
                      "terbaca " + _vm._s(book.last_chapter) + " chapter "
                    ),
                    _c("span", { staticClass: "text2" }, [
                      _vm._v("dari " + _vm._s(_vm.chapters[index]) + " chapter")
                    ])
                  ])
                ])
              ])
            ])
          }),
          0
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title" }, [
      _c("h3", { staticClass: "mb-2 text-dark" }, [
        _vm._v("Perpustakaanmu masih kosong!")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);