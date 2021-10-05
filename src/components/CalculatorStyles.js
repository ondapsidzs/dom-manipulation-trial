import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  /* background: gold; */
`;
export const Content = styled.div`
  /* background: green; */
  width: 100%;
`;
export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 3rem;
  text-align: right;
  font-weight: 900;
  border: 1px solid white;
  border-radius: 10px;
  padding-right: 20px;
  min-height: 80px;
`;
export const ButtonsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 30px;
  grid-auto-rows: 30px;
  grid-template-columns: repeat(4, 23%);
  margin: 30px 0;
`;
export const Buttons = styled.button`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: none;
  border-radius: 10px;
  background: white;
  padding: 20px 0;
  cursor: pointer;

  &:first-of-type {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
