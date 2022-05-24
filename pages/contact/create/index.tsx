import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import { Layout } from "../../../components/layouts";
import { InputsForm } from "../../../components/ui";
import { backBoneApi } from "../../../api";
import { contactData, selectContacts } from "../../../features/contacts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAlerts, showAlert } from "../../../features/alerts";
import { IFormInput } from "../../../interfaces";

const CreateContact: NextPage = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const router = useRouter()
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const alert = useAppSelector(selectAlerts);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await backBoneApi.post("/contacts", data);
      dispatch(contactData({...contacts, results: response.data}));
      dispatch(showAlert({ open: true, message: "Contact edited successfully!", type: "success" }));
      router.push("/")
    } catch (error:any) {
      dispatch(showAlert({ open: true, message: error.response.data.message, type: "error" }));
    }
  };

  return (
    <Layout title="Add contact">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", marginTop: 16 }}
      >
        <InputsForm register={register} errors={errors} />

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
export default CreateContact;
