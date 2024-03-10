import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
    console.log("hey");
  };

  return (
    <Context.Provider value={{ onClickHandler, isOpen, setIsOpen }}>
      {" "}
      {props.children}{" "}
    </Context.Provider>
  );
};

export default ContextProvider;
