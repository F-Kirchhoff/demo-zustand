import styled from "styled-components";

export default function Counter({
  counter,
  incrementCounter,
  decrementCounter,
}) {
  return (
    <CounterWrapper>
      <button onClick={decrementCounter}>-</button>
      <output>{counter}</output>
      <button onClick={incrementCounter}>+</button>
    </CounterWrapper>
  );
}

const CounterWrapper = styled.div`
  min-height: 80px;
  display: flex;
  border-radius: 7px;
  border: 2px solid hsl(0 0% 0% / 0.8);
  background-color: gray;
  align-items: stretch;
  color: hsl(0 0% 0% / 0.8);
  overflow: hidden;
  button {
    flex-grow: 1;
    display: grid;
    place-items: center;
    border: none;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
    font-size: 1.2rem;
  }
  button:hover {
    filter: brightness(1.2);
  }
  output {
    display: block;
    min-width: 80px;
    display: grid;
    place-items: center;
  }
`;
