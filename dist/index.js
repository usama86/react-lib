"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ButtonComponent: () => ButtonComponent
});
module.exports = __toCommonJS(src_exports);

// src/Button/index.tsx
var import_Button = __toESM(require("@mui/material/Button"));

// src/Typography/index.tsx
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_jsx_runtime = require("react/jsx-runtime");
function TypographyComponent(_a) {
  var _b = _a, {
    children,
    variant
  } = _b, otherProps = __objRest(_b, [
    "children",
    "variant"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Typography.default, __spreadProps(__spreadValues({ variant }, otherProps), { children }));
}
TypographyComponent.defaultProps = {
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}),
  variant: "h4"
};

// src/Button/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ButtonComponent = (_a) => {
  var _b = _a, {
    children,
    onClick,
    variant
  } = _b, otherProps = __objRest(_b, [
    "children",
    "onClick",
    "variant"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_Button.default, __spreadProps(__spreadValues({ onClick }, otherProps), { children: variant ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TypographyComponent, { variant, component: "p", children }) : children }));
};
ButtonComponent.defaultProps = {
  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {})
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonComponent
});
