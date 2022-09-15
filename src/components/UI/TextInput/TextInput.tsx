import { FC } from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { ITextInputProps } from '../../../models';

const TextInput: FC<ITextInputProps> = ({ 
  name, 
  label, 
  control, 
  defaultValue, 
  error,
  helperText 
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          label={label}
          variant="outlined"                      
          fullWidth
          margin="dense"                      
          error={error}
          helperText={helperText}
          {...field}
          sx={{ paddingBottom: 2 }}
        />
      )}
    />
  )
}

export default TextInput;
