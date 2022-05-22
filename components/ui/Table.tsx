import { FC, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector } from "../../app/hooks";
import { selectContacts } from "../../features/contacts";
import { gridColumns, removeAccents } from "../../utilities";
import { TableHeader } from "./TableHeader";
import { ContactsResult } from "../../interfaces";

export const Table = () => {
  const contacts = useAppSelector(selectContacts);

  const [dataContacts, setDataContacts] = useState<ContactsResult[]>([]);

  useEffect(() => {
    setDataContacts(contacts)
  }, [contacts])
  
  const handleSearch = (value: string) => {
    const data = contacts.filter(
      ({ firstName, lastName, email, phone }) =>
        validateValues(firstName, value) ||
        validateValues(lastName, value) ||
        validateValues(email, value) ||
        validateValues(phone, value)
    );

    setDataContacts(data);
  };

  const validateValues = (contactElement: string, value: string) => {
    return removeAccents(contactElement)
      .toLowerCase()
      .includes(removeAccents(value).toLowerCase());
  };

  return (
    <>
      <TableHeader handleSearch={handleSearch} />
      <div style={{ height: "78vh", width: "100%" }}>
        <DataGrid
          rows={dataContacts}
          columns={gridColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          disableColumnMenu
        />
      </div>
    </>
  );
};
