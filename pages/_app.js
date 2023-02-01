import { useState } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

function MyApp({ Component, pageProps }) {
  const [counter, setCounter] = useState(0);
  function decrementCounter() {
    setCounter(counter - 1);
  }
  function incrementCounter() {
    setCounter(counter + 1);
  }
  function resetCounter() {
    setCounter(0);
  }
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          counter={counter}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          resetCounter={resetCounter}
        />
      </Layout>
    </>
  );
}

export default MyApp;
