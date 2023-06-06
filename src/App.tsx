import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TakePicturePage, PictureChoicePage, ChooseBackgroundPage, ActionPage, LandingPage, PreviewResultsPage,  } from "./pages";
import HeaderComponent from "./components/Header/Header";
import './css/App.css'

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>

        <main>
          <Routes>
            <Route path="/" element={< LandingPage/>}></Route>
            <Route path="/picturePage" element={< TakePicturePage/>}></Route>
            <Route path="/choicePage" element={<PictureChoicePage />}></Route>
            <Route path="/backgroundPage" element={<ChooseBackgroundPage />}></Route>
            <Route path="/PreviewResultsPage" element={<PreviewResultsPage />}></Route>
            <Route path="ActionPage" element ={<ActionPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
