const SingleList = ({ list, setList }) => {
  const handleCheck = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setList(updatedList);
  };

  return (
    <div
      data-testid="single-list"
      className="flex flex-col gap-4 border border-gray-300 rounded-md p-4 w-64 h-96 overflow-y-auto"
    >
      {list.map((item) => (
        <ListItem key={item.id} item={item} handleCheck={handleCheck} />
      ))}
    </div>
  );
};

const ListItem = ({ item, handleCheck }) => {
  return (
    <div
      className={`p-2 border border-gray-300 rounded-md cursor-pointer text-center transition-all duration-250 hover:bg-gray-100 ${
        item.checked
          ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-900"
          : ""
      }`}
      onClick={() => handleCheck(item.id)}
    >
      {item.title}
    </div>
  );
};

export default SingleList;
