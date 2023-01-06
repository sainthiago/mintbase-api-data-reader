import { tokenProvenance } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import RunButton from "../RunButton/RunButton";

const TokenProvenance = () => {
  const [tokenId, setTokenId] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [pagination, setPagination] = useState({ limit: NaN, offset: NaN });

  return (
    <>
      <div className={styles.description}>
        <p style={{ marginBottom: "12px" }}>Enter the arguments:</p>
        <div>
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setTokenId(e.target.value);
            }, 500)}
            placeholder="tokenId"
          />
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setContractAddress(e.target.value);
            }, 500)}
            placeholder="contractAddress"
          />
        </div>
        <div>
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setPagination({ ...pagination, limit: e.target.value });
            }, 500)}
            placeholder="limit?"
          />
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setPagination({ ...pagination, offset: e.target.value });
            }, 500)}
            placeholder="offset?"
          />
        </div>
      </div>

      <RunButton
        disabled={!tokenId || !contractAddress}
        method={tokenProvenance(tokenId, contractAddress)}
      />
    </>
  );
};

export default TokenProvenance;
