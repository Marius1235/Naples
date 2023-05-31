import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Test, Next, ChooseBackgroundPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Test />}></Route>
            <Route path="next" element={<Next />}></Route>
            <Route path="background" element={<ChooseBackgroundPage/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
