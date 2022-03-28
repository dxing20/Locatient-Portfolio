import FooterIcon from "./footerIcon.component";
import { useNavigate } from "react-router-dom";
let svgPaths = {
  blogPath:
    "M217.6 96.1c-12.95-.625-24.66 9.156-25.52 22.37C191.2 131.7 201.2 143.1 214.4 143.1c79.53 5.188 148.4 74.09 153.6 153.6c.8281 12.69 11.39 22.43 23.94 22.43c.5156 0 1.047-.0313 1.578-.0625c13.22-.8438 23.25-12.28 22.39-25.5C409.3 191.8 320.3 102.8 217.6 96.1zM224 0C206.3 0 192 14.31 192 32s14.33 32 32 32c123.5 0 224 100.5 224 224c0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zM172.3 226.8C157.7 223.9 144 235.8 144 250.6v50.37c0 10.25 7.127 18.37 16.75 21.1c18.13 6.75 31.26 24.38 31.26 44.1c0 26.5-21.5 47.1-48.01 47.1c-26.5 0-48.01-21.5-48.01-47.1V120c0-13.25-10.75-23.1-24.01-23.1l-48.01 .0076C10.75 96.02 0 106.8 0 120v247.1c0 89.5 82.14 160.2 175 140.7c54.38-11.5 98.27-55.5 109.8-109.7C302.2 316.1 247.8 241.8 172.3 226.8z",
  emailPath:
    "M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z",
  githubPath:
    "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
};

let routes = {
  Home: "/",
  Requirements: "/requirements",
  Research: "/research",
  HCI: "/hci",
  "System Design": "/systemdesign",
  Implementation: "/implementation",
  Testing: "/testing",
  Evaluation: "/evaluation",
  Appendix: "/appendix",
};
function Footer({ doSlider }) {
  const navigate = useNavigate();

  let handleRedir = (name) => {
    return () => {
      doSlider();

      setTimeout(() => {
        navigate(routes[name]);
        window.scrollTo(0, 0);
      }, 300);
    };
  };

  return (
    <section className="foot">
      <div className="up">
        <div
          className="upIcon"
          onClick={function doScrolling() {
            let duration = 1000;
            let startingY = window.pageYOffset;
            let diff = -startingY;
            let start;

            window.requestAnimationFrame(function step(timestamp) {
              if (!start) start = timestamp;
              let time = timestamp - start;
              let percent = Math.min(time / duration, 1);
              window.scrollTo(
                0,
                startingY + diff * percent * percent * percent
              );
              if (time < duration) {
                window.requestAnimationFrame(step);
              }
            });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
          </svg>
        </div>
      </div>
      <div className="top">
        <div className="informations">
          <div className="title">Information</div>
          <div className="info">
            <p>
              This website is made by UCL Year2 2022 COMP0016 Team 08. It
              contains the different phases of communication and development for
              the Locatient project. The project was made possible with the
              support from NHS.
            </p>
          </div>
          <div className="icons">
            <FooterIcon pathD={svgPaths.emailPath} />
            <FooterIcon pathD={svgPaths.blogPath} />
            <FooterIcon pathD={svgPaths.githubPath} />
          </div>
        </div>
        <div className="navigations">
          <div className="title">Navigation</div>
          <table className="navigationTable">
            <tbody>
              <tr>
                <td onClick={handleRedir("Home")}>Home</td>
                <td onClick={handleRedir("Requirements")}>Requirements</td>
              </tr>
              <tr>
                <td onClick={handleRedir("Research")}>Research</td>
                <td onClick={handleRedir("HCI")}>HCI</td>
              </tr>
              <tr>
                <td onClick={handleRedir("System Design")}>System Design</td>
                <td onClick={handleRedir("Implementation")}>Implementation</td>
              </tr>
              <tr>
                <td onClick={handleRedir("Testing")}>Testing</td>
                <td onClick={handleRedir("Evaluation")}>Evaluation</td>
              </tr>
              <tr>
                <td onClick={handleRedir("Appendix")}>Appendix</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="supports">
          <div className="title">Supporter</div>
          <div className="images">
            <img className="nhs" src="/images/Nhs-logo.png" alt="NHS" />
            <img className="ucl" src="/images/ucl.png" alt="UCL" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>© 2022 All Rights Reserved</span>
      </div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      <div className="shape-5"></div>
      <div className="shape-6"></div>
      <div className="shape-7"></div>
    </section>
  );
}

export default Footer;
