import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal";

import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const {data: todoList} = trpc.item.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Ocookie Listing app</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="mx-auto my-12 max-w-3xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold"> My shopping list</h2>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-violet-500 text-sm text-white p-2 rounded-md transition hover:bg-violet-600 "
          >Add item</button>
        </div>

        <ul className="mt-4">
          {todoList?.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </main>

      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Home;
