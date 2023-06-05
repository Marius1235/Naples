import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TakePicturePage, PictureChoicePage, ChooseBackgroundPage, ActionPage  } from "./pages";
import HeaderComponent from "./components/Header/Header";
import './css/App.css'

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>

        <main>
          <Routes>
            <Route path="/" element={< TakePicturePage/>}></Route>
            <Route path="pictureChoice" element={<PictureChoicePage />}></Route>
            <Route path="background" element={<ChooseBackgroundPage />}></Route>
            <Route path="*" element={<ChooseBackgroundPage />}></Route>
            <Route path="ActionPage" element ={<ActionPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
