import React from "react";
import styled from "@emotion/styled";

const WrapItem = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #89acbe;
`;

const ItemLabel = styled.label`
  width: 96%;
`;

const getStyled = () => {
  return {
    textDecoration: "none",
  };
};

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

const Item = ({ todoData, setTodoData, handleClick, newTodo }) => {
  return (
    <>
      {todoData.map((item) => (
        <WrapItem key={item.id}>
          <ItemLabel style={getStyled()}>
            <Checkbox type="checkbox" defaultChecked={false} />
            {item.title}
          </ItemLabel>
          <BtnDelete onClick={() => handleClick(item.id)}>X</BtnDelete>
        </WrapItem>
      ))}
    </>
  );
};

export default Item;
