import React, { useEffect, useReducer } from "react";
import type { DemoProps } from "../ui/TestCard";

type Item = { id: number; name: string; qty: number };
type Action = { type: "ADD" } | { type: "INC"; id: number } | { type: "RESET" };

function cartReducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: state.length + 1, name: `Item ${state.length + 1}`, qty: 1 },
      ];
    case "INC":
      return state.map((i) =>
        i.id === action.id ? { ...i, qty: i.qty + 1 } : i
      );
    case "RESET":
      return [];
    default:
      return state;
  }
}

export function UseReducerDemo({ runSignal, resetSignal }: DemoProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    dispatch({ type: "ADD" });
  }, [runSignal]);
  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [resetSignal]);
  return (
    <div>
      <div className="row" style={{ marginBottom: 8 }}>
        <button className="btn" onClick={() => dispatch({ type: "ADD" })}>
          Add item
        </button>
      </div>
      {cart.map((i) => (
        <div className="row" key={i.id}>
          <span>
            {i.name} x {i.qty}
          </span>
          <button
            className="btn"
            onClick={() => dispatch({ type: "INC", id: i.id })}
          >
            +1
          </button>
        </div>
      ))}
      {cart.length === 0 && <div className="muted">No items</div>}
    </div>
  );
}
