import { create } from "zustand";

const useStore = create((set) => {
  console.log("inside config callback");
  return {
    counter: 0,
    incrementCounter: () => {
      console.log("incrementing...");
      set((state) => {
        return {
          counter: state.counter + 1,
        };
      });
    },
    decrementCounter: () => {
      console.log("decrementing");
      set((state) => {
        return {
          counter: state.counter - 1,
        };
      });
    },
    resetCounter: () => {
      console.log("resetting");
      set((state) => {
        return {
          counter: 0,
        };
      });
    },
  };
});

export default useStore;
