import { tokenOwner } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const TokenOwner = () => {
  const [tokenId, setTokenId] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [owner, setOwner] = useState<any>(null);

  return (
    <>
      <div className={styles.description}>
        <p style={{ marginBottom: "12px" }}>Enter the arguments:</p>
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
            : `Owner: ${owner?.data ? owner.data : "-"}`}
        </p>
      ) : null}
    </>
  );
};

export default TokenOwner;
