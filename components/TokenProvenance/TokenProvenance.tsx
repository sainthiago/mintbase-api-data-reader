import { tokenProvenance } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const TokenProvenance = () => {
  const [tokenId, setTokenId] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [pagination, setPagination] = useState({ limit: NaN, offset: NaN });
  const [file, setFile] = useState<Blob | null>(null);

  return (
    <>
      <div className={styles.description}>
        <p style={{ marginBottom: "12px" }}>Enter the arguments:</p>
        <div>
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setFile(null);
              setTokenId(e.target.value);
            }, 500)}
            placeholder="tokenId"
          />
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setFile(null);
              setContractAddress(e.target.value);
            }, 500)}
            placeholder="contractAddress"
          />
        </div>
        <div>
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setFile(null);
              setPagination({ ...pagination, limit: e.target.value });
            }, 500)}
            placeholder="limit?"
          />
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setFile(null);
              setPagination({ ...pagination, offset: e.target.value });
            }, 500)}
            placeholder="offset?"
          />
        </div>
      </div>
      <div className={styles.description}>
        <button
          className={styles.button}
          disabled={!tokenId || !contractAddress}
          onClick={async () => {
            const fileData = JSON.stringify(
              await tokenProvenance(tokenId, contractAddress, pagination)
            );
            const blob = new Blob([fileData], { type: "text/plain" });

            setFile(blob);
          }}
        >
          Run
        </button>
      </div>
      {file ? (
        <a
          className={`${styles.description} ${styles.a}`}
          style={{ marginTop: "24px" }}
          onClick={() => {
            const url = URL.createObjectURL(file);
            const link = document.createElement("a");
            link.download = "data.json";
            link.href = url;
            link.click();
          }}
        >
          Download JSON File
        </a>
      ) : null}
    </>
  );
};

export default TokenProvenance;
