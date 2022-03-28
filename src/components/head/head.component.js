import { AnimationOnScroll } from "react-animation-on-scroll";

function Head() {
  return (
    <section className="head">
      <div className="bg-border"></div>

      <div className="part-2">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
          delay={600}
          animateOnce
        >
          <div className="loc">
            {/* <img className="ig" src="/images/page-head-v2.png" alt="" /> */}

            <div className="dashboard"></div>

            <div className="analytics"></div>

            <div className="blob"></div>
            <div className="dot"></div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="part-1">
        <div className="loc">
          <div className="head-title">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOutRight"
              duration={0.5}
              animateOnce
            >
              <span className="head-letter">P</span>Portfolio
            </AnimationOnScroll>
          </div>

          <div className="head-text">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOutRight"
              duration={0.5}
              delay={200}
              animateOnce
            >
              With passion, dedication, and some imagination, Locatient was
              created. A suite of softwares which utilizes wrist bands to
              accomplish precise in-door location tracking and data logging.
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
