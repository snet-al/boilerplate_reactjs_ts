import React from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type InputProps = MuiTextFieldProps;

export const Input: React.FC<InputProps> = ({
  variant = 'outlined',
  fullWidth = true,
  ...rest
}) => {
  return <MuiTextField variant={variant} fullWidth={fullWidth} {...rest} />;
};

