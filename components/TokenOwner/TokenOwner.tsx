import { tokenOwner } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import RunButton from "../RunButton/RunButton";

const TokenOwner = () => {
  const [tokenId, setTokenId] = useState("");
  const [contractAddress, setContractAddress] = useState("");

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
      </div>

      <RunButton
        disabled={!tokenId || !contractAddress}
        method={tokenOwner(tokenId, contractAddress)}
      />
    </>
  );
};

export default TokenOwner;
