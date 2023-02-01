import styled from "styled-components";
import Layer2 from "./Layer2";

export default function Layer1({
  counter,
  incrementCounter,
  decrementCounter,
}) {
  return (
    <Wrapper>
      <h1>Layer 1</h1>
      <Layer2
        counter={counter}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid;
  border-color: red;
  padding: 40px;
  color: red;
`;
