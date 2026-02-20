// import HeroSection from "./components/Hero";
// import EventsSection from "./components/EventsSection"; 
// import Navbar from "./components/Navbar";
// import RegisterForm from "./components/RegisterForm";
// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import VerifyPage from "./VerifyPage";

// function App() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Navbar/>
//       <HeroSection />
//       <EventsSection />  {/* <-- Events section added */}
//       <RegisterForm/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import HeroSection from "./components/Hero";
import EventsSection from "./components/EventsSection";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerifyPage from "./components/VerifyPage";

function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <RegisterForm />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<HomePage />} />

        {/* QR Verification Page */}
        <Route path="/verify/:id" element={<VerifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;