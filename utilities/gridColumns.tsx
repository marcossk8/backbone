import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Link from "next/link";

export const gridColumns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "",
    sortable: false,
    width: 90,
    renderCell: ({ row }) => {
      const firstName = row.firstName || "A";

      return <Avatar>{firstName.charAt(0)}</Avatar>;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: ({ row }) => {
      return (
        <div>
          <Link href={`/contact/update/${row.id}`}>
            <IconButton color="primary">
              <EditOutlinedIcon />
            </IconButton>
          </Link>
          <Link href={`/contact/delete/${row.id}`}>
            <IconButton color="error">
              <DeleteOutlinedIcon />
            </IconButton>
          </Link>
        </div>
      );
    },
  },
];
