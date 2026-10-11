import { useEffect } from "react";
import { Board } from "./board/Board";
import { OverlayLayer } from "./board/OverlayLayer";
import { Toolbar } from "./board/Toolbar";
import { initRuntime } from "./controller";
import { LayersPanel } from "./layers/LayersPanel";

export function App() {
  useEffect(() => {
    initRuntime();
  }, []);

  return (
    <div className="app">
      <Toolbar />
      <div className="workspace">
        <LayersPanel />
        <Board />
      </div>
      <OverlayLayer />
    </div>
  );
}
