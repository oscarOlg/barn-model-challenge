import { Canvas } from "@react-three/fiber";
import React, { ChangeEvent, Suspense, useState } from "react";
import { Model } from "./Model";
import { OrbitControls } from "@react-three/drei";
import { ModelSides } from "./types";

const options = [
  { label: "None", value: ModelSides.NONE },
  { label: "Left", value: ModelSides.LEFT },

  { label: "Right", value: ModelSides.RIGHT },

  { label: "Front", value: ModelSides.FRONT },
  { label: "Back", value: ModelSides.BACK },
];

function App() {
  const [highlightedWall, sethighlightedWall] = useState<ModelSides>(
    ModelSides.NONE
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    sethighlightedWall(Number(event.target.value));
  };

  return (
    <div className="wrapper">
      <div className="selector">
        <label>
          Select side to highlight
          <select value={highlightedWall} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="product-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <spotLight intensity={9} position={[1.5, 1.5, 4]} scale={1} />
            <spotLight intensity={9} position={[-1.5, 1.5, 4]} scale={1} />
            <spotLight intensity={9} position={[-1.5, 1.5, -1]} scale={1} />
            <spotLight intensity={9} position={[1.5, 1.5, -1]} scale={1} />
            <Model highlightedWall={highlightedWall} />
            <OrbitControls enablePan enableZoom enableRotate />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
