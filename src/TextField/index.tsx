import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "../../stories/TextField/TextField";
import { textStyle } from "./style";
import { StyledTextField } from "./styledTextField";

export function TextFieldComponent({
  Label,
  variant,
  value,
  onChange,
  sx,
  types,
  withChip,
  ...otherProps
}: TextFieldProps) {
  return (
    <>
      {" "}
      {withChip || withChip === "" ? (
        <StyledTextField
          id="outlined-basic"
          value={value}
          onChange={onChange}
          label={Label}
          variant={variant ? variant : "outlined"}
          sx={{ ...sx, ...textStyle.chipTextStyle }}
          alias={withChip}
          {...otherProps}
        />
      ) : (
        <TextField
          id="outlined-basic"
          value={value}
          onChange={onChange}
          label={Label}
          variant={variant ? variant : "outlined"}
          sx={types && types === "disabled" ? textStyle.DisabledText : sx}
          {...otherProps}
        />
      )}
    </>
  );
}

//"outlined"
