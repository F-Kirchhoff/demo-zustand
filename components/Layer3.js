import styled from "styled-components";
import Counter from "./Counter";

export default function Layer3() {
  return (
    <Wrapper>
      <h3>Layer 3</h3>
      <Counter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid;
  border-color: dodgerblue;
  padding: 40px;
  color: dodgerblue;
`;
