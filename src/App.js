import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Libraries from "./pages/Libraries";
import Header from "./components/Header";
import Section from "./components/section";
import Library from "./pages/library";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Section to={"/home"} />} />
                <Route path="/home" element={<Section />} />
                <Route path="/libraries" element={<Libraries />} />
                <Route path="/libraries/:name" element={<Library />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
