import { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

function ReactInputRange() {
  const [range, setRange] = useState({
    min: 20,
    max: 50,
  });

  return (
    <div style={{ width: "800px" }}>
      <InputRange
        maxValue={100}
        minValue={0}
        formatLabel={(value) => `${value}`}
        value={range}
        onChange={(value) => setRange(value)}
        onChangeComplete={(value) => console.log(value)}
      />
    </div>
  );
}

export default ReactInputRange;
