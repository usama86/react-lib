import React, { ReactNode } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type IProps = {
  label?: string | ReactNode;
  checked?: boolean;
  onChange: (val: boolean) => void;
  [key: string]: any; // Allow any other additional props
};

export default function CheckboxLabels({
  label,
  checked,
  onChange,
  ...otherProps
}: IProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleChange} {...otherProps} />
        }
        label={label}
      />
    </FormGroup>
  );
}
