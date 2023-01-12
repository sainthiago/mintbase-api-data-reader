import { storeData } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import RunButton from "../RunButton/RunButton";

const StoreData = () => {
  const [contractAddress, setContractAddress] = useState("");

  return (
    <>
      <div className={styles.description}>
        <p style={{ marginBottom: "12px" }}>Enter the arguments:</p>
        <div>
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
        disabled={!contractAddress}
        method={storeData(contractAddress)}
      />
    </>
  );
};

export default StoreData;
