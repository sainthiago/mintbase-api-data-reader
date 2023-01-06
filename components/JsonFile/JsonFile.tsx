import styles from "../../styles/Home.module.css";

const JsonFile = ({ dataFile }: { dataFile: Blob | null }) => {
  return (
    <>
      {dataFile ? (
        <a
          className={`${styles.description} ${styles.a}`}
          style={{ marginTop: "24px" }}
          onClick={() => {
            const url = URL.createObjectURL(dataFile);
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

export default JsonFile;
