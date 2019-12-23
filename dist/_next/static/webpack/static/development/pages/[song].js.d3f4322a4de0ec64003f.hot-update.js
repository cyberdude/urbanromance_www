webpackHotUpdate("static/development/pages/[song].js",{

/***/ "./pages/[song].tsx":
/*!**************************!*\
  !*** ./pages/[song].tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.tsx");
/* harmony import */ var _components_global_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global-styles */ "./components/global-styles.js");
/* harmony import */ var _components_StoreLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StoreLinks */ "./components/StoreLinks.tsx");
var _jsxFileName = "/Users/arnaldocapo/urbanromance/urbanromance/pages/[song].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var songs = {
  "apple-tree": {
    label: "Apple Tree",
    soundcloudTrackId: "698207227",
    storeLinks: {
      itunes: {
        url: "http://arnaldocapo.com"
      },
      spotify: {
        url: "http://arnaldocapo.com"
      }
    }
  }
};

var Home = function Home() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var query = router.query;
  var song = query.song;
  var trackInfo = songs[song];

  if (!trackInfo) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Song not found");
  }

  console.info("Loading track", {
    trackInfo: trackInfo
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "URBANROMANCE - ", trackInfo.label), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(_components_global_styles__WEBPACK_IMPORTED_MODULE_5__["GlobalStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, trackInfo.label), __jsx(SouncloudPlayer, {
    width: "550",
    height: "166",
    scrolling: "no",
    allow: "autoplay",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/".concat(trackInfo.soundcloudTrackId, "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_components_StoreLinks__WEBPACK_IMPORTED_MODULE_6__["StoreLinks"], {
    links: trackInfo.storeLinks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
};

var Content = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div({
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  display: "flex",
  textAlign: "center"
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1({
  textTransform: "uppercase"
});
var SouncloudPlayer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].iframe({
  border: "none"
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=[song].js.d3f4322a4de0ec64003f.hot-update.js.map