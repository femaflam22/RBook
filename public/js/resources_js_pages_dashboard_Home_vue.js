"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboard_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "home",
  data: function data() {
    return {
      users: null,
      categories: [],
      rating: {},
      ratingCheck: false,
      sendRating: {
        user_id: null,
        rating: null,
        description: '',
        image: ''
      }
    };
  },
  created: function created() {
    this.getUsers();
    this.getCategories();
    this.getRating();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['errors', 'errorMessage', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('user', ['index'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('categories', ['selectLimit'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('ratings', ['show', 'create'])), {}, {
    showForm: function showForm(event) {
      document.getElementById("form").classList.remove("d-none");
      document.getElementById("form").classList.add("d-block");
      var rate = event.target.id;
      this.sendRating.rating = rate;
      document.getElementById("rate").value = "rate : " + rate;
    },
    getUsers: function getUsers() {
      var _this = this;

      this.index().then(function (result) {
        _this.users = result.data.length;
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      this.selectLimit().then(function (result) {
        _this2.categories = result.data;
      });
    },
    getRating: function getRating() {
      var _this3 = this;

      var user = JSON.parse(localStorage.getItem('user'));
      this.show(user.id).then(function (result) {
        _this3.rating = result.data[0];

        if (result.data.length > 0) {
          _this3.ratingCheck = true;
        }
      });
    },
    send: function send() {
      var _this4 = this;

      var user = JSON.parse(localStorage.getItem('user'));
      this.sendRating.user_id = user.id;

      if (this.sendRating.rating == 4) {
        this.sendRating.image = 'happy.png';
      } else if (this.sendRating.rating == 3) {
        this.sendRating.image = 'smile.png';
      } else if (this.sendRating.rating == 2) {
        this.sendRating.image = 'sad.png';
      } else {
        this.sendRating.image = 'angry.png';
      }

      this.create(this.sendRating).then(function () {
        _this4.getRating();
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-c31a777a]{\r\n    padding-top: 70px;\n}\n.logo img[data-v-c31a777a] {\r\n    width: 50px;\r\n    height: 50px;\n}\n.card[data-v-c31a777a] {\r\n    display: block;\r\n    padding: 30px 40px;\r\n    border: none;\r\n    margin-top: 5%;\r\n    margin-bottom: 0;\r\n    max-width: 800px;\n}\n.far[data-v-c31a777a] {\r\n    color: rgba(15, 198, 239, 0.97) !important;\r\n    font-size: 16px !important;\n}\np.heading[data-v-c31a777a] {\r\n    font-weight: bold;\r\n    font-size: 25px;\n}\np.text-muted[data-v-c31a777a] {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #a1a7ae !important;\n}\n.btn-sm[data-v-c31a777a] {\r\n    border-radius: 8px;\n}\n.fas.fa-users[data-v-c31a777a] {\r\n    color: rgba(15, 198, 239, 0.97) !important;\n}\n.mutual span[data-v-c31a777a] {\r\n    font-size: 14px;\r\n    color: #adb5bd;\r\n    font-weight: bold;\n}\n.btn-primary span[data-v-c31a777a] {\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-weight: bold\n}\n.category-content[data-v-c31a777a] {\r\n    padding: 20px;\r\n    max-width: 800px;\n}\n.w-box[data-v-c31a777a]{\r\n    width: 200px;\n}\n.box[data-v-c31a777a] {\r\n    padding: 20px;\r\n    transition: all .4s ease-in-out;\r\n    cursor: pointer;\n}\n.box[data-v-c31a777a]:hover {\r\n    box-shadow: 2px 2px 10px #a5a5a5;\r\n    transform: scale(1.03);\n}\na[data-v-c31a777a]:hover {\r\n    text-decoration: none;\n}\n.pale img[data-v-c31a777a] {\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    width: 25px;\r\n    height: 25px;\n}\np.text-muted.text-book[data-v-c31a777a] {\r\n    margin: 0;\r\n    font-size: 0.9rem;\n}\nb[data-v-c31a777a] {\r\n    font-size: 1.12rem;\n}\n.rounded-circle[data-v-c31a777a] {\r\n    width: 40px;\r\n    height: 40px;\n}\n.blue[data-v-c31a777a] {\r\n    background-color: #bedcfa;\n}\n.info[data-v-c31a777a] {\r\n   margin-top: 0;\r\n   margin-bottom: 20px;\r\n   max-width: 800px;\n}\n.content-info .panel-group[data-v-c31a777a] {\r\n    margin-bottom: 0;\n}\n.content-info .panel[data-v-c31a777a] {\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n    border-bottom: 10px solid transparent;\r\n    border-radius: 0;\r\n    margin: 0;\n}\n.content-info .panel-default[data-v-c31a777a] {\r\n    border: 0;\n}\n.content-info .panel-default>.panel-heading[data-v-c31a777a] {\r\n    background: #3490dc;\r\n    border-radius: 0px;\r\n    border-color: #3490dc;\n}\n.accordion-wrap .panel-heading[data-v-c31a777a] {\r\n    padding: 0px;\r\n    border-radius: 0px;\n}\n.panel-title[data-v-c31a777a] {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n    color: inherit;\n}\n.content-info .panel .panel-heading a.collapsed[data-v-c31a777a] {\r\n    color: #999999;\r\n    background-color: #fff;\r\n    display: block;\r\n    padding: 12px 20px;\n}\n.content-info .panel .panel-heading a[data-v-c31a777a] {\r\n    display: block;\r\n    padding: 12px 20px;\r\n    color: #fff;\n}\n.accordion-wrap .panel .panel-heading a[data-v-c31a777a] {\r\n    font-size: 14px;\n}\n.content-info .panel-group .panel-heading+.panel-collapse>.panel-body[data-v-c31a777a] {\r\n    border-top: 0;\r\n    padding-top: 0;\r\n    padding: 20px 20px 20px 30px;\r\n    background: #3490dc;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    line-height: 24px;\n}\n.content-info .panel .panel-heading a[data-v-c31a777a]:after {\r\n    content: \"\\2212\";\r\n    color: #463fac;\r\n    background: #fff;\n}\n.content-info .panel .panel-heading a[data-v-c31a777a]:after,\r\n.content-info .panel .panel-heading a.collapsed[data-v-c31a777a]:after {\r\n    font-size: 14px;\r\n    float: right;\r\n    width: 21px;\r\n    display: block;\r\n    height: 21px;\r\n    line-height: 21px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    color: #FFF;\n}\n.content-info .panel .panel-heading a.collapsed[data-v-c31a777a]:after {\r\n    content: \"\\2b\";\r\n    color: #fff;\r\n    background-color: #DADADA;\n}\n.content-info .panel .panel-heading a[data-v-c31a777a]:after {\r\n    content: \"\\2212\";\r\n    color: #463fac;\r\n    background: #dadada;\n}\na[data-v-c31a777a]:link {\r\n    text-decoration: none;\n}\n.rate-card[data-v-c31a777a] {\r\n    max-width: 800px;\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    margin-bottom: 40px;\n}\n.rate-card h3[data-v-c31a777a] {\r\n    font-weight: 300 !important;\r\n    font-size: 21px;\n}\n.rate-card p[data-v-c31a777a] {\r\n    font-weight: 100 !important;\r\n    font-size: 13px;\n}\n.ratings img[data-v-c31a777a] {\r\n    width: 50px;\r\n    cursor: pointer;\r\n    transition: all 0.5s;\n}\n.ratings img[data-v-c31a777a]:hover {\r\n    transform: scale(1.5);\n}\n.ratings .selected[data-v-c31a777a] {\r\n    max-width: 150px;\n}\n.ratings .desc[data-v-c31a777a] {\r\n    max-width: 400px;\r\n    display: block;\r\n    margin: auto;\n}\n@media (max-width: 520px) {\n.ratings .desc[data-v-c31a777a] {\r\n        max-width: 250px;\n}\n}\n@media (max-width: 500px){\n.card[data-v-c31a777a]{\r\n        padding: 30px 20px;\n}\n.logo img[data-v-c31a777a]{\r\n        width: 35px;\r\n        height: 35px;\n}\np.heading[data-v-c31a777a]{\r\n        font-size: 18px;\n}\np.text-muted[data-v-c31a777a]{\r\n        font-size: 14px;\n}\n.btn-sm[data-v-c31a777a]{\r\n        font-size: 10px;\n}\n.mutual span[data-v-c31a777a]{\r\n        font-size: 12px;\n}\n.h4[data-v-c31a777a]{\r\n        font-size: 18px;\n}\nb[data-v-c31a777a]{\r\n        font-size: 0.9rem;\n}\np.text-muted.text-book[data-v-c31a777a]{\r\n        font-size: 0.7rem;\n}\n.panel-title[data-v-c31a777a]{\r\n        font-size: 13px;\n}\n.content-info .panel-group .panel-heading+.panel-collapse>.panel-body[data-v-c31a777a]{\r\n        font-size: 12px;\n}\n.content-info .panel .panel-heading a[data-v-c31a777a]:after,\r\n    .content-info .panel .panel-heading a.collapsed[data-v-c31a777a]:after {\r\n        width: 19px;\r\n        height: 19px;\r\n        line-height: 18px;\n}\n.ratings img[data-v-c31a777a]{\r\n        width: 40px;\n}\n.rate-card .heading h3[data-v-c31a777a]{\r\n        font-size: 18px;\n}\n.rate-card .heading p[data-v-c31a777a]{\r\n        font-size: 11px;\n}\n.btn-orange[data-v-c31a777a]{\r\n        font-size: 11px;\n}\ntextarea[data-v-c31a777a]{\r\n        font-size: 11px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_c31a777a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_c31a777a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_c31a777a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/dashboard/Home.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/dashboard/Home.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_c31a777a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=c31a777a&scoped=true& */ "./resources/js/pages/dashboard/Home.vue?vue&type=template&id=c31a777a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_c31a777a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css& */ "./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_c31a777a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_c31a777a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c31a777a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/Home.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Home.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_c31a777a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=style&index=0&id=c31a777a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/dashboard/Home.vue?vue&type=template&id=c31a777a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Home.vue?vue&type=template&id=c31a777a&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_c31a777a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_c31a777a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_c31a777a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=c31a777a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=template&id=c31a777a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=template&id=c31a777a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/Home.vue?vue&type=template&id=c31a777a&scoped=true& ***!
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
  return _c("div", { staticClass: "container" }, [
    _vm.isLoading ? _c("div", { staticClass: "spinner" }) : _vm._e(),
    _vm._v(" "),
    _vm.errorMessage
      ? _c("div", { staticClass: "alert alert-danger mb-4" }, [
          _vm._v("\r\n        " + _vm._s(_vm.errorMessage) + "\r\n    ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "card mx-auto" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted" }, [
        _vm._v(
          "Mulai impianmu menjadi seorang penulis dari sini. Kamu bisa mulai merancang dan mempublikasikan buku hasil karyamu, dan dapatkan kesempatan untuk penerbitan versi cetak untuk hasil karyamu..."
        )
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "mutual" }, [
        _c("i", { staticClass: "fas fa-users" }),
        _vm._v("  "),
        _c("span", [_vm._v(_vm._s(_vm.users) + " orang telah bergabung")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "category-content bg-light rounded mx-auto" }, [
      _c("div", { staticClass: "h4 font-weight-bold text-center py-3" }, [
        _vm._v("Rekomendasi Genre")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-wrap justify-content-center" },
        _vm._l(_vm.categories, function(category, index) {
          return _c("div", { key: index, staticClass: "w-box mb-3 mr-3" }, [
            _c("div", { staticClass: "box bg-white" }, [
              _c("div", { staticClass: "d-flex align-items-center" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "rounded-circle mr-3 ml-0 text-center d-flex align-items-center justify-content-center blue pale"
                  },
                  [
                    _c("img", {
                      attrs: { src: category.url_image, alt: "category" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex flex-column" }, [
                  _c("b", [_vm._v(_vm._s(category.name))]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("p", { staticClass: "text-muted text-book" }, [
                      _vm._v(_vm._s(category.book_total) + " buku")
                    ])
                  ])
                ])
              ])
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _vm.ratingCheck == false
      ? _c("div", { staticClass: "rate-card mx-auto" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "ratings", attrs: { id: "ratings" } }, [
            _c("img", {
              attrs: {
                src: "http://127.0.0.1:8000/assets/img/emoji/angry.png",
                id: "1"
              },
              on: { click: _vm.showForm }
            }),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: "http://127.0.0.1:8000/assets/img/emoji/sad.png",
                id: "2"
              },
              on: { click: _vm.showForm }
            }),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: "http://127.0.0.1:8000/assets/img/emoji/smile.png",
                id: "3"
              },
              on: { click: _vm.showForm }
            }),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: "http://127.0.0.1:8000/assets/img/emoji/happy.png",
                id: "4"
              },
              on: { click: _vm.showForm }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group d-none mt-4", attrs: { id: "form" } },
            [
              _c("input", {
                staticClass: "form-control mb-3",
                attrs: { type: "text", id: "rate", disabled: "" }
              }),
              _vm._v(" "),
              _c("label", [_vm._v("Ulasan :")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sendRating.description,
                    expression: "sendRating.description"
                  }
                ],
                staticClass: "form-control",
                attrs: { textarea: "", rows: "3" },
                domProps: { value: _vm.sendRating.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sendRating, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "post-button" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-orange text-white mt-3",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.send.apply(null, arguments)
                      }
                    }
                  },
                  [_vm._v("Kirim Penilaian")]
                )
              ])
            ]
          )
        ])
      : _c("div", { staticClass: "rate-card mx-auto" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "ratings d-flex justify-content-center" }, [
            _c("div", { staticClass: "d-flex flex-wrap" }, [
              _c("div", { staticClass: "selected" }, [
                _c("img", {
                  staticClass: " pt-3",
                  attrs: { src: _vm.rating.url_image }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "ml-2 text-justify desc" }, [
                _c("small", [_vm._v(_vm._s(_vm.rating.description))])
              ])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "logo ml-3 mb-3" }, [
        _c("img", { attrs: { src: "http://127.0.0.1:8000/assets/img/r.png" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title" }, [
      _c("p", { staticClass: "heading" }, [_vm._v("RBook")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex my-4" }, [
      _c("div", { staticClass: "w-auto mr-3" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-outline-success btn-sm",
            staticStyle: { background: "#00ff002b" },
            attrs: { type: "button" }
          },
          [_vm._v("Membuat Buku Bacaan")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-auto mr-3" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-outline-primary btn-sm",
            staticStyle: { background: "#007bff33" },
            attrs: { type: "button" }
          },
          [_vm._v("Membaca Buku")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-auto" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-outline-danger btn-sm",
            staticStyle: { background: "#dc35452e" },
            attrs: { type: "button" }
          },
          [_vm._v("Kesempatan Diterbitkan")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-light info mx-auto" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12 content-info py-3" }, [
          _c(
            "div",
            { staticClass: "panel-group", attrs: { id: "info-panel" } },
            [
              _c("div", { staticClass: "panel panel-default" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-parent": "#info-panel",
                          href: "#collapseTwoLeftone",
                          "aria-expanded": "false"
                        }
                      },
                      [_vm._v(" Tentang Kami ")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "panel-collapse collapse",
                    staticStyle: { height: "0px" },
                    attrs: {
                      id: "collapseTwoLeftone",
                      "aria-expanded": "false",
                      role: "tablist"
                    }
                  },
                  [
                    _c("div", { staticClass: "panel-body" }, [
                      _vm._v(
                        " RBooks merupakan situs membaca dan menulis daring, yang berdiri sejak tahun 2021. RBooks menawarkan pengalaman menarik bagi para pecinta dunia sastra. Kami memberi kesempatan kepada penulis untuk mempublikasikan hasil karyanya secara online yang dapat diakses oleh siapun dan dimanapun. Untuk hasil karya yang menarik dengan peminat yang banyak, akan mendapat kesempatan buku diterbitkan oleh penerbit mitra RBooks. Rasakan pengalaman dunia tulis dalam genggaman-mu! "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "panel panel-default" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-parent": "#info-panel",
                          href: "#collapseTwoLeftTwo",
                          "aria-expanded": "false"
                        }
                      },
                      [_vm._v(" Bagaimana Cara Mempublikasikan Buku? ")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "panel-collapse collapse",
                    attrs: {
                      id: "collapseTwoLeftTwo",
                      "aria-expanded": "false",
                      role: "tablist"
                    }
                  },
                  [
                    _c("div", { staticClass: "panel-body" }, [
                      _vm._v(
                        " Kamu dapat membuat karya tulismu sendiri dan dapat mempublikasikannya agar dapat dibaca oleh orang lain. Caranya cukup dengan :\r\n                            "
                      ),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list-group text-dark" }, [
                        _c("li", { staticClass: "list-group-item" }, [
                          _vm._v("1. Kunjungi tanda profil di navbar")
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-group-item" }, [
                          _vm._v(
                            '2. Klik "Daftar Tulisan" pada list kelola akun'
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-group-item" }, [
                          _vm._v('3. Klik tombol "Tambah"')
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-group-item" }, [
                          _vm._v("4. Lengkapi form yang tersedia")
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "list-group-item" }, [
                          _vm._v(
                            '5. Jika sudah lengkap dan sesuai, klik tombol "Buat Buku"'
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(
                        "\r\n                                Kamu juga dapat mengelola daftar bab per-buku yang kamu buat ataupun mengedit detail buku maupun isi buku.\r\n                            "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "panel panel-default" }, [
                _c("div", { staticClass: "panel-heading" }, [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-parent": "#info-panel",
                          href: "#collapseTwoLeftThree",
                          "aria-expanded": "false"
                        }
                      },
                      [_vm._v(" Pembaca Dapat Melakukan Apa Saja? ")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "panel-collapse collapse",
                    attrs: {
                      id: "collapseTwoLeftThree",
                      "aria-expanded": "false",
                      role: "tablist"
                    }
                  },
                  [
                    _c("div", { staticClass: "panel-body" }, [
                      _vm._v(
                        " Kamu dapat menambahkan buku kedalam daftar bacaan pribadimu, yang nantinya dapat di akses dengan menekan ikon "
                      ),
                      _c("strong", [_vm._v("bookmark")]),
                      _vm._v(
                        ". Kamu dapat memberikan penilaian maupun komentar pada tiap-tiap bab buku sebagai bentuk dukungan kepada sang penulis."
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading" }, [
      _c("h3", { staticClass: "font-weight-bold" }, [
        _vm._v("Berikan penilai untuk kami!")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Kami sangat berterima kasih apabila anda berkenan untuk memberikan penilaian atau saran kepada kami."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading" }, [
      _c("h3", { staticClass: "font-weight-bold" }, [
        _vm._v("Terima kasih telah memberi penilaian!")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Kami sangat berterima kasih atas penilaian dan ulasan anda, penilaian anda sangat berarti bagi kami."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);