import { FC } from 'react';
import { Box } from '@mui/material';
import { newProductLeftValues } from '../../../constants';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IModalForm } from '../../../models';
import { SelectInput, TextInput } from '../..';

const ModalForm: FC<IModalForm> = ({ control, errors }) => {
  const { categories } = useTypedSelector((state) => state.category);

  return (
    <Box sx={{ width: 310 }}>
      {newProductLeftValues.map(({ name, label }, index) => (
        <Box key={index}>
          <TextInput
            name={name}
            label={label}
            control={control}
            defaultValue=""
            error={!!errors[name]?.message}
            helperText={errors[name]?.message}
          />
        </Box>
      ))}

      <SelectInput
        name="category"
        control={control}
        error={!!errors.category?.message}
        array={categories}
      />
    </Box>
  )
}

export default ModalForm;
