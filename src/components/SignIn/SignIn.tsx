import { FC } from "react";
import { Box, Container } from "@mui/material";
import { LoginForm } from "..";
import * as img from "../../assets";
import { styles } from "./style";

const SignIn: FC = () => (
  <Container sx={styles.wrapper}>
    <Box sx={styles.logo}>
      <img src={img.logo} alt="logo" />
    </Box>

    <Container sx={styles.form}>
      <LoginForm />
    </Container>
  </Container>
);

export default SignIn;
