import "./App.css";
import CursorAnimation from "./components/CursorAnimation";
import DynamicBackground from "./components/DynamicBackground";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(./public/images/bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <CursorAnimation />
        <Navbar />
        <Hero />
      </div>
      <Marquee />
      <DynamicBackground />
    </>
  );
}

export default App;
