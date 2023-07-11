import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type IProps = {
  Label?: string;
  variant?: any;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any; // Allow any other additional props
};

export function TextFieldComponent({
  Label,
  variant,
  value,
  onChange,
  ...otherProps
}: IProps) {
  return (
    <TextField
      id="outlined-basic"
      value={value}
      onChange={onChange}
      label={Label}
      variant={variant ? variant : "outlined"}
      {...otherProps}
    />
  );
}

//"outlined"
