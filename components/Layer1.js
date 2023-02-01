import styled from "styled-components";
import Layer2 from "./Layer2";

export default function Layer1() {
  return (
    <Wrapper>
      <h1>Layer 1</h1>
      <Layer2 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid;
  border-color: crimson;
  padding: 40px;
  color: crimson;
`;
