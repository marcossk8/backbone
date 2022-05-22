import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Search } from "./Search";
import { ContactsResult } from "../../interfaces";

interface Props {
  handleSearch: (value: string) => void,
}

export const TableHeader:FC<Props> = ({ handleSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Search handleSearch={handleSearch} />

      <Link href="/contact/create">
        <Button color="primary" variant="outlined">
          Nuevo contacto
        </Button>
      </Link>
    </div>
  );
};
