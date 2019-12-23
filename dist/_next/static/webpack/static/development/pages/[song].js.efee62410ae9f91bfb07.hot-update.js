webpackHotUpdate("static/development/pages/[song].js",{

/***/ "./components/StoreLinks.tsx":
/*!***********************************!*\
  !*** ./components/StoreLinks.tsx ***!
  \***********************************/
/*! exports provided: StoreLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLinks", function() { return StoreLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/arnaldocapo/urbanromance/urbanromance/components/StoreLinks.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var StoreLinks = function StoreLinks(_ref) {
  var links = _ref.links;
  var itunes = links.itunes,
      spotify = links.spotify;
  return __jsx(StoreLinksContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Get the music"), __jsx(StoreAnchor, {
    href: itunes.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(StoreImage, {
    src: "/icons/itunes.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), " iTunes"), __jsx(StoreAnchor, {
    href: spotify.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(StoreImage, {
    src: "/icons/spotify.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), " Spotify"));
};
var StoreLinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div({
  textAlign: "center",
  width: "100%" // display: "flex",
  // alignItems: "center"

});
var StoreAnchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a({
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  textDecoration: "none",
  textAlign: "center"
});
var StoreImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img({
  width: 80,
  marginRight: 5
});

/***/ })

})
//# sourceMappingURL=[song].js.efee62410ae9f91bfb07.hot-update.js.map