import { useEffect, useState } from "react";
import Nav from "./components/nav/nav.component";
import Panel from "./components/nav/panel.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Head from "./components/head/head.component";
import Footer from "./components/footer/footer.component";
import Requirements from "./components/Requirements/requirements.component";
import Research from "./components/Research/research.component";
import ParticleBubbles from "./components/particle/homeParticle.component";
import HCI from "./components/HCI/hci.component";
import SystemDesign from "./components/systemdesign/systemdesign.component";
import Implementation from "./components/implementation/implementation.component";
import Testing from "./components/testingComp/testing.component";
import Evaluation from "./components/evaluation/evaluation.component";
import Appendix from "./components/appendix/appendix.component";
function App() {
  useEffect(() => {
    setTimeout(function () {
      window.scrollTo(0, -5);
    }, 100);
  }, []);
  let [sliderState, setSliderState] = useState("");
  let doSlider = function () {
    setSliderState("slide-in");
  };
  let removeSlider = function () {
    setSliderState("");
  };
  return (
    <div>
      <div className={`hidder ${sliderState}`} onAnimationEnd={removeSlider}>
        <div className="slab n1"></div>
        <div className="slab n2"></div>
        <div className="slab n3"></div>
        <div className="slab n4"></div>
        <div className="slab n5"></div>
        <div className="slab n6"></div>
        <div className="blocker"></div>
      </div>
      <BrowserRouter>
        <Panel doSlider={doSlider} />
        <div className="page">
          <Nav doSlider={doSlider} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ParticleBubbles />
                  <Head />
                  <Home />
                </>
              }
            />
            <Route
              exact
              path="/requirements"
              element={
                <>
                  <ParticleBubbles />
                  <Requirements />
                </>
              }
            />
            <Route
              exact
              path="/research"
              element={
                <>
                  <ParticleBubbles />
                  <Research />
                </>
              }
            />
            <Route
              exact
              path="/hci"
              element={
                <>
                  <ParticleBubbles />
                  <HCI />
                </>
              }
            />
            <Route
              exact
              path="/systemdesign"
              element={
                <>
                  <ParticleBubbles />
                  <SystemDesign />
                </>
              }
            />
            <Route
              exact
              path="/implementation"
              element={
                <>
                  <ParticleBubbles />
                  <Implementation />
                </>
              }
            />
            <Route
              exact
              path="/testing"
              element={
                <>
                  <ParticleBubbles />
                  <Testing />
                </>
              }
            />
            <Route
              exact
              path="/evaluation"
              element={
                <>
                  <ParticleBubbles />
                  <Evaluation />
                </>
              }
            />
            <Route
              exact
              path="/appendix"
              element={
                <>
                  <ParticleBubbles />
                  <Appendix />
                </>
              }
            />
          </Routes>

          <Footer doSlider={doSlider} />

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
