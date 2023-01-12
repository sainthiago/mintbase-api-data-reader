import { nearPrice } from "@mintbase-js/data";
import RunButton from "../RunButton/RunButton";

const NearPrice = () => {
  return (
    <>
      <RunButton disabled={false} method={nearPrice()} />
    </>
  );
};

export default NearPrice;
