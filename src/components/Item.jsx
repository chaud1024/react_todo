import React from "react";
import styled from "@emotion/styled";

const WrapItem = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #89acbe;
  color: #0c1214;
`;

const ItemLabel = styled.label`
  width: 96%;
`;

const Checkbox = styled.input`
  margin-right: 6px;
`;

const BtnDelete = styled.button`
  background-color: #245572;
  color: #fff;
  border: none;
  padding: 6px 9px;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
`;

const Item = React.memo(({ todoData, setTodoData, handleClick, newItem }) => {
  console.log("Item is rendering");
  const getStyled = (completed) => {
    return {
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#89acbe" : "#0c1214",
    };
  };

  const handleCompledteChange = (id) => {
    let newTodoData = todoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <>
      {todoData.map((item) => (
        <WrapItem key={item.id}>
          <ItemLabel style={getStyled(item.completed)} key={item.id}>
            <Checkbox
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompledteChange(item.id)}
            />
            {item.title}
          </ItemLabel>
          <BtnDelete onClick={() => handleClick(item.id)}>X</BtnDelete>
        </WrapItem>
      ))}
    </>
  );
});

export default Item;
