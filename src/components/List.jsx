import React from "react";
import Item from "./Item";

import styled from "@emotion/styled";

const WrapList = styled.div`
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
  border-top: 2px solid #245572;
`;

const List = () => {
  return (
    <WrapList>
      <Item />
    </WrapList>
  );
};

export default List;
