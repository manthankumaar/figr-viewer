import { useEffect, useState } from "react";
import { camera } from "../camera";
import { setMode } from "../controller";
import { useApp } from "../store";

export function Toolbar() {
  const mode = useApp((s) => s.mode);
  const zoomLabel = useApp((s) => s.zoomLabel);
  const [zoom, setZoom] = useState(zoomLabel);

  useEffect(() => {
    return camera.subscribe(() => setZoom(camera.get().zoom));
  }, []);

  return (
    <div className="toolbar">
      <div className="brand">Figr viewer</div>
      <button type="button" className={mode === "select" ? "active" : ""} onClick={() => setMode("select")}>
        Select (V)
      </button>
      <button type="button" className={mode === "interact" ? "active" : ""} onClick={() => setMode("interact")}>
        Interact (I)
      </button>
      <span className="zoom">{Math.round(zoom * 100)}%</span>
    </div>
  );
}
