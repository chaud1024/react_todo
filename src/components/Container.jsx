import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import List from "./List";
import Add from "./Add";

const WrapContainer = styled.div`
  width: 80%;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 2rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin-top: 3rem;
`;

const WrapTodo = styled.div`
  width: 100%;
  padding: 1.4rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #245572;
  padding: 1rem 0;
  box-sizing: border-box;
  border-bottom: 2px solid #245572;
`;

const Container = () => {
  console.log("Container is rendering");

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((item) => item.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

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
    <WrapContainer>
      <WrapTodo>
        <Title>오늘의 할 일</Title>
        <Add
          value={value}
          setValue={setValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <List
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
      </WrapTodo>
    </WrapContainer>
  );
};

export default Container;
