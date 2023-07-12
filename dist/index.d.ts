import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ReactNode } from 'react';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label?: string;
    /**
     * Optional click handler
     */
    onClick?: (event: React$1.MouseEvent<HTMLElement, MouseEvent>) => void;
    children: ReactNode;
    variant?: any;
    types?: "save" | "cancel" | undefined;
    [key: string]: any;
}

declare const ButtonComponent: {
    ({ children, onClick, variant, types, backgroundColor, size, ...otherProps }: ButtonProps): react_jsx_runtime.JSX.Element;
    defaultProps: {
        children: react_jsx_runtime.JSX.Element;
    };
};

interface BoxComponentProps {
    children: ReactNode;
    [key: string]: any;
}

declare function BoxComponent({ children, ...otherProps }: BoxComponentProps): react_jsx_runtime.JSX.Element;
declare namespace BoxComponent {
    var defaultProps: {
        children: react_jsx_runtime.JSX.Element;
    };
}

type Option = {
    val: string;
    label: string;
};
type IProps$2 = {
    value: string;
    handleValueChange: (value: string) => void;
    label: string;
    options: Option[];
    labelVariant?: any;
    [key: string]: any;
};
declare function SelectComponent({ value, handleValueChange, label, options, labelVariant, ...otherProps }: IProps$2): react_jsx_runtime.JSX.Element;
declare namespace SelectComponent {
    var defaultProps: {
        labelVariant: string;
    };
}

type IProps$1 = {
    Label?: string;
    variant?: any;
    value?: string;
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
};
declare function TextFieldComponent({ Label, variant, value, onChange, ...otherProps }: IProps$1): react_jsx_runtime.JSX.Element;

type IProps = {
    children: ReactNode;
    variant?: any;
    [key: string]: any;
};
declare function TypographyComponent({ children, variant, ...otherProps }: IProps): react_jsx_runtime.JSX.Element;

export { BoxComponent, ButtonComponent, SelectComponent, TextFieldComponent, TypographyComponent };
