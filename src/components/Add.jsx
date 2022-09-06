import React from "react";
import styled from "@emotion/styled";

const WrapForm = styled.div`
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
  border-bottom: 1px dashed #89acbe;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputText = styled.input`
  width: 88%;
  padding: 0.8rem;
  box-sizing: border-box;
  border: none;
`;

const InputSubmit = styled.input`
  width: 12%;
  padding: 0.8rem;
  box-sizing: border-box;
  border: 2px solid #245572;
  border-radius: 1rem;
  background-color: transparent;
  color: #245572;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #245572;
  }
`;

const Add = ({ value, setValue, handleChange, handleSubmit }) => {
  return (
    <WrapForm>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="value"
          placeholder="오늘 할 일을 입력하세요."
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <InputSubmit type="submit" value="ADD" />
      </Form>
    </WrapForm>
  );
};

export default Add;
