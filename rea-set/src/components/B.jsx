import {useState} from "react";

const B = () => {
  const [count, SetCount] = useState(0);

  const onClickPlus = () => {
    SetCount(count + 1);
  };

  const onClickMinus = () => {
    SetCount(count - 1);
  };

  return (
    <div className="flex items-center">
      <button className="btn-style" onClick={onClickMinus}>
        -
      </button>
      <div className="text-main mx-4 text-bold text-4xl">{count}</div>
      <button className="btn-style" onClick={onClickPlus}>
        +
      </button>
    </div>
  );
};

export default B;
