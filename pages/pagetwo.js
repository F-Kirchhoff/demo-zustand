import useStore from "../hooks/useStore";

export default function Page() {
  const counter = useStore((state) => state.counter);
  const resetCounter = useStore((state) => state.resetCounter);

  return (
    <>
      <h1>The current counter value is: {counter}</h1>
      <button onClick={resetCounter}>reset counter</button>
    </>
  );
}
