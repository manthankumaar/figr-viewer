import { useEffect } from "react";
import { Board } from "./board/Board";
import { Toolbar } from "./board/Toolbar";
import { initRuntime } from "./controller";

export function App() {
  useEffect(() => {
    initRuntime();
  }, []);

  return (
    <div className="app">
      <Toolbar />
      <div className="workspace">
        <Board />
      </div>
    </div>
  );
}
