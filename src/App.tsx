import "./App.css";
import UseRefExample from "./components/UseRefExample";
import MiniCodeUseRef from "./components/MiniCodeUseRef";
import MiniCodeUseRefCss from "./components/MiniCodeUseRefCss";
import MiniCodeInterval from "./components/MiniCodeInterval";

function App() {
  return (
    <div className="App">
      
      <MiniCodeUseRefCss />
      <hr />

      <MiniCodeUseRef />
      <hr />

      <UseRefExample />

      <hr />
      <MiniCodeInterval />
    </div>
  );
}

export default App;
