import * as React from "react";
import Head from "next/head";
import { Alert, Box, Snackbar } from "@mui/material";
import { NavBar } from "../ui";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAlerts, showAlert } from "../../features/alerts";
interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title = "Contacts", children }) => {

  const dispatch = useAppDispatch();
  const alert = useAppSelector(selectAlerts);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(showAlert({ open: false, message: "", type: "success" }));
  };

  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title} - BackBone</title>
      </Head>

      <NavBar title={title} />

      <Box sx={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
        {children}
      </Box>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
