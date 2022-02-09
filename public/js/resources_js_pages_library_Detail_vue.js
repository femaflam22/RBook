"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_library_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
$(document).ready(function () {
  $("#sidebarCollapse").on('click', function () {
    $("#sidebar").toggleClass('active');
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'readBook',
  data: function data() {
    return {
      chapters: [],
      bookName: null,
      chapter: {}
    };
  },
  watch: {
    '$route.params.part': {
      handler: function handler() {
        this.changeCurrentChapter();
        this.currentChapter();
        this.editReader();
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {
    this.getChapters();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'errorMessage', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('chapters', ['show', 'detail'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('libraries', ['update'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('readers', ['updateReader'])), {}, {
    getChapters: function getChapters() {
      var _this = this;

      this.show(this.$route.params.book).then(function (result) {
        _this.chapters = result.data;
        _this.bookName = result.data[0].book_name;

        _this.currentChapter();
      });
    },
    showChapter: function showChapter() {
      document.getElementById('sidebar').toogleClass('active');
    },
    changeCurrentChapter: function changeCurrentChapter() {
      var user = JSON.parse(localStorage.getItem('user'));
      var data = {
        user_id: user.id,
        book_id: this.$route.params.book,
        last_chapter: this.$route.params.part
      };
      var payload = {
        id: this.$route.params.id,
        data: data
      };
      this.update(payload).then(function () {});
    },
    currentChapter: function currentChapter() {
      var _this2 = this;

      var payload = {
        book: this.$route.params.book,
        part: this.$route.params.part
      };
      this.detail(payload).then(function (result) {
        _this2.chapter = result.data[0];
        var content = document.getElementById("content-text");
        content.innerHTML = _this2.chapter.content;
      });
    },
    editReader: function editReader() {
      this.updateReader(this.$route.params.book).then(function () {});
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.back[data-v-2798336e]{\r\n    margin-left: 35px;\r\n    margin-top: 20px;\n}\na[data-v-2798336e],\r\na[data-v-2798336e]:hover,\r\na[data-v-2798336e]:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s\n}\n.wrapper[data-v-2798336e] {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: stretch;\r\n    padding-top: 60px;\n}\n#sidebar[data-v-2798336e] {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    height: 100vh;\r\n    color: #333;\r\n    transition: all 0.3s;\r\n    overflow-y: scroll;\n}\n#sidebar.active[data-v-2798336e] {\r\n    margin-left: -250px\n}\n#sidebar .sidebar-header[data-v-2798336e] {\r\n    padding: 20px;\n}\n#sidebar .sidebar-header h3[data-v-2798336e]{\r\n    font-size: 18px;\r\n    font-weight: bold;\n}\n#sidebar ul.components[data-v-2798336e] {\r\n    padding-left: 10px;\n}\n#sidebar ul p[data-v-2798336e] {\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    display: block;\r\n    color: #fff\n}\n#sidebar ul li a[data-v-2798336e] {\r\n    padding: 10px;\r\n    font-size: 1em;\r\n    display: block\n}\n#sidebar ul li a[data-v-2798336e]:hover {\r\n    color: #333;\r\n    background: #fff;\n}\n#sidebar ul li.active>a[data-v-2798336e],\r\na[aria-expanded=\"true\"][data-v-2798336e] {\r\n    color: #333;\r\n    background: #fff;\n}\na[data-toggle=\"collapse\"][data-v-2798336e] {\r\n    position: relative\n}\n#content[data-v-2798336e] {\r\n    width: 100%;\r\n    padding: 0 35px 15px 35px;\r\n    transition: all 0.3s;\n}\r\n\r\n/* #content-text {\r\n    max-width: 1000px;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n    display: block;\r\n    margin: auto;\r\n} */\n.content-wrapper i[data-v-2798336e] {\r\n    font-size: 20px;\n}\n.content-wrapper p[data-v-2798336e] {\r\n    font-size: 14px;\r\n    text-align: justify;\r\n    text-indent: 3em;\n}\n.content-wrapper img[data-v-2798336e]{\r\n    width: 50%;\r\n    display: block;\r\n    margin: 20px auto;\n}\n.content-header[data-v-2798336e]{\r\n    border-bottom: 1px solid #dadada;\n}\n.navbar[data-v-2798336e] {\r\n    background: transparent;\r\n    box-shadow: none;\r\n    margin-left: 25px;\r\n    margin-bottom: 20px;\n}\n@media (max-width: 435px){\n#content[data-v-2798336e]{\r\n        padding: 0 20px 15px 20px;\n}\n.navbar[data-v-2798336e]{\r\n        margin-left: 0;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_2798336e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_2798336e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_2798336e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/library/Detail.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/library/Detail.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_2798336e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=2798336e&scoped=true& */ "./resources/js/pages/library/Detail.vue?vue&type=template&id=2798336e&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/library/Detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Detail_vue_vue_type_style_index_0_id_2798336e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css& */ "./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_2798336e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_vue_vue_type_template_id_2798336e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2798336e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/library/Detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/library/Detail.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/library/Detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_2798336e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=style&index=0&id=2798336e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/library/Detail.vue?vue&type=template&id=2798336e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/library/Detail.vue?vue&type=template&id=2798336e&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_2798336e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_2798336e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_2798336e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=template&id=2798336e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=template&id=2798336e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=template&id=2798336e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/library/Detail.vue?vue&type=template&id=2798336e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "wrapper" }, [
    _vm.isLoading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
    _vm._v(" "),
    _c("nav", { staticClass: "active", attrs: { id: "sidebar" } }, [
      _c("div", { staticClass: "sidebar-header" }, [
        _c("h3", [_vm._v(_vm._s(_vm.bookName))]),
        _vm._v(" "),
        _c("hr")
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "list-unstyled components" },
        _vm._l(_vm.chapters, function(chapter, index) {
          return _c(
            "li",
            { key: index },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "library.detail",
                      params: {
                        id: _vm.$route.params.id,
                        book: _vm.$route.params.book,
                        part: chapter.id
                      }
                    }
                  }
                },
                [
                  _c(
                    "a",
                    { staticClass: "text-capitalize", attrs: { href: "#" } },
                    [
                      _vm._v(
                        "Part " +
                          _vm._s(index + 1) +
                          " - " +
                          _vm._s(chapter.name)
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _vm.errorMessage
        ? _c("div", { staticClass: "alert alert-danger mb-4" }, [
            _vm._v(
              "\r\n            " + _vm._s(_vm.errorMessage) + "\r\n        "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex justify-content-between back" },
        [
          _c("router-link", { attrs: { to: { name: "library.index" } } }, [
            _c("i", { staticClass: "fas fa-arrow-left text-muted ml-1 mb-3" })
          ]),
          _vm._v(" "),
          _c("div")
        ],
        1
      ),
      _vm._v(" "),
      _c("nav", { staticClass: "navbar" }, [
        _c("div", { staticClass: "d-flex align-items-center" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "pt-3 ml-2", on: { click: _vm.showChapter } },
            [_vm._v("lihat chapter")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper", attrs: { id: "content" } }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-between content-header pb-3 mb-3"
          },
          [
            _c("i", { staticClass: "far fa-star text-orange" }),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "library.comments", params: { id: 2, part: 2 } }
                }
              },
              [_c("i", { staticClass: "far fa-comments text-yellow" })]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", { staticClass: "my-4 text-center text-capitalize" }, [
          _vm._v(_vm._s(_vm.chapter.name))
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "text-justify",
          attrs: { id: "content-text" }
        })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-cream",
        attrs: { type: "button", id: "sidebarCollapse" }
      },
      [_c("i", { staticClass: "far fa-list-alt" })]
    )
  }
]
render._withStripped = true



/***/ })

}]);