export default function Page({ counter, resetCounter }) {
  return (
    <>
      <h1>The current counter value is: {counter}</h1>
      <button onClick={resetCounter}>reset counter</button>
    </>
  );
}
