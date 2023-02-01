import Layer1 from "../components/Layer1";

export default function Home({ counter, incrementCounter, decrementCounter }) {
  return (
    <Layer1
      counter={counter}
      incrementCounter={incrementCounter}
      decrementCounter={decrementCounter}
    />
  );
}
