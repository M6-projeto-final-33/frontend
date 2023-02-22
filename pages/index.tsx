import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductCardAuction from "../components/ProductCardAuction";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export interface ISubmitData {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<ISubmitData>({});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Motors Shop</title>
        <meta
          name="description"
          content="encontre seu veículo dos sonhos aqui"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </main>
    </>
  );
};

export default Home;
