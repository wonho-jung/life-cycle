import { useState } from "react";
import "./App.css";
import ClassCompoent from "./ClassCompoent";
import Functioncomponet from "./FucntionComponent";

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="App">
      <h1>hello world</h1>
      <input
        type="button"
        value="removefunc"
        onClick={() => setFuncShow(false)}
      />

      <input
        type="button"
        value="removeClass"
        onClick={() => setClassShow(false)}
      />
      {funcShow ? <Functioncomponet initnum={2} /> : null}
      {classShow ? <ClassCompoent initnum={2} /> : null}
    </div>
  );
}

export default App;
