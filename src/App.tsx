import "./App.css";
import { Route, Routes } from "react-router-dom";
import Remote from "./Pages/Remote";
import Simple from "./Pages/Simple";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Simple />} />
          <Route path="remote" element={<Remote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
