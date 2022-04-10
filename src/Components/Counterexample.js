import React, { useState } from "react";

function Counterexample() {
  const [getCount, setCount] = useState(0);

  return (
    <div>
      <h1>{getCount}</h1>
      <h1 onClick={() => setCount(getCount + 1)}>Plus</h1>
      <h1 onClick={() => setCount(getCount - 1)}>Minus</h1>
    </div>
  );
}

export default Counterexample;
