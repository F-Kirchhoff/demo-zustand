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
  border-radius: 18px;
  border: 2px solid hsl(0 0% 0% / 0.3);
  background-color: lightgray;
  align-items: stretch;
  color: hsl(0 0% 0% / 0.8);
  overflow: hidden;
  font-size: 1.5rem;
  button {
    flex-grow: 1;
    display: grid;
    place-items: center;
    border: none;
    background-color: inherit;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(1.2);
  }
  output {
    display: block;
    min-width: 80px;
    display: grid;
    place-items: center;
    border-left: solid 2px hsl(0 0% 0% / 0.3);
    border-right: solid 2px hsl(0 0% 0% / 0.3);
  }
`;
