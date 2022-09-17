import { FC } from "react";
import { Container, Typography, Modal, Box } from "@mui/material";
import { IModalProps } from "../../../models";
import { styles } from "./style";

const ModalWindow: FC<IModalProps> = ({
  children,
  open,
  close,
  modalTitle,
}) => (
  <Modal open={open} onClose={() => close(false)}>
    <Container sx={styles.modalContainer}>
      <Typography variant="h5" component="h2" sx={styles.modalTitle}>
        {modalTitle}
      </Typography>

      <Box>{children}</Box>
    </Container>
  </Modal>
);

export default ModalWindow;
