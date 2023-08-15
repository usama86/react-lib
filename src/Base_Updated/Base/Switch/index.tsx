import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';

const SwitchComponent = styled(({ ...props }) => <Switch disableRipple {...props} />)(
  () => ({
    marginTop: 4,
    marginBottom: 0,
    marginLeft: 16,
    marginRight: 8,
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        color: '#fff',
        '& + .MuiSwitch-track': {
          height: '19px',
          width: '39px',
          opacity: 1,
          border: 0,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      marginTop: '-1px',
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 16,
      backgroundColor: '#B8BAC7',
      opacity: 1,
      height: '19px',
      width: '39px',
    },
  })
);

export default SwitchComponent;
