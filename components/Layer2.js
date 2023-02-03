import styled from "styled-components";
import Layer3 from "./Layer3";

export default function Layer2() {
  return (
    <Wrapper>
      <h2>Layer 2</h2>
      <Layer3 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid;
  border-color: orange;
  padding: 40px;
  color: orange;
`;
