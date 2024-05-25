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
          backgroundImage:
            "url(http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/bg.jpg)",
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
