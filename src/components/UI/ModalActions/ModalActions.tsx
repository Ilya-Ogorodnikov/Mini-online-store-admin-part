import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { IModalActions } from '../../../models';

const ModalActions: FC<IModalActions> = ({ onClickHandler }) => {
  return (
    <Box sx={{ 
      display: "flex",
      justifyContent: "flex-end",
      gap: 3,
      marginTop: 3, 
    }}>
      <Button variant="contained" type="submit">
        Сохранить
      </Button>

      <Button
        variant="contained"
        onClick={onClickHandler}
      >
        Отмена
      </Button>
    </Box>
  )
}

export default ModalActions;
