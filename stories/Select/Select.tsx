import React, { ReactNode } from "react";
import { SelectComponent } from "../../src/Select";

export interface ButtonProps {
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
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: ReactNode;
  variant?: any;
  types?: "save" | "cancel" | undefined;
  [key: string]: any; // Allow any other additional props
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  types,
  ...props
}: ButtonProps) => {
  return (
    <SelectComponent
      label="Select"
      handleValueChange={(e) => {
        console.log(e);
      }}
      options={[
        { label: "hi", val: "hi" },
        { label: "hi", val: "hi" },
      ]}
      value="hi"
      {...props}
    />
  );
};

// Button.defaultProps = {
//   types: "save",
// };
