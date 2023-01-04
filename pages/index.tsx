import { debounce } from "lodash";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { tokenOwner } from "@mintbase-js/data";

export default function Home() {
  const [tokenId, setTokenId] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [owner, setOwner] = useState<any>(null);

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
        <div>
          <div
            className={`${styles.description}`}
            style={{ marginBottom: "36px" }}
          >
            <p style={{ marginBottom: "12px" }}>
              Choose the query you want to test:
            </p>
            <input
              className={styles.input}
              style={{ width: "100%" }}
              onChange={debounce(async (e) => {
                setTokenId(e.target.value);
              }, 500)}
              placeholder="tokenOwner"
              disabled
            />
          </div>
          <div className={styles.description}>
            <p style={{ marginBottom: "12px" }}>Please enter the arguments:</p>
            <div>
              <input
                className={styles.input}
                onChange={debounce(async (e) => {
                  setOwner(null);
                  setTokenId(e.target.value);
                }, 500)}
                placeholder="tokenId"
              />
              <input
                className={styles.input}
                onChange={debounce(async (e) => {
                  setOwner(null);
                  setContractAddress(e.target.value);
                }, 500)}
                placeholder="contractAddress"
              />
            </div>
          </div>
          <div className={styles.description}>
            <button
              className={styles.button}
              disabled={!tokenId || !contractAddress}
              onClick={async () =>
                setOwner(await tokenOwner(tokenId, contractAddress))
              }
            >
              Run
            </button>
          </div>
          {owner ? (
            <p className={styles.description} style={{ marginTop: "24px" }}>
              {owner?.error
                ? `There was an error, please try again.`
                : `Owner: ${owner?.data ? owner.data : "none"}`}
            </p>
          ) : null}
        </div>
      </main>
    </>
  );
}
