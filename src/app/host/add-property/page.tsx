import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../../../components/host/Sidebar';
import Header from '../../../components/host/Header'
const AddProperty: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Add Property</title>
        <meta name="description" content="Air nb Add Property" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
          {/* Add your property form component here */}
        </div>
      </div>
    </div>
  );
};
export default AddProperty;