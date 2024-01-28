import { useState } from "react";
import Color from "./Components/Color";

function App() {
  const [color, setColor] = useState("olive");
  const colorArray = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Lavender",
    "Purple",
    "White",
    "Black",
    "Aqua",
    "Pink",
  ];

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            {colorArray.map((color, index) => (
              <Color key={index} color={color} setColor={setColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;