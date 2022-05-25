import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { backBoneApi } from "../../../api";
import {
  ContactsListResponse,
  ContactsResult,
} from "../../../interfaces";
import { getContactInfo } from "../../../utilities";
import { Box, BoxProps, Button } from "@mui/material";
import { Layout } from "../../../components/layouts";
import { contactData, selectContacts } from "../../../features/contacts";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { showAlert } from "../../../features/alerts";
import { styled } from "@mui/material/styles";
import { ContactContainer, Container, Input, Title, TitleContainer } from "../../../components/ui";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
interface Props {
  contact: ContactsResult;
}

export const IconContainer = styled(Box)<BoxProps>(() => ({
  width: 40,
  height: 40,
  borderRadius: '33%',
  backgroundColor: '#fdb1b1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const DeleteContact: NextPage<Props> = ({ contact }) => {
  
  const router = useRouter();
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const handleDeleteContact = async () => {
    try {
      await backBoneApi.delete(`/contacts/${contact.id}`);
      
      const deleteContact = contacts.results.filter(contactElement => contactElement.id !== contact.id)
      dispatch(contactData({...contacts, results: deleteContact}));

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
          message: error?.response?.data?.message || "Sorry, there was an error!",
          type: "error",
        })
      );
    }
  }

  return (
    <Layout title="Delete contact">
      <ContactContainer>
        <Container>
          <TitleContainer>
            <IconContainer>
              <DeleteRounded sx={{ color: "#ff2d2d" }} />
            </IconContainer>
            <Title>Delete contact</Title>
          </TitleContainer>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 16 }}
          >
            <div className="flex">
              <Input
                label="Frist name *"
                variant="outlined"
                disabled
                defaultValue={contact?.firstName}
              />
              <Input
                label="Last name *"
                variant="outlined"
                defaultValue={contact?.lastName}
                disabled
                InputProps={{
                  readOnly: true,
                }}
              />
            </div>
            <Input
              label="Email *"
              variant="outlined"
              type="email"
              disabled
              defaultValue={contact?.email}
              InputProps={{
                readOnly: true,
              }}
            />
            <Input
              label="Phone *"
              variant="outlined"
              type="number"
              disabled
              defaultValue={contact?.phone}
              InputProps={{
                readOnly: true,
              }}
            />
            <Button
              sx={{
                borderRadius: "10px",
                borderColor: "#ff2d2d",
                color: "#ff2d2d",
                "&:hover": {
                  borderColor: "#ff2d2d",
                  color: "#ff2d2d",
                },
              }}
              color="primary"
              variant="outlined"
              type="submit"
              size="large"
              onClick={handleDeleteContact}
              style={{ marginTop: 16 }}
            >
              Delete
            </Button>
          </div>
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

export default DeleteContact;
