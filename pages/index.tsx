import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { Table, TableHeader } from "../components/ui";

const Home: NextPage = () => {
  return (
    <Layout title="Contactos - BackBone">
      <TableHeader />
      <Table />
    </Layout>
  );
};

export default Home;
