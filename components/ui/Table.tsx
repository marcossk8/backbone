import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { contactData, selectContacts } from "../../features/contacts";
import { gridColumns } from "../../utilities";
import { TableHeader } from "./TableHeader";
import { ContactsListResponse } from "../../interfaces";
import { backBoneApi } from "../../api";
import { showAlert } from "../../features/alerts";
import { searchData, selectSearch } from "../../features/search";

export const Table = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const searchValue = useAppSelector(selectSearch);

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if(searchValue) {
      getContactsName(searchValue)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleSearch = async (value:string)  => {
    getContactsName(value)
  };

  const removeSearch = () => {
    getContactsName("")
  }

  const getContactsName = async (value:string) => {
    setLoading(true)
    try {
      // Modify endpoint _contains to be able to search through all columns
      const { data } = await backBoneApi.get<ContactsListResponse>(`/contacts?firstName_contains=${ value }`);
      
      dispatch(contactData({ ...contacts, totalPages: data.totalPages, results: data.results,  }))
      dispatch(searchData(value))
      setLoading(false)

    } catch (error:any) {
      dispatch(showAlert({ open: true, message: error?.response.data.message, type: "error" }));
      setLoading(false)
    }
  } 

  const handleChangePage = async (newPage: number) => {
    setLoading(true)
    
    try {
      const { data } = await backBoneApi.get<ContactsListResponse>(`/contacts?perPage=10&page=${ newPage + 1 }`);
      
      dispatch(contactData({ ...contacts, results: data.results, page: newPage }))
      setLoading(false)

    } catch (error:any) {
      dispatch(showAlert({ open: true, message: error?.response.data.message, type: "error" }));
      setLoading(false)
    }
  }

  return (
    <>
      <TableHeader handleSearch={handleSearch} removeSearch={removeSearch} />
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          page={contacts.page}
          rows={contacts.results}
          columns={gridColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          disableColumnMenu
          pagination
          onPageChange={(newPage) => handleChangePage(newPage)}
          rowCount={contacts.totalPages}
          autoHeight 
          paginationMode="server"
          loading={loading}
        />
      </div>
    </>
  );
};
