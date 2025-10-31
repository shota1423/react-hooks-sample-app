import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { DemoProps } from "../ui/TestCard";

type Imperative = { focus: () => void };

const CustomInput = forwardRef<Imperative, { placeholder?: string }>(
  function CustomInput({ placeholder }, ref) {
    const innerRef = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(ref, () => ({
      focus: () => innerRef.current?.focus(),
    }));
    return <input ref={innerRef} placeholder={placeholder} />;
  }
);

export function UseImperativeHandleDemo({ runSignal, resetSignal }: DemoProps) {
  const ref = useRef<Imperative | null>(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    ref.current?.focus();
  }, [runSignal]);
  useEffect(() => setValue(""), [resetSignal]);
  return (
    <div className="row" style={{ gap: 8 }}>
      <CustomInput ref={ref} placeholder="custom input" />
      <button className="btn" onClick={() => ref.current?.focus()}>
        Focus
      </button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="state"
      />
    </div>
  );
}
