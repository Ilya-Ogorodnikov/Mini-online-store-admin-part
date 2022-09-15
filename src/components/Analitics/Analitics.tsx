import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { styles } from "./style";

const Analitics: FC = () => (
  <Box sx={styles.analiticsWrapper}>
    <Box sx={styles.analiticsBlock}>
      <Typography sx={styles.analiticsTittle}>Аналитика</Typography>

      <Box sx={styles.analiticsMainBlock}>
        <Typography>Динамика продаж</Typography>
      </Box>

      <Box sx={styles.analitickTwiceBlock}>
        <Box sx={styles.analiticsMiddleBlock}>
          <Typography>Динамика цены</Typography>
        </Box>

        <Box sx={styles.analiticsMiddleBlock}>
          <Typography>Продажи по категориям</Typography>
        </Box>
      </Box>

      <Box sx={styles.analitickTwiceBlock}>
        <Box sx={styles.analiticsSmallBlock}>
          <Typography>Продажи по товарам</Typography>
        </Box>

        <Box sx={styles.analiticsSmallBlock}>
          <Typography>Посещения страниц</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Analitics;
