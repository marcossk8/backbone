import { Button } from "@mui/material";
import Link from "next/link";

export const TableHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Link href="/contact/create">
        <Button color="primary" variant="outlined">
          Nuevo contacto
        </Button>
      </Link>
    </div>
  );
};
