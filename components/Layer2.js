import styled from "styled-components";
import Layer3 from "./Layer3";

export default function Layer2({
  counter,
  incrementCounter,
  decrementCounter,
}) {
  return (
    <Wrapper>
      <h2>Layer 2</h2>
      <Layer3
        counter={counter}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid;
  border-color: orange;
  padding: 40px;
  color: orange;
`;
