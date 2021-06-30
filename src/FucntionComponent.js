import React, { useEffect, useState } from "react";
var funStyle = "color:blue";
var funId = 0;
function Functioncomponet(props) {
  // you can get as props or name as {initnum}
  const [number, setNumber] = useState(props.initnum);
  const [date, setDate] = useState(new Date().toString());
  useEffect(() => {
    console.log(
      "%cfunc => useEffect(componentDidMount, componentDidUpdate)" + ++funId,
      funStyle
    );
    document.title = number + " : " + date;
  }, [number]);
  console.log("%cfunc => render" + ++funId, funStyle);
  return (
    <div className="container">
      <h1>function stlye</h1>
      <p>Number: {number}</p>
      <p>Date: {date}</p>

      <input
        type="button"
        value="random"
        onClick={() => setNumber(Math.random())}
      />
      <input
        type="button"
        value="Time"
        onClick={() => setDate(new Date().toString())}
      />
    </div>
  );
}

export default Functioncomponet;
