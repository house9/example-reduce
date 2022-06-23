import "./App.css";
import Reduce from "./ReduceExample/Simple";
import Standard from "./StandardExample/Simple";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Standard />
        <p></p>
        <Reduce />
      </div>
    </div>
  );
}

export default App;
