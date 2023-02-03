import { create } from "zustand";
import createWithLocalStorage from "./createWithLocalStorage";

// This is the structure of how we constructed our store.
/* 
const config = () => {
  
  const initialState = {
    state1: ...,
    state2: ...,
    handleState1: () => {...}
    ...
  }
  
  return initialState
} 

const useStore = create(config) <- config === callback function
*/

// However, in the zustand docs the config and initialState are not saved as constants but are written inline, i.e. directly where they are used:

const useStore = create((set) => {
  // our config is this callback function
  return {
    // this return value is our initialState
    counter: 1337,
    x: 0, // these are other states, but we don't use them in the app
    y: 1, //
    resetCounter: () => {
      //set counter to 0
      set((currentState) => {
        return {
          counter: 0,
        };
      });
    },
    incrementCounter: () => {
      set((currentState) => {
        const newCounterValue = currentState.counter + 1;
        return {
          counter: newCounterValue,
        };
      });
    },
    decrementCounter: () => {
      set((state) => {
        const newCounter = state.counter - 1;
        return {
          counter: newCounter,
        };
      });
    },
  };
});

export default useStore;
