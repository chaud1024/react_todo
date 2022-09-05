import React from "react";
import styled from "@emotion/styled";

const WrapItem = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  justify-content: space-between;
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

const Item = () => {
  return (
    <WrapItem>
      <ItemLabel style={getStyled()}>
        <Checkbox type="checkbox" defaultChecked={false} />
        삼겹살 사기
      </ItemLabel>
      <BtnDelete>X</BtnDelete>
    </WrapItem>
  );
};

export default Item;
