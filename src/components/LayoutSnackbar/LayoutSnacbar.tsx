import { Snackbar } from "@mui/material";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const LayoutSnacbar = () => {
  const { error, openSnack } = useTypedSelector((state) => state.errors);
  const { clearError } = useActions();

  return (
    <Snackbar
      open={openSnack}
      message={error}
      autoHideDuration={3000}
      onClose={clearError}
    />
  );
};

export default LayoutSnacbar;
