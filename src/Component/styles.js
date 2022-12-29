import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 50rem;
  cursor: "auto";
  padding: 2rem 2rem 2rem 1.6rem;
  height: 2rem;
  margin-block: 5rem;
  border-radius: 10rem;
  border: 1px solid lightgray;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input`
  font-size: 18px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  border: none;
  color: black;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Card = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 10px;
  display: flex !important;
  padding: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  background-color: #fff;

  & .image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 160px;
  }

  & .details {
    font-size: 24px;

    span {
      display: flex;
      flex-direction: column;
      margin-block: 10px;
    }
  }
`;
