"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_book_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "bookList",
  data: function data() {
    return {
      books: [],
      category: null
    };
  },
  watch: {
    '$route.params.id': {
      handler: function handler() {
        this.getBooks();
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {
    this.getBooks();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'errorMessage', 'isLoading'])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('books', ['list'])), {}, {
    getBooks: function getBooks() {
      var _this = this;

      this.list(this.$route.params.id).then(function (result) {
        _this.books = result.data;
        _this.category = result.data[0].category_name;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-10107396] {\r\n    padding: 20px;\n}\n.top[data-v-10107396]{\r\n    border-bottom: solid 1px black;\r\n    padding-top: 80px;\r\n    padding-bottom: 6px;\n}\n.wrap[data-v-10107396]{\r\n    flex-direction: row;\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.books img[data-v-10107396] {\r\n    height: 200px;\r\n    width: 140px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    margin-right: 20px;\n}\n.text-muted[data-v-10107396] {\r\n    font-size: 14px;\r\n    width:100%;\r\n    height:115px;\r\n    overflow-y: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 5;\r\n    -webkit-box-orient: vertical;\r\n    text-overflow: ellipsis;\r\n    text-align: justify;\n}\n.fs5[data-v-10107396] {\r\n    line-height: 20px;\r\n    font-size: 20px;\n}\n.items[data-v-10107396] {\r\n    font-size: 15px;\r\n    background-color: black;\r\n    color: white;\r\n    margin: 3px 3px;\r\n    padding: 4px 10px;\r\n    text-decoration: none;\r\n    border: 1px solid #ddd\n}\n.items[data-v-10107396]:hover {\r\n    background-color: #fcf7f7;\r\n    color: black;\r\n    transition: background-color .8s\n}\n@media (max-width: 600px){\n.wrap[data-v-10107396]{\r\n        width: 95%;\r\n        margin-left: 10px;\r\n        margin-bottom: 5px;\r\n        padding: 0 10px;\n}\n.text-muted[data-v-10107396]{\r\n        font-size: 12px;\r\n        height: 80px;\r\n        -webkit-line-clamp: 4;\n}\n.books img[data-v-10107396]{\r\n        height: 150px;\r\n        width: 100px;\n}\n.fs5[data-v-10107396]{\r\n        font-size: 16px;\r\n        line-height: 10px;\n}\ni[data-v-10107396], span[data-v-10107396]{\r\n        font-size: 11px;\n}\n}\n@media (max-width: 390px){\n.wrap[data-v-10107396]{\r\n        padding: 0 5px;\n}\n.text-muted[data-v-10107396]{\r\n        height: 60px;\r\n        font-size: 10px;\n}\n.fs5[data-v-10107396]{\r\n        line-height: 5px;\r\n        font-size: 14px;\n}\n.books img[data-v-10107396]{\r\n        height: 120px;\r\n        width: 80px;\r\n        margin-right: 10px;\n}\n.top h4[data-v-10107396]{\r\n        font-size: 16px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_10107396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_10107396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_10107396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/book/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/book/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_10107396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=10107396&scoped=true& */ "./resources/js/pages/book/Index.vue?vue&type=template&id=10107396&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/book/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_10107396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css& */ "./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_10107396_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_10107396_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "10107396",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/book/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/book/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/book/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_10107396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=style&index=0&id=10107396&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/book/Index.vue?vue&type=template&id=10107396&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/book/Index.vue?vue&type=template&id=10107396&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_10107396_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_10107396_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_10107396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=10107396&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=template&id=10107396&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=template&id=10107396&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/book/Index.vue?vue&type=template&id=10107396&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _vm.errorMessage
      ? _c("div", { staticClass: "alert alert-danger mb-4" }, [
          _vm._v("\r\n        " + _vm._s(_vm.errorMessage) + "\r\n    ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "top mb-4" }, [
      _c("h4", { staticClass: "text-uppercase" }, [
        _vm._v(_vm._s(_vm.category))
      ])
    ]),
    _vm._v(" "),
    _vm.books.length < 1
      ? _c("div", { staticClass: "mt-3" }, [
          _c("img", {
            staticClass: "d-block m-auto",
            attrs: {
              src: "http://127.0.0.1:8000/assets/img/research.png",
              width: "150"
            }
          }),
          _vm._v(" "),
          _c("h5", { staticClass: "mt-2 text-center" }, [
            _vm._v("buku untuk kategori ini masih kosong :(")
          ])
        ])
      : _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 order-lg-0 order-2" },
            _vm._l(_vm.books, function(book, index) {
              return _c(
                "div",
                { key: index, staticClass: "wrap d-flex books" },
                [
                  _c("div", { staticClass: "mb-4" }, [
                    _c("img", {
                      attrs: { src: book.url_image, alt: "book cover" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-4" }, [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center mr-2" },
                        [
                          _c("i", { staticClass: "fas fa-eye mr-1" }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(_vm._s(_vm._f("numFormatter")(book.readers)))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(0, true)
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "p",
                        { staticClass: "text-capitalize fs5 my-3 fw-bolder" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "category.books.detail",
                                  params: {
                                    id: _vm.$route.params.id,
                                    book: book.id
                                  }
                                }
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "text-dark",
                                  attrs: { href: "#" }
                                },
                                [_vm._v(_vm._s(book.title))]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v(
                          "\r\n                        " +
                            _vm._s(book.description) +
                            "\r\n                        "
                        )
                      ])
                    ])
                  ])
                ]
              )
            }),
            0
          )
        ])
  ])
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