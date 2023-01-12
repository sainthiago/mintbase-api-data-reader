import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import NearPrice from "../components/nearPrice/nearPrice";
import OwnedStores from "../components/OwnedStores/OwnedStores";
import StoreData from "../components/StoreData/StoreData";
import TokenById from "../components/TokenMetadataById/TokenMetadataById";
import TokenOwner from "../components/TokenOwner/TokenOwner";
import TokenOwnersByMetadataId from "../components/TokenOwnersByMetadataId/TokenOwnersByMetadataId";
import TokenProvenance from "../components/TokenProvenance/TokenProvenance";
import styles from "../styles/Home.module.css";

const methods = [
  { name: "tokenOwner", component: <TokenOwner /> },
  { name: "tokenProvenance", component: <TokenProvenance /> },
  { name: "tokenOwnersByMetadataId", component: <TokenOwnersByMetadataId /> },
  { name: "tokenById", component: <TokenById /> },
  { name: "ownedStores", component: <OwnedStores /> },
  { name: "storeData", component: <StoreData /> },
  { name: "nearPrice", component: <NearPrice /> },
];

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState("tokenOwner");
  return (
    <>
      <Head>
        <title>Mintbase API Reader</title>
        <meta name="description" content="Mintbase API Reader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>
            <Image
              src="/mintbase_logo.svg"
              alt="Mintbase Logo"
              width={280}
              height={100}
              priority
            />
          </div>
        </div>
        <div className={styles.centerElm}>
          <div
            className={`${styles.description}`}
            style={{ marginBottom: "36px" }}
          >
            <p style={{ marginBottom: "12px" }}>Select the method:</p>
            <select
              name="methods"
              id="methods"
              className={styles.input}
              style={{ width: "100%" }}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              {methods.map((method) => {
                return (
                  <option key={method.name} value={method.name}>
                    {method.name}
                  </option>
                );
              })}
            </select>
          </div>
          {methods.find((method) => method.name === selectedMethod)?.component}
        </div>
      </main>
    </>
  );
}
