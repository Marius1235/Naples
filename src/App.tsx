import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TakePicturePage, PictureChoicePage, ChooseBackgroundPage, RemovedBackgroundPage  } from "./pages";

function App() {
  return (
    <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={< TakePicturePage/>}></Route>
            <Route path="pictureChoice" element={<PictureChoicePage />}></Route>
            <Route path="background" element={<ChooseBackgroundPage />}></Route>
            <Route path="*" element={<RemovedBackgroundPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
