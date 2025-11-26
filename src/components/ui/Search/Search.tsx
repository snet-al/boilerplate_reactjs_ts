import React from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type SearchProps = MuiTextFieldProps & {
  onSearch?: (value: string) => void;
};

export const Search: React.FC<SearchProps> = ({
  onSearch,
  variant = 'outlined',
  fullWidth = true,
  placeholder = 'Search...',
  onKeyDown,
  ...rest
}) => {
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDown?.(event);

    if (event.key === 'Enter') {
      onSearch?.((event.target as HTMLInputElement).value);
    }
  };

  return (
    <MuiTextField
      type="search"
      variant={variant}
      fullWidth={fullWidth}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

