import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import List from "./List";
import Add from "./Add";

const WrapContainer = styled.div`
  width: 760px;
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

const WrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #245572;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #245572;
  padding: 1rem 0;
  box-sizing: border-box;
  width: 84%;
`;

const BtnAllDelete = styled.button`
  padding: 0.8rem;
  box-sizing: border-box;
  border-radius: 1rem;
  border: none;
  background-color: #ff6b71;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #d1385c;
  }
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

  const handleAllDeleteClick = () => {
    setTodoData([]);
  };

  return (
    <WrapContainer>
      <WrapTodo>
        <WrapTitle>
          <Title>오늘의 할 일</Title>
          <BtnAllDelete onClick={handleAllDeleteClick}>All Delete</BtnAllDelete>
        </WrapTitle>
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
