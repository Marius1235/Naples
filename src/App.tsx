import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test, Next } from "./pages";

function App() {
  return (
    <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Test />}></Route>
            <Route path="next" element={<Next />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
