import { storeNfts } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import RunButton from "../RunButton/RunButton";

const StoreNfts = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [onlyListed, setOnlyListed] = useState(false);
  const [pagination, setPagination] = useState({ limit: NaN, offset: NaN });

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
          <select
            name="methods"
            id="methods"
            className={styles.input}
            style={{ width: "100%" }}
            onChange={(e) => setOnlyListed(e.target.value === 'only-listed')}
          >
            <option key="0" value="all">
              all
            </option>
            <option key="1" value="only-listed">
              only listed
            </option>
          </select>
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
        disabled={!contractAddress}
        method={storeNfts(contractAddress, onlyListed)}
      />
    </>
  );
};

export default StoreNfts;
