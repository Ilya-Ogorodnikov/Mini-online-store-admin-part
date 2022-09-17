import { FC } from 'react';
import { 
  Box, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select 
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { ISelectInputProps } from '../../../models';

const SelectInput: FC<ISelectInputProps> = ({ 
  name,
  control,
  error,
  array
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box sx={{ minWidth: 120, paddingBottom: 2 }}>
          <FormControl fullWidth>
            <InputLabel id={name}>{name}</InputLabel>
            
            <Select
              fullWidth
              labelId={name}
              id={name}
              value={field.value}
              label={name}
              onChange={(event) => field.onChange(event)}
              error={error}
            >
              {array.map((element) => (
                <MenuItem key={element._id} value={element._id}>
                  {element.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    />
  )
}

export default SelectInput;
