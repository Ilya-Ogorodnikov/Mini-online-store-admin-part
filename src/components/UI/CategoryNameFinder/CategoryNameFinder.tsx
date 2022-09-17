import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IProductsActions } from '../../../models';

const CategoryNameFinder: FC<IProductsActions> = ({ row }) => {
  const { categories } = useTypedSelector(
    (state) => state.category
  );
  
  return (
    <Typography>
      {categories.map(item => item._id === row.category && item.title )}
    </Typography>
  )
}

export default CategoryNameFinder;