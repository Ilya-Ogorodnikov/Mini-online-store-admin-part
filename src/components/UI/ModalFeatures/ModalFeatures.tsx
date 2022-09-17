import { FC } from 'react';
import { useFieldArray } from "react-hook-form";
import { Box, Button } from '@mui/material';
import { IProducts, IModalFeatures } from '../../../models';
import { FeatureFields } from '../..';
import { styles } from './style';

const ModalFeatures: FC<IModalFeatures> = ({ control }) => {
  const { fields, append, remove } = useFieldArray<
    IProducts, 
    "features", 
    "id"
  >({
    control,
    name: "features",
    keyName: "id"
  });

  return (
    <>
      {fields.map((item, index) => (
        <Box key={item.id}>
          <FeatureFields 
            control={control}
            index={index}
            item={item}
          />

          <Button
            sx={styles.button} 
            fullWidth 
            onClick={() => remove(index)}
          >
            Удалить характеристику
          </Button>
        </Box>
      ))}

      {fields.length < 3 && (
        <Button
          sx={styles.button} 
          fullWidth 
          onClick={() => append({ 
            id: fields.length.toString(), 
            name: '',
            description: '' 
          })}
        >
          Добавить характеристику
        </Button>
      )}
    </>
  )
}

export default ModalFeatures;
