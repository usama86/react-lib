import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    [key: string]: any;
    variant?: any;
}
declare const ButtonComponent: {
    ({ children, onClick, variant, ...otherProps }: ButtonProps): react_jsx_runtime.JSX.Element;
    defaultProps: {
        children: react_jsx_runtime.JSX.Element;
    };
};

export { ButtonComponent, ButtonProps };
