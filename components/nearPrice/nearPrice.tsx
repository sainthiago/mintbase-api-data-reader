import { ownedStores } from "@mintbase-js/data";
import RunButton from "../RunButton/RunButton";

const OwnedStores = () => {

  return (
    <>
      <RunButton
      disabled={false}
        method={ownedStores(ownerId)}
      />
    </>
  );
};

export default OwnedStores;
