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
  BoxComponent: () => BoxComponent,
  ButtonComponent: () => ButtonComponent,
  SelectComponent: () => SelectComponent,
  TextFieldComponent: () => TextFieldComponent,
  TypographyComponent: () => TypographyComponent
});
module.exports = __toCommonJS(src_exports);

// src/Button/index.tsx
var import_Button = __toESM(require("@mui/material/Button"));

// src/Typography/index.tsx
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_styles2 = require("@mui/material/styles");

// src/Typography/mui.theme.ts
var import_styles = require("@mui/material/styles");
var typographyOptions = {
  fontSize: 13,
  fontFamily: '"Montserrat", sans-serif;',
  HomeBold: {
    //styleName: Heading/Heading - l;
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: 1.25,
    letterSpacing: "0em",
    textAlign: "left"
  },
  XSmallHeading: {
    //styleName: Heading/Heading - xs;
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  },
  SmallHeading: {
    //styleName: Heading/Heading - s;
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0em",
    textAlign: "left"
  },
  CTA_Button_L: {
    //styleName: Buttons/CTA_Button - l;
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  },
  CTA_Button_M: {
    //styleName: Buttons/CTA_Button - m;
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: "0em",
    textAlign: "left"
  },
  CTA_Button_S: {
    //styleName: Buttons/CTA_Button - s;
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  },
  SubTitle: {
    //styleName: Sub Titles/Subtitle - s;
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  },
  Body_Content_S: {
    //styleName: Body/Content/Body - s;
    fontFamily: "Open Sans",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: 1.38,
    letterSpacing: "0em",
    textAlign: "left"
  },
  Body_Content_M: {
    //styleName: Body/Content/Body - m;
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  },
  Body_Content_BM: {
    //styleName: Body - Content/B-m;
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.57,
    letterSpacing: "0em",
    textAlign: "center"
  },
  Body_Labels_M: {
    //styleName: Body/Labels/Label - M2 (Table);
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1.6,
    letterSpacing: "0em",
    textAlign: "left"
  },
  Body_Labels_M1: {
    //styleName: Body/Labels/Label - M1 (Input);
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: 1.16,
    letterSpacing: "0em",
    textAlign: "left"
  },
  SubHeading: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  },
  SubHeadingText: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: 1.5,
    letterSpacing: "0em"
  },
  DialogText: {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: 1.333,
    letterSpacing: "0em"
  },
  DialogSubTitle: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0em"
  },
  RadioText: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.57,
    letterSpacing: "0.03em",
    textAlign: "left"
  },
  HelperText: {
    //styleName: New Styles/Components/Helper text;
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.4000000059604645px",
    textAlign: "left"
  },
  LabelOSI: {
    //styleName: Body/Labels/Label - OS1 (Captions);
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0em",
    textAlign: "left"
  }
};
var theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#005596"
    },
    secondary: {
      main: "#FFFFFF"
    },
    action: {
      disabled: "#aaa"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#edebeb",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#edebeb",
            width: "0.5em",
            height: "0.5em"
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#979797",
            minHeight: 1,
            minWidth: 2,
            maxWidth: 1
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#edebeb"
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#edebeb"
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#979797"
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#ffffff"
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#132640",
          color: "white"
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          p: {
            marginBottom: 0
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px"
          // backgroundColor: "#005596",
          // color: "white",
          // border: "0px",
          // "&.Mui-disabled": {
          //   backgroundColor: "#D1D3D4",
          //   color: "#58595B",
          // },
          // "&:hover": {
          //   backgroundColor: "white",
          //   BorderColor: "#white",
          //   color: "#58595B",
          //   borderColor: "#005596",
          // },
        }
      }
    }
  },
  typography: typographyOptions
});
theme = (0, import_styles.responsiveFontSizes)(theme);
var mui_theme_default = theme;

// src/Typography/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TypographyComponent(_a) {
  var _b = _a, {
    children,
    variant
  } = _b, otherProps = __objRest(_b, [
    "children",
    "variant"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styles2.ThemeProvider, { theme: mui_theme_default, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Typography.default, __spreadProps(__spreadValues({ variant }, otherProps), { children })) });
}

// src/Button/style.tsx
var btnStyles = {
  cancelButton: {
    height: "34px",
    width: "auto",
    borderRadius: "30px",
    padding: "10px 20px 10px 20px",
    color: "#132640",
    background: "#FFFFFF",
    border: "1px solid #C5C7D4"
  },
  saveButton: {
    height: "34px",
    width: "auto",
    borderRadius: "30px",
    padding: "10px 20px 10px 20px",
    color: "#FFFFFF",
    background: "#132640",
    "&:hover": {
      backgroundColor: "#132640"
    }
  }
};

// src/Button/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ButtonComponent = (_a) => {
  var _b = _a, {
    children,
    onClick,
    variant,
    types,
    backgroundColor,
    size,
    sx
  } = _b, otherProps = __objRest(_b, [
    "children",
    "onClick",
    "variant",
    "types",
    "backgroundColor",
    "size",
    "sx"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_Button.default,
    __spreadProps(__spreadValues({
      onClick,
      sx: types && types === "save" ? __spreadProps(__spreadValues({}, btnStyles.saveButton), { backgroundColor }) : types === "cancel" ? __spreadProps(__spreadValues({}, btnStyles.cancelButton), { backgroundColor }) : sx
    }, otherProps), {
      size,
      children: variant ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TypographyComponent, { variant, component: "p", children }) : children
    })
  );
};
ButtonComponent.defaultProps = {
  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {})
};

// src/Box/index.tsx
var import_Box = __toESM(require("@mui/material/Box"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function BoxComponent(_a) {
  var _b = _a, { children } = _b, otherProps = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_Box.default, __spreadProps(__spreadValues({}, otherProps), { children }));
}
BoxComponent.defaultProps = {
  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, {})
};

// src/Select/index.tsx
var React = __toESM(require("react"));
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_InputLabel = __toESM(require("@mui/material/InputLabel"));
var import_MenuItem = __toESM(require("@mui/material/MenuItem"));
var import_FormControl = __toESM(require("@mui/material/FormControl"));
var import_Select = __toESM(require("@mui/material/Select"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function SelectComponent(_a) {
  var _b = _a, {
    value,
    handleValueChange,
    label,
    options,
    labelVariant
  } = _b, otherProps = __objRest(_b, [
    "value",
    "handleValueChange",
    "label",
    "options",
    "labelVariant"
  ]);
  const [selectVal, setSelectVal] = React.useState(value);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectVal(newValue);
    handleValueChange(newValue);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_Box2.default, { sx: { minWidth: 120 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_FormControl.default, { fullWidth: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_InputLabel.default, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_Select.default,
      __spreadProps(__spreadValues({
        value: selectVal,
        label,
        onChange: handleChange,
        fullWidth: true
      }, otherProps), {
        children: options.map((data, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_MenuItem.default, { value: data.val, children: data.label }, index))
      })
    )
  ] }) });
}
SelectComponent.defaultProps = {
  labelVariant: "Body_Labels_M1"
};

// src/TextField/index.tsx
var import_TextField = __toESM(require("@mui/material/TextField"));

// src/TextField/style.tsx
var textStyle = {
  DisabledText: {
    height: "48px",
    background: "#F2F6F9",
    maxHeight: "48px",
    border: "none",
    "& .MuiInputBase-root": {
      height: "48px",
      background: "#F2F6F9",
      maxHeight: "48px",
      border: "none"
      // borderRadius: "8px",
    },
    "& *": {
      outline: "none",
      border: "none"
    }
  },
  chipTextStyle: {
    height: "48px",
    background: "#fff",
    maxHeight: "48px",
    "& .MuiInputBase-root": {
      height: "48px",
      maxHeight: "48px",
      border: "none"
    }
  }
};

// src/TextField/styledTextField.tsx
var import_styled = __toESM(require("@emotion/styled"));
var StyledTextField = (0, import_styled.default)(TextFieldComponent)(
  (_a) => {
    var _b = _a, { theme: theme2, alias } = _b, params = __objRest(_b, ["theme", "alias"]);
    const val = alias ? alias : "";
    return {
      "& .MuiInputBase-root": {
        position: "relative",
        "&::before": {
          content: `'${val}'`,
          position: "absolute",
          padding: "2px 8px 2px 8px",
          right: 16,
          borderRadius: "30px",
          backgroundColor: val ? "#ECEEF0" : "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "86px",
          overflow: "hidden"
        }
      }
    };
  }
);

// src/TextField/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function TextFieldComponent(_a) {
  var _b = _a, {
    Label,
    variant,
    value,
    onChange,
    sx,
    types,
    withChip
  } = _b, otherProps = __objRest(_b, [
    "Label",
    "variant",
    "value",
    "onChange",
    "sx",
    "types",
    "withChip"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    " ",
    withChip || withChip === "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      StyledTextField,
      __spreadValues({
        id: "outlined-basic",
        value,
        onChange,
        label: Label,
        variant: variant ? variant : "outlined",
        sx: __spreadValues(__spreadValues({}, sx), textStyle.chipTextStyle),
        alias: withChip
      }, otherProps)
    ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_TextField.default,
      __spreadValues({
        id: "outlined-basic",
        value,
        onChange,
        label: Label,
        variant: variant ? variant : "outlined",
        sx: types && types === "disabled" ? textStyle.DisabledText : sx
      }, otherProps)
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BoxComponent,
  ButtonComponent,
  SelectComponent,
  TextFieldComponent,
  TypographyComponent
});
