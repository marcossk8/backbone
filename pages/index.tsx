import { useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";
import { backBoneApi } from "../api";
import { Layout } from "../components/layouts";
import { Table } from "../components/ui";
import { ContactsListResponse } from "../interfaces";
import { useAppDispatch } from "../app/hooks";
import { contactData } from "../features/contacts";
import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";
import { ContactContainer } from "../components/ui";
interface Props {
  contacts: ContactsListResponse;
}

export const Container = styled(Box)<BoxProps>(() => ({
  padding: 20,
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  borderRadius: 20,
  maxHeight: '100%',
  height: '100%'
}));

const Home: NextPage<Props> = ({ contacts }) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(contactData(contacts))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Layout title="Contacts">
      <ContactContainer>
        <Container>
          <Table />
        </Container>
      </ContactContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  // Modify endpoint so that you can get all the contacts and thus take full advantage of the static props of next js
  const { data } = await backBoneApi.get<ContactsListResponse>("/contacts?perPage=10");

  return {
    props: {
      contacts: { results: data.results, totalPages: data.totalPages, page: 0 },
    },
  };
};

export default Home;
