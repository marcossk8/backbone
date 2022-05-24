import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Search } from "./Search";
interface Props {
  handleSearch: (value:string) => void,
  removeSearch: () => void;
}

export const TableHeader:FC<Props> = ({ handleSearch, removeSearch }) => {
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
      <Search handleSearch={handleSearch} removeSearch={removeSearch} />

      <Link href="/contact/create">
        <Button color="primary" variant="outlined">
          Nuevo contacto
        </Button>
      </Link>
    </div>
  );
};
