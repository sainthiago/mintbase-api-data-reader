import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import JsonFile from "../JsonFile/JsonFile";

const RunButton = ({
  disabled,
  method,
}: {
  disabled: boolean;
  method: any;
}) => {
  const [localFile, setLocalFile] = useState<Blob | null>(null);

  useEffect(() => {
    setLocalFile(null);
  }, [disabled]);

  return (
    <>
      <div className={styles.description}>
        <button
          className={styles.button}
          disabled={disabled}
          onClick={async () => {
            const fileData = JSON.stringify(await method);
            const blob = new Blob([fileData], { type: "text/plain" });

            setLocalFile(blob);
          }}
        >
          Run
        </button>
      </div>
      {!disabled ? localFile ? <JsonFile dataFile={localFile} /> : null : null}
    </>
  );
};

export default RunButton;
