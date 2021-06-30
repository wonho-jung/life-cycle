import "./App.css";
import ClassCompoent from "./ClassCompoent";
import Functioncomponet from "./FucntionComponent";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ClassCompoent initnum={2} />

      <Functioncomponet initnum={2} />
    </div>
  );
}

export default App;
