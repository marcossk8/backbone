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
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 20,
        maxHeight: "10%",
      }}
    >
      <Search handleSearch={handleSearch} removeSearch={removeSearch} />

      <Link href="/contact/create">
        <Button
          sx={{ borderRadius: "10px" }}
          color="primary"
          variant="outlined"
        >
          New contact
        </Button>
      </Link>
    </div>
  );
};
