import React from 'react';
import { ReactNode } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { SnackbarStyles } from './style';
import Box from '@mui/material/Box';
import TypographyComponent from '../Typography';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const iconMapping = {
  error: <CancelOutlinedIcon />, // Use your custom error icon here
  warning: <ErrorOutlineOutlinedIcon />, // Use your custom warning icon here
  info: <InfoOutlinedIcon />, // Use your custom info icon here
  success: <CheckCircleOutlineRoundedIcon />, // Use your custom success icon here
};

type IProps = {
  open: boolean;
  handleClose?: () => void;
  snackbarText?: string;
  children?: ReactNode;
  autoHideDuration?: number;
  severity?: 'error' | 'warning' | 'info' | 'success';
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

export default function SnackbarComponent({
  open,
  handleClose,
  children,
  autoHideDuration,
  severity,
  vertical,
  horizontal,
  snackbarText,
}: IProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
      onClose={handleClose}
      sx={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
    >
      <Alert
        severity={severity}
        onClose={handleClose}
        sx={{
          marginTop: vertical === 'top' ? '-15px' : '0',
          ...SnackbarStyles.alertStyle,
        }}
        iconMapping={iconMapping}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TypographyComponent variant="SnackbarText" component="h5">
            {snackbarText}
          </TypographyComponent>
          <TypographyComponent variant="Body_Content_M" component="h5">
            {children}
          </TypographyComponent>
        </Box>
      </Alert>
    </Snackbar>
  );
}

SnackbarComponent.defaultProps = {
  vertical: 'top',
  horizontal: 'right',
  severity: 'success',
  autoHideDuration: 5000,
  snackbarText: 'Success',
};
