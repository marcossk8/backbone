import * as React from "react";
import Head from "next/head";

import { Box, Container } from "@mui/material";
import { NavBar } from "../ui";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title = "Contacts", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title} - BackBone</title>
      </Head>

      <NavBar title={title} />

      <Box>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};
