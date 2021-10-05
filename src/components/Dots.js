import styled from "styled-components";

export const DotContainer = styled.div`
  position: absolute;
  display: flex;
  top: 5%;
  left: 5%;
`;
export const Dot = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background: ${(props) =>
    props.index === parseInt(props.dot - 1) ? "white" : "rgba(0,0,0,0.8)"};

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const Dots = (props) => {
  return (
    <DotContainer>
      <Dot dot="1" index={props.index} />
      <Dot dot="2" index={props.index} />
      <Dot dot="3" index={props.index} />
    </DotContainer>
  );
};

export default Dots;
