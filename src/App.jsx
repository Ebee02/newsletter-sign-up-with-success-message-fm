import "./index.css";
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Form />} />
          <Route path="/success" element={<SuccessMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
