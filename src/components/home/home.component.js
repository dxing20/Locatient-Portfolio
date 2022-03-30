import { AnimationOnScroll } from "react-animation-on-scroll";

function Home() {
  return (
    <section className="home">
      <div className="block">
        <div className="two-sided">
          <div className="text">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={100}
            >
              <p>
                Finding patients in hospital could be a critical yet hectic
                task. Precious time and efforts are wasted on monotonous and
                trivial searching. With the Covid-19 pandemic, the situation
                became increasingly apparent. In seek for a possible solution,
                Locatient was developed.
              </p>
              <p>
                Locatient uses a collection of QR code wristbands, scanners, and
                software to achieve reliable in-door tracking and presents the
                data in a organized manner for staff to utilize. When a new
                patient is registered in the system, a unique QR code and hashed
                identifier will be generated. With this, the patient could
                willingly scan QR codes to share their location with the rest of
                the staff members. Their data will be organized in a visually
                intuitive dashboard and be available to export to the NHS
                service.
              </p>
              <p>
                With the system, staff in hospital will no longer need to
                painstakingly look for patients, and can immediatly give care to
                the ones who needs it. We hope Locatient could reduce tedious
                efforts wasted by staff and give precious time to the treatments
                of patients.
              </p>
            </AnimationOnScroll>
          </div>

          <div className="title">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={0}
            >
              <p>Abstract</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
      <div className="spacing"></div>
      <div className="block-r">
        <div className="three-sided">
          <div className="title">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={0}
            >
              <p>Features</p>
            </AnimationOnScroll>
          </div>
          <div className="text">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={100}
            >
              <p>&#127775; Locatient has three primary features.</p>
            </AnimationOnScroll>
          </div>
          <div className="three">
            <div className="bg"></div>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={0}
            >
              <div className="card">
                <div className="bottom-slide"></div>
                <div className="number">&#9312;</div>
                <div className="feature">Activity Tracking</div>
                <div className="detail">
                  To resolve the tedious task of locating patient on the go,
                  Locatient records the activity history of patients and
                  locations, making it possible not only to locate patient but
                  also creating analytics.
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={100}
            >
              <div className="card">
                <div className="bottom-slide"></div>
                <div className="number">&#9313;</div>
                <div className="feature">Data Visualization</div>
                <div className="detail">
                  Too much data clustered together could make a already
                  cumbersome task worse. Locatient provides a dashboard with
                  customizable data focus for each device as well as analytics
                  to aid the visualization.
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={200}
            >
              <div className="card">
                <div className="bottom-slide"></div>
                <div className="number">&#9314;</div>
                <div className="feature">Integration</div>
                <div className="detail">
                  Integration of new software into pre-existing systems with
                  high availability requirements like hospitals is often
                  daunting. Instead of refactoring the existing system,
                  Locatient's backend provides a set of API to keep itself in
                  sync.
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
      <div className="block-l">
        <div className="slider">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            duration={1}
            delay={0}
            style={{ width: "100%", height: "50%" }}
          >
            <div className="slide-left"></div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
            duration={1}
            delay={0}
            offset={0}
            style={{ width: "100%", height: "50%" }}
          >
            <div className="slide-right"></div>
          </AnimationOnScroll>
        </div>

        <div className="vid">
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={2}
            delay={500}
            offset={0}
          >
            <div className="title">Introduction Video</div>
            <div className="subtitle">A fast introduction to our project</div>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </AnimationOnScroll>
        </div>
      </div>
      <div className="spacing"></div>
      <div className="block-r">
        <div className="three-sided">
          <div className="title">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={0}
            >
              <p>Team</p>
            </AnimationOnScroll>
          </div>
          <div className="text">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={100}
            >
              <p>Meet our team!</p>
            </AnimationOnScroll>
          </div>
          <div className="three">
            <div className="bg"></div>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={0}
            >
              <div className="card">
                <div className="icon">
                  <img src="/images/temp.jpg" alt="" />
                </div>
                <div className="name">Danny Xing</div>
                <div className="email">danny.xing.20@ucl.ac.uk</div>
                <div className="tasks">
                  Frontend Developer, Backend Developer, API and Backend Tester,
                  Blog Developer, Portfolio Developer, UI designer, Researcher,
                  Client Liaison, Report Editor
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={100}
            >
              <div className="card">
                <div className="icon">
                  <img src="/images/temp.jpg" alt="" />
                </div>
                <div className="name">Cheng Loo</div>
                <div className="email">cheng.loo.20@ucl.ac.uk</div>
                <div className="tasks">
                  Frontend Developer, Frontend Tester, Prototyping, Blogger,
                  Video Editor, Client Liaison, Report Editor
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOutUp"
              duration={1}
              delay={200}
            >
              <div className="card">
                <div className="icon">
                  <img src="/images/temp.jpg" alt="" />
                </div>
                <div className="name">Guodong Liu</div>
                <div className="email">zcabgli@ucl.ac.uk</div>
                <div className="tasks">
                  Mobile Developer, Artist, Prototyping
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="block">
            <div className="chart-con">
              <div className="small-title">
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOutUp"
                  duration={1}
                  delay={0}
                >
                  Timeline
                </AnimationOnScroll>
              </div>
              <div className="small-text">
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOutUp"
                  duration={1}
                  delay={200}
                >
                  Learn how we distributed our time and organized the project!
                </AnimationOnScroll>
              </div>
              <div className="minor">Planning Gantt Chart</div>
              <div className="chart">
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOutUp"
                  duration={1}
                  delay={300}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <img src="/images/gantt2.png" alt="" />
                </AnimationOnScroll>
              </div>
              <div className="minor">Development Gantt Chart</div>
              <div className="chart">
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOutUp"
                  duration={1}
                  delay={300}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/chart.jpg" alt="" />
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
