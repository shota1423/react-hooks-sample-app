import React from "react";
import { ThemeProvider } from "../theme/ThemeContext";
import { TestCard } from "./TestCard";
import { UseStateDemo } from "../views/UseStateDemo";
import { UseEffectDemo } from "../views/UseEffectDemo";
import { UseContextDemo } from "../views/UseContextDemo";
import { UseReducerDemo } from "../views/UseReducerDemo";
import { UseRefDemo } from "../views/UseRefDemo";
import { UseMemoDemo } from "../views/UseMemoDemo";
import { UseCallbackDemo } from "../views/UseCallbackDemo";
import { UseLayoutEffectDemo } from "../views/UseLayoutEffectDemo";
import { UseImperativeHandleDemo } from "../views/UseImperativeHandleDemo";
import { UseDebugValueDemo } from "../views/UseDebugValueDemo";
import { UseTransitionDemo } from "../views/UseTransitionDemo";
import { UseDeferredValueDemo } from "../views/UseDeferredValueDemo";
import { UseIdDemo } from "../views/UseIdDemo";
import { UseSyncExternalStoreDemo } from "../views/UseSyncExternalStoreDemo";
import { UseInsertionEffectDemo } from "../views/UseInsertionEffectDemo";
import { UseCustomHookDemo } from "../views/UseCustomHookDemo";

// The main App component that renders all the hook demos inside TestCards
export function App() {
  return (
    <ThemeProvider>
      <div className="grid">
        <TestCard title="useState">{(s) => <UseStateDemo {...s} />}</TestCard>
        <TestCard title="useEffect">{(s) => <UseEffectDemo {...s} />}</TestCard>
        <TestCard title="useContext">
          {(s) => <UseContextDemo {...s} />}
        </TestCard>
        <TestCard title="useReducer">
          {(s) => <UseReducerDemo {...s} />}
        </TestCard>
        <TestCard title="useRef">{(s) => <UseRefDemo {...s} />}</TestCard>
        <TestCard title="useMemo">{(s) => <UseMemoDemo {...s} />}</TestCard>
        <TestCard title="useCallback">
          {(s) => <UseCallbackDemo {...s} />}
        </TestCard>
        <TestCard title="useLayoutEffect">
          {(s) => <UseLayoutEffectDemo {...s} />}
        </TestCard>
        <TestCard title="useImperativeHandle">
          {(s) => <UseImperativeHandleDemo {...s} />}
        </TestCard>
        <TestCard title="useDebugValue">
          {(s) => <UseDebugValueDemo {...s} />}
        </TestCard>
        <TestCard title="useTransition">
          {(s) => <UseTransitionDemo {...s} />}
        </TestCard>
        <TestCard title="useDeferredValue">
          {(s) => <UseDeferredValueDemo {...s} />}
        </TestCard>
        <TestCard title="useId">{(s) => <UseIdDemo {...s} />}</TestCard>
        <TestCard title="useSyncExternalStore">
          {(s) => <UseSyncExternalStoreDemo {...s} />}
        </TestCard>
        <TestCard title="useInsertionEffect">
          {(s) => <UseInsertionEffectDemo {...s} />}
        </TestCard>
        <TestCard title="Custom Hook (useFetch)">
          {(s) => <UseCustomHookDemo {...s} />}
        </TestCard>
      </div>
    </ThemeProvider>
  );
}
