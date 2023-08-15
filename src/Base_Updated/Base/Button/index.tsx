import { ReactNode } from 'react';
import { Button } from '@mui/material';
import TypographyComponent from '../Typography';
import { btnStyles } from './style';
import { ButtonTypes } from '../../../utils/constants';
import CircularProgressComponent from '../CircularProgress';

type IProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  [key: string]: any; // Allow any other additional props
  variant?: any;
  types?: ButtonTypes;
  isLoading?: boolean;
  color?: string;
  sx?: any;
};

export default function ButtonComponent({
  children,
  onClick,
  color,
  variant,
  types,
  isLoading,
  sx,
  ...otherProps
}: IProps) {
  const getStyles = () => {
    if (types == ButtonTypes.White) return { ...btnStyles.whiteButton };
    else if (types == ButtonTypes.BlackDisabled || otherProps.disabled)
      return { ...btnStyles.blackDisabledButton };
    return { ...btnStyles.blackButton };
  };

  const getColor = () => {
    if (types == ButtonTypes.White) return '#132640';
    return '#FFFFFF';
  };

  const loader = () => (
    <CircularProgressComponent size={20} sx={{ color: 'white' }} />
  );

  return (
    <Button
      onClick={onClick}
      sx={{
        ...getStyles(),
        ...sx,
      }}
      {...otherProps}
    >
      {variant ? (
        <TypographyComponent variant={variant} component="p" color={color ? color : getColor()}>
          {isLoading ? loader() : children}
        </TypographyComponent>
      ) : isLoading ? (
        loader()
      ) : (
        children
      )}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  children: <></>,
};
