import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
import Plans from "./pages/Plans";
import Genrator from "./pages/Genrator";
import Community from "./pages/Community";
import Loading from "./pages/Loading";
import MyGenration from "./pages/MyGenration";

function App() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:projectId" element={<Result />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/my-genrations" element={<MyGenration />} />
        <Route path="/genrate" element={<Genrator />} />
        <Route path="/community" element={<Community />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
