import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}
declare const Button: ({ children, onClick }: ButtonProps) => React.JSX.Element;

export { Button, ButtonProps };
