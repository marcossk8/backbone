import { createAction } from "@reduxjs/toolkit";
import { ContactsListResponse } from "../../interfaces";

export const contactData = createAction<ContactsListResponse>("contacts/data");

