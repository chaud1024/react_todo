import React, { useState } from "react";
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

const BtnEdit = styled.button`
  color: #245572;
  background-color: transparent;
  border: none;
  padding: 6px 9px;
  box-sizing: border-box;
  cursor: pointer;
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

const Item = React.memo(
  ({ todoData, setTodoData, handleClick, id, title, completed }) => {
    const getStyled = (completed) => {
      return {
        textDecoration: completed ? "line-through" : "none",
        color: completed ? "#89acbe" : "#0c1214",
      };
    };

    const handleCompletedChange = (id) => {
      let newTodoData = todoData.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      setTodoData(newTodoData);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const hadleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };

    const handleEditSubmit = (e) => {
      e.preventDefault();
      let newTodoData = todoData.map((item) => {
        if (item.id === id) {
          item.title = editedTitle;
        }
        return item;
      });
      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <WrapItem key={id}>
          <form onSubmit={handleEditSubmit}>
            <ItemLabel>
              <Checkbox
                type="text"
                value={editedTitle}
                onChange={hadleEditChange}
              />
            </ItemLabel>
          </form>
          <BtnEdit type="submit" onClick={handleEditSubmit}>
            SAVE
          </BtnEdit>
          <BtnDelete onClick={() => setIsEditing(false)}>X</BtnDelete>
        </WrapItem>
      );
    } else {
      return (
        <WrapItem key={id}>
          <ItemLabel style={getStyled(completed)} key={id}>
            <Checkbox
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompletedChange(id)}
            />
            {title}
          </ItemLabel>
          <BtnEdit onClick={() => setIsEditing(true)}>EDIT</BtnEdit>
          <BtnDelete onClick={() => handleClick(id)}>X</BtnDelete>
        </WrapItem>
      );
    }
  }
);

export default Item;
