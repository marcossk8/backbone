import { useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";
import { backBoneApi } from "../api";
import { Layout } from "../components/layouts";
import { Table } from "../components/ui";
import { ContactsListResponse, ContactsResult } from "../interfaces";
import { useAppDispatch } from "../app/hooks";
import { contactData } from "../features/contacts";
interface Props {
  contacts: ContactsResult[];
}

const Home: NextPage<Props> = ({ contacts }) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(contactData(contacts))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Layout title="Contacts">
      <Table />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await backBoneApi.get<ContactsListResponse>("/contacts");

  return {
    props: {
      contacts: data.results,
    },
  };
};

export default Home;
