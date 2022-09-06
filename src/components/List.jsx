import React, { useState } from "react";
import Item from "./Item";
import Add from "./Add";

import styled from "@emotion/styled";

const WrapList = styled.div`
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
  border-top: 2px solid #245572;
`;

const List = () => {
  const [todoData, setTodoData] = useState([]);

  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newItem]);
    setValue("");
  };

  return (
    <WrapList>
      <Add
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Item
        todoData={todoData}
        setTodoData={setTodoData}
        handleClick={handleClick}
      />
    </WrapList>
  );
};

export default List;
