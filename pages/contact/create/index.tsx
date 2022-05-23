import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Button, Snackbar } from "@mui/material";
import { Layout } from "../../../components/layouts";
import { InputsForm } from "../../../components/ui";
import { backBoneApi } from "../../../api";
import { contactData, selectContacts } from "../../../features/contacts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}

const colors:any = {
  success: 'success',
  error: 'error'
}

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
  const [alert, setAlert] = useState({ open: false, message: "", type: "success" });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await backBoneApi.post("/contacts", data);
      dispatch(contactData([...contacts, response.data]));
      setAlert({ open: true, message: "Contact saved successfully!", type: "success" });
      router.push("/")
    } catch (error:any) {
      setAlert({ open: true, message: error.response.data.message, type: "error" });
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false, message: "", type: "success" });
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

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={colors[alert.type]} sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Layout>
  );
};
export default CreateContact;
