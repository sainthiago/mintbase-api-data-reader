import { metadataByMetadataId } from "@mintbase-js/data";
import { debounce } from "lodash";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import RunButton from "../RunButton/RunButton";

const MetadataByMetadataId = () => {
  const [metadataId, setMetadataId] = useState("");

  return (
    <>
      <div className={styles.description}>
        <p style={{ marginBottom: "12px" }}>Enter the arguments:</p>
        <div>
          <input
            className={styles.input}
            onChange={debounce(async (e) => {
              setMetadataId(e.target.value);
            }, 500)}
            placeholder="metadataId"
          />
        </div>
      </div>

      <RunButton
        disabled={!metadataId}
        method={metadataByMetadataId(metadataId)}
      />
    </>
  );
};

export default MetadataByMetadataId;
