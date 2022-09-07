import React from "react";
import Item from "./Item";

import styled from "@emotion/styled";

const WrapList = styled.div`
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
`;

const List = React.memo(({ todoData, setTodoData, handleClick }) => {
  return (
    <WrapList>
      {todoData.map((item) => (
        <Item
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </WrapList>
  );
});

export default List;
