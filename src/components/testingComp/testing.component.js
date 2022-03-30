import React from "react";

const Testing = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Testing</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Front End Testing</div>
        <div className="text">
          <p>
            Front End Testing is a testing technique in which the User Interface (UI), functionality and usability of web applications or a software are tested.[1] It checks that the website’s or app’s presentation layer is error-free. This is done after every update to ensure that recent changes have not degraded any aspect of the UI.[2]
          </p>
          <div className="case">End-to-End (E2E) Testing</div>
          <p>
            E2E testing refers to testing the functionality and performance of an application under product-like circumstances and data to replicate live settings. This is to simulate what a real user scenario looks like from start to finish. E2E testing, while more expensive to build, provides greater returns as they validate that our software is functional at every level. They decrease the need to repeat tests, and ultimately, also the time and costs associated with doing so.[3] We will discuss two E2E testing frameworks in this section, mainly between Cypress and Selenium, and conclude why we went with Cypress.
          </p>
          <div className="case">Comparison (Cypress vs Selenium)</div>
          <p>
            Selenium is a test automation tool that enables developers to automate web browser testing. It has a WebDriver used to execute cross-browser tests, and an IDE used to record and replay test cases. Selenium provides support for multiple programming languages, and has strong backing from the community due to its maturity. However, the setup process is more tedious and complex and takes more time.[4]
            <br />
            <br />
            On the other hand, Cypress is an end-to-end testing framework for web test automation that runs on JavaScript. It enables front-end developers to write automated web tests in JavaScript, the main language used for developing websites. It is an all-in-one framework as it has all the necessary features built-in, and comes with Chrome bundled so that users can directly move into writing tests after installation.
            <br />
            <br />
            The choice in this case would be strong for Cypress as we are running a full-stack based on JavaScript, and running a JS-based testing framework would make testing simpler and more convenient. Cypress’ library is also vast and contains most functionalities that an E2E test would need.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Summary</div>
        <div className="text">
          <div className="case">References</div>
          <ol>
            <li>
              "What is Front End Testing? Tools & Frameworks", Guru99, 2022. [Online]. Available: https://www.guru99.com/frontend-testing.html. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              "Front End Testing: A Beginner's Guide | BrowserStack", BrowserStack, 2022. [Online]. Available: https://www.browserstack.com/guide/front-end-testing. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              "Combine API and UI Testing For Confidence At Every Layer Of Your Application", smartbear.com, 2022. [Online]. Available: https://smartbear.com/solutions/end-to-end-testing/#:~:text=End%2Dto%2Dend%20testing%20is,like%20from%20start%20to%20finish. [Accessed: 29- Mar- 2022].
            </li>
            <li>
              2022. [Online]. Available: https://www.blazemeter.com/blog/selenium-vs-cypress-a-complete-comparison-between-the-two-testing-frameworks. [Accessed: 29- Mar- 2022].
            </li>
          </ol>
        </div>
      </div>
    </div >
  );
};

export default Testing;
