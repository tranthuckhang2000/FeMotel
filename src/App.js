import "./App.css";
import Header from "./containers/Header.Component";
import Home from "./containers/Home.Container";
import FindMotel from "./containers/FindMotel.Container";
import LogUp from "./containers/LogUp.Container";
import LogIn from "./containers/LogIn.Container";
import Footer from "./containers/Footer.Component";
import MotelDetail from "./containers/MotelDetail.Container";
import PostMotel from "./containers/PostMotel.Container";
import UpLoad from "./components/UpLoad.Component";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<FindMotel />} />
        <Route path="/logup" element={<LogUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/detail/:id" element={<MotelDetail />} />
        <Route path="/post-motel" element={<PostMotel />} />
        <Route path="/up" element={<UpLoad/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
