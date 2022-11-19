import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { MyJobs } from "./components/MyJobs";
import { MyPayment } from "./components/MyPayment";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypayment" element={<MyPayment />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/mycertificates" element={<Home />} />
          <Route path="/myofferletter" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
