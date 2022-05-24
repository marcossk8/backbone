   
import { backBoneApi } from "../api";
import { ContactsResult } from "../interfaces";

export const getContactInfo = async( id: string ) => {
  
    try {

        const { data } = await backBoneApi.get<ContactsResult>(`/contacts/${ id }`);

        return {
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        }
        
    } catch (error) {
        return null;
    }
}