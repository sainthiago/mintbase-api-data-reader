import { ownedStores } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import RunButton from "../RunButton/RunButton";

const OwnedStores = () => {
  const [ownerId, setOwnerId] = useState("");

  return (
    <>
      <div className={styles.description}>
        <p style={{ marginBottom: "12px" }}>Enter the arguments:</p>
        <div>
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
                setOwnerId(e.target.value);
            }, 500)}
            placeholder="ownerId"
          />
        </div>
      </div>

      <RunButton
        disabled={!ownerId}
        method={ownedStores(ownerId)}
      />
    </>
  );
};

export default OwnedStores;
