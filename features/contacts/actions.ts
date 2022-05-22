import { createAction } from "@reduxjs/toolkit";
import { ContactsResult } from "../../interfaces";

export const contactData = createAction<ContactsResult[]>("contacts/data");

