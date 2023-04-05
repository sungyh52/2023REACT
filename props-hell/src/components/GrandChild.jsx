import SuperGrandChild from "./SuperGrandChild";

const GrandChild = ({gift, setGift}) => {
  return (
    <div>
      <div className="w-40 h-40 bg-violet-300">GrandChild : {gift}</div>
      <SuperGrandChild />
    </div>
  );
};

export default GrandChild;
