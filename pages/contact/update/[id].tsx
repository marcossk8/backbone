import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { backBoneApi } from "../../../api";
import {
  ContactsListResponse,
  ContactsResult,
  IFormInput,
} from "../../../interfaces";
import { getContactInfo } from "../../../utilities";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import { Layout } from "../../../components/layouts";
import { InputsForm } from "../../../components/ui";
import { contactData, selectContacts } from "../../../features/contacts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAlerts, showAlert } from "../../../features/alerts";
interface Props {
  contact: ContactsResult;
}

const UpdateContact: NextPage<Props> = ({ contact }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const alert = useAppSelector(selectAlerts);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await backBoneApi.put(`/contacts/${contact.id}`, data);
      dispatch(contactData([...contacts, response.data]));
      dispatch(
        showAlert({
          open: true,
          message: "Contact edited successfully!",
          type: "success",
        })
      );
      router.push("/");
    } catch (error: any) {
      dispatch(
        showAlert({
          open: true,
          message: error.response.data.message,
          type: "error",
        })
      );
    }
  };

  return (
    <Layout title="Update contact">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", marginTop: 16 }}
      >
        <InputsForm register={register} errors={errors} contact={contact} />

        <Button
          color="primary"
          variant="outlined"
          type="submit"
          size="large"
          style={{ marginTop: 16 }}
          disabled={!isValid || alert.open}
        >
          Guardar
        </Button>
      </form>
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

export default UpdateContact;
