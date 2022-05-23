import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { backBoneApi } from "../../../api";
import {
  ContactsListResponse,
  ContactsResult,
} from "../../../interfaces";
import { getContactInfo } from "../../../utilities";
import { Button } from "@mui/material";
import { Layout } from "../../../components/layouts";
import { contactData, selectContacts } from "../../../features/contacts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { showAlert } from "../../../features/alerts";
interface Props {
  contact: ContactsResult;
}

const DeleteContact: NextPage<Props> = ({ contact }) => {
  
  const router = useRouter();
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const handleDeleteContact = async () => {
    try {
      await backBoneApi.delete(`/contacts/${contact.id}`);
      
      const deleteContact = contacts.filter(contactElement => contactElement.id !== contact.id)
      dispatch(contactData(deleteContact));

      dispatch(
        showAlert({
          open: true,
          message: "Contact deleted successfully!",
          type: "success",
        })
      );
      router.push("/");
    } catch (error: any) {
      dispatch(
        showAlert({
          open: true,
          message: error?.response.data.message || "Sorry, there was an error!",
          type: "error",
        })
      );
    }
  }

  return (
    <Layout title="Delete contact">
      <Button onClick={handleDeleteContact}>Delete</Button>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await backBoneApi.get<ContactsListResponse>(
    "/contacts?perPage=100"
  );

  return {
    paths: data.results.map((contact) => ({
      params: { id: contact.id },
    })),
    // fallback: false
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const contact = await getContactInfo(id);

  if (!contact) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      contact,
    },
    revalidate: 86400,
  };
};

export default DeleteContact;
