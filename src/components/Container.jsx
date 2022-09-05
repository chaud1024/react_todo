import React from "react";
import styled from "@emotion/styled";
import List from "./List";

const WrapContainer = styled.div`
  width: 80%;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 2rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const WrapTodo = styled.div`
  width: 100%;
  padding: 1.4rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #245572;
  margin-bottom: 1rem;
`;

const Container = () => {
  return (
    <WrapContainer>
      <WrapTodo>
        <Title>오늘의 할 일</Title>
        <List />
      </WrapTodo>
    </WrapContainer>
  );
};

export default Container;
