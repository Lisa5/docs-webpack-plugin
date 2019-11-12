(window.webpackJsonp=window.webpackJsonp||[]).push([[25,32],{383:function(t,e,n){"use strict";n.r(e);var o=n(3),i=n.n(o),r=n(19),a=n(93),c=n.n(a);n(438);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&(n[o[i]]=t[o[i]])}return n},m="lm-notice",w=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=h(this,f(e).call(this,t))).wrapWidth=0,n.childrenWidth=0,n.overflowWidth=0,n.state={show:!0,animateWidth:0},n}var n,a,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,o["Component"]),n=e,(a=[{key:"componentDidMount",value:function(){this.wrap=Object(r.findDOMNode)(this.refs.wrap),this.content=Object(r.findDOMNode)(this.refs.content),this.children=Object(r.findDOMNode)(this.refs.children),this.wrapWidth=this.getElementWidth(this.wrap),this.childrenWidth=this.getElementWidth(this.children),this.overflowWidth=this.childrenWidth-this.wrapWidth,this.startAnimation()}},{key:"startAnimation",value:function(){var t=this,e=this.props,n=e.loop,o=e.fps,i=1/(void 0===o?1:o)*1e3,r=this.childrenWidth+this.wrapWidth/2;if(this.overflowWidth>0){this.children.style.width="".concat(r,"px");var a=this.children.cloneNode(!0);this.content.appendChild(a),this.animationTimer=window.setTimeout(function e(){var o=t.state.animateWidth+1;if(n)o>r&&(o=0);else if(o>t.overflowWidth)return;t.setState({animateWidth:o}),t.animationTimer=window.setTimeout(e,i)},i)}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.animationTimer)}},{key:"getElementWidth",value:function(t){return parseFloat(window.getComputedStyle(t).width||"")}},{key:"onClick",value:function(){"close"===this.props.type&&this.setState({show:!1}),this.props.onClick&&this.props.onClick()}},{key:"getOperationDom",value:function(){var t=this.props,e=t.type,n=t.action;return"normal"===e?n?i.a.createElement("div",{className:"".concat(m,"-operation")},n):null:"link"===e?i.a.createElement("div",{className:"".concat(m,"-operation")},i.a.createElement("i",{className:"".concat(m,"-arrowright")})):"close"===e?i.a.createElement("div",{className:"".concat(m,"-operation")},i.a.createElement("i",{className:"".concat(m,"-close")})):void 0}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,o=(e.action,e.children),r=(e.onClick,e.fps,e.loop,d(e,["className","action","children","onClick","fps","loop"])),a=this.state,l=a.show,p=a.animateWidth;return l?i.a.createElement("div",s({className:c()("".concat(m),n),onClick:function(){t.onClick()}},r),i.a.createElement("div",{className:"".concat(m,"-wrap"),ref:"wrap"},i.a.createElement("div",{className:"".concat(m,"-content"),style:{transform:"translateX(-".concat(p,"px)")},ref:"content"},i.a.createElement("div",{className:"".concat(m,"-children"),ref:"children"},o))),this.getOperationDom()):null}}])&&p(n.prototype,a),l&&p(n,l),e}();w.defaultProps={onClick:function(){},type:"normal",fps:40,loop:!0},e.default=w},438:function(t,e,n){var o=n(439);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(26)(o,i);o.locals&&(t.exports=o.locals)},439:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".lm-notice {\n  background: #FFF6D4;\n  color: #FC7946;\n  line-height: 1.3344rem;\n  height: 1.3344rem;\n  font-size: 0.5421rem;\n  padding: 0 0.6255rem;\n  display: flex; }\n  .lm-notice-wrap {\n    flex: 1;\n    overflow: hidden; }\n  .lm-notice-content {\n    white-space: nowrap; }\n  .lm-notice-children {\n    white-space: nowrap;\n    display: inline-block; }\n  .lm-notice-operation {\n    font-size: 0.417rem;\n    color: #ACB4B9;\n    margin-left: 0.417rem; }\n  .lm-notice-arrowright {\n    display: inline-block;\n    margin-top: 0.3336rem;\n    background: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M463.903 1024c-14.234 0-28.399-5.734-38.81-16.964-19.9-21.367-18.671-54.886 2.765-74.82l452.54-420.215-452.54-420.215c-21.47-19.934-22.699-53.453-2.765-74.854 19.866-21.402 53.419-22.665 74.82-2.799l494.319 459.025c10.82 10.035 16.964 24.132 16.964 38.844s-6.144 28.809-16.964 38.81l-494.319 459.059a52.887 52.887 0 0 1-36.011 14.131z' fill='%23ACB4B9'/%3E%3C/svg%3E\") no-repeat center;\n    height: 0.6672rem;\n    width: 0.6255rem;\n    background-size: 100%; }\n  .lm-notice-close {\n    display: inline-block;\n    margin-top: 0.3336rem;\n    background: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1026 1024' xmlns='http://www.w3.org/2000/svg' width='200.391' height='200'%3E%3Cpath d='M513.733 443.726L863.818 93.69l70.057 69.957L583.74 513.733l350.036 350.085-70.007 70.057L513.733 583.79 163.598 933.825 93.59 863.818l350.085-350.036L93.64 163.647l69.958-70.007 350.085 350.086z' fill='%23ACB4B9'/%3E%3C/svg%3E\") no-repeat center;\n    height: 0.6672rem;\n    width: 0.6255rem;\n    background-size: 100%; }\n",""])},93:function(t,e,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)&&o.length){var a=i.apply(null,o);a&&t.push(a)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(o=function(){return i}.apply(e,[]))||(t.exports=o)}()}}]);