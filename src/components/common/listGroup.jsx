const ListGroup = ({
  items,
  onItemSelect,
  selectedItem,
  keyProp,
  valueProp,
}) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={item[keyProp]}
          className={
            item === selectedItem
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[valueProp]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  keyProp: "_id",
  valueProp: "name",
};

export default ListGroup;
