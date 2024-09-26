const TransferControls = ({
  handleTransfer,
  leftList,
  setLeftList,
  rightList,
  setRightList,
}) => {
  return (
    <div className="flex flex-col gap-12 h-full justify-center">
      <ControlButton
        handleTransfer={() =>
          handleTransfer({
            from: leftList,
            setFrom: setLeftList,
            to: rightList,
            setTo: setRightList,
          })
        }
        direction="right"
      />
      <ControlButton
        handleTransfer={() =>
          handleTransfer({
            from: rightList,
            setFrom: setRightList,
            to: leftList,
            setTo: setLeftList,
          })
        }
        direction="left"
      />
    </div>
  );
};

const ControlButton = ({ handleTransfer, direction }) => {
  return (
    <button
      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-250 hover:bg-gray-100"
      onClick={handleTransfer}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
};

export default TransferControls;
