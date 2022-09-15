import { FC } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActions } from "../../hooks/useActions";
import { ILoginFormValues } from "../../models";
import { schemaForSignIn } from "../../helpers/validation";
import { styles } from "./style";

const LoginForm: FC = () => {
  const { signIn } = useActions();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(schemaForSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginValidUser: SubmitHandler<ILoginFormValues> = (data) => {
    const { email, password } = data;
    signIn(email, password);
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" sx={styles.loginTitle}>
        Вход
      </Typography>

      <form onSubmit={handleSubmit(loginValidUser)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              label="Email"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              sx={{ paddingBottom: 2 }}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              label="Пароль"
              type="password"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              sx={{ paddingBottom: 2.5 }}
            />
          )}
        />

        <Button fullWidth type="submit" variant="contained">
          Войти
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
