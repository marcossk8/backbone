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
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAlerts, showAlert } from "../../../features/alerts";
import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";
import { ContactContainer, Container, InputsForm, Title, TitleContainer } from "../../../components/ui";
import ModeEditRounded from "@mui/icons-material/ModeEditRounded";
interface Props {
  contact: ContactsResult;
}

export const IconContainer = styled(Box)<BoxProps>(() => ({
  width: 40,
  height: 40,
  borderRadius: '33%',
  backgroundColor: '#ffeabe',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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
  const alert = useAppSelector(selectAlerts);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await backBoneApi.put(`/contacts/${contact.id}`, data);
      
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
          message: error?.response?.data?.message || "Sorry, there was an error!",
          type: "error",
        })
      );
    }
  };

  return (
    <Layout title="Update contact">
      <ContactContainer>
        <Container>
          <TitleContainer>
            <IconContainer>
              <ModeEditRounded sx={{ color: "#c7a600" }} />
            </IconContainer>
            <Title>Update contact data</Title>
          </TitleContainer>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", padding: 16 }}
          >
            <InputsForm register={register} errors={errors} contact={contact} />

            <Button
              sx={{
                borderRadius: "10px",
                borderColor: "#c7a600",
                color: "#c7a600",
                "&:hover": {
                  borderColor: "#c7a600",
                  color: "#c7a600",
                },
              }}
              color="primary"
              variant="outlined"
              type="submit"
              size="large"
              style={{ marginTop: 16 }}
              disabled={!isValid || alert.open}
            >
              Update
            </Button>
          </form>
        </Container>
      </ContactContainer>
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
