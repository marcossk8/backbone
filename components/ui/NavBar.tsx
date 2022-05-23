import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  title?: string;
}

export const NavBar:FC<Props> = ({ title }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography>{title} - BackBone</Typography>
      </Toolbar>
    </AppBar>
  );
};
