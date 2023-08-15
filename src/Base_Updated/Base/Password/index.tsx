import React from 'react';
import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { passwordStyles } from './style';

type IProps = {
  value: string;
  isFormFilled: boolean;
  copyText: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordComponent({ value, isFormFilled, onChange, copyText }: IProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <Box sx={{ width: '100%', height: '48px' }}>
      <FormControl fullWidth required>
        <InputLabel sx={passwordStyles.inputLabelStyle} htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={value.slice(0, 255)}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={passwordStyles.outlinedInputStyle}
          label="Password"
        />
      </FormControl>
      <FormHelperText sx={!isFormFilled && value == ''
        ? passwordStyles.helperTextError
        : value == '' ? null : copyText ? passwordStyles.helperTextNormal : null}>
        {!isFormFilled && value == ''
          ? 'This field must be filled'
          : value == '' ? '' : copyText ? 'Copy this password to a secure place' : ''}
      </FormHelperText>
    </Box>

  );
}

PasswordComponent.defaultProps = {
  copyText: false
};