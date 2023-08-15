const DropDownMenu = (items) => {
  return (
    <div className="dropdown">
      <div className="column">
        {items.slice(0, 13).map((items, index) => (
          <a key={index} href="#">
            {items}
          </a>
        ))}
      </div>
      <div className="column">
        {items.slice(0, 13).map((items, index) => (
          <a key={index} href="#">
            {items}
          </a>
        ))}
      </div>
    </div>
  );
};
