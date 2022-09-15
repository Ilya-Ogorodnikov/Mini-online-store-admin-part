import { FC } from 'react';
import { Controller } from "react-hook-form";
import { TextField } from '@mui/material';
import { IModalFeaturesFields } from '../../../models';

const FeatureFields: FC<IModalFeaturesFields> = ({ control, index, item }) => {
  return (
    <>
      <Controller
        name={`features.${index}.name`}
        control={control}
        defaultValue={item.name}
        render={({ field }) =>
          <TextField
            label="Название характеристики"
            variant="outlined"
            fullWidth
            margin="dense"
            {...field}
          />
        }
      />

      <Controller
        name={`features.${index}.description`}
        control={control}
        defaultValue={item.description}
        render={({ field }) =>
          <TextField
            label="Описание характеристики"
            variant="outlined"
            fullWidth
            margin="dense"
            {...field}
          />
        }
      />
    </>
  )
}

export default FeatureFields;
