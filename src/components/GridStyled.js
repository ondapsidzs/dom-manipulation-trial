import styled from "styled-components";

export const GridContainer = styled.div`
  padding: 50px 0;
`;
export const GridContent = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 20px;
  grid-template-columns: repeat(2, calc((100% - 20px) / 2));
  grid-auto-rows: 200px;
`;
export const GridItem = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: transform;

  &:hover {
    transform: scale(1.02);
  }
`;
