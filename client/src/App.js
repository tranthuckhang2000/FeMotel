import "./App.css";
import Header from "./containers/Header.Component";
import Home from "./containers/Home.Container";
import Find from "./containers/FindMotel.Container";
import LogUp from "./containers/LogUp.Container";
import LogIn from "./containers/LogIn.Container";
import Footer from "./containers/Footer.Component";
import MotelDetail from "./components/MotelDetail.Component";
import PostMotel from "./components/PostMotel.Component";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/logup" element={<LogUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/detail" element={<MotelDetail />} />
        <Route path="/post-motel" element={<PostMotel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
