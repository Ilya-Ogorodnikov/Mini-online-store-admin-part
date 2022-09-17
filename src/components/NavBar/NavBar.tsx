import { FC } from "react";
import { Drawer, List, ListItemButton, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { colorTheme } from "../../themes/rootTheme";
import { useActions } from "../../hooks/useActions";
import { navLinks } from "../../constants";
import * as img from "../../assets";
import { styles } from "./style";

const NavBar: FC = () => {
  const location = useLocation();
  const { logOut } = useActions();

  return (
    <Drawer
      anchor="left"
      open
      variant="persistent"
      PaperProps={{ elevation: 5 }}
    >
      <Box sx={styles.navWrapper}>
        <Box sx={styles.navBody}>
          <Box>
            <img src={img.smallLogo} alt="logo" />
          </Box>

          <List sx={styles.navListLinks}>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} style={styles.navLink}>
                <ListItemButton
                  selected={link.to === location.pathname}
                  sx={styles.navLinkButton}
                >
                  <Typography
                    sx={styles.navLinkButtonText}
                    color={
                      link.to === location.pathname
                        ? colorTheme.palette.primary.light
                        : colorTheme.palette.primary.main
                    }
                  >
                    {link.title}
                  </Typography>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>

        <Box sx={styles.navFooter}>
          <Link style={styles.navLink} to="/">
            <ListItemButton onClick={logOut}>
              <Typography sx={styles.navLinkLogoutText}>Выйти</Typography>
            </ListItemButton>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavBar;
