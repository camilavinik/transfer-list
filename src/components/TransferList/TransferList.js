import { useState } from "react";

import SingleList from "./SingleList";
import TransferControls from "./TransferControls";
import { data } from "../../data/data";

const TransferList = () => {
  const [leftList, setLeftList] = useState(data);
  const [rightList, setRightList] = useState([]);

  const handleTransfer = ({ from, setFrom, to, setTo }) => {
    const items = from.filter((item) => item.checked);

    setTo([...to, ...items.map((item) => ({ ...item, checked: false }))]);
    setFrom(from.filter((item) => !item.checked));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mt-0 mb-12">
        Transfer List
      </h1>
      <div className="flex justify-center gap-12">
        <SingleList list={leftList} setList={setLeftList} />
        <TransferControls
          handleTransfer={handleTransfer}
          leftList={leftList}
          setLeftList={setLeftList}
          rightList={rightList}
          setRightList={setRightList}
        />
        <SingleList list={rightList} setList={setRightList} />
      </div>
    </>
  );
};

export default TransferList;
