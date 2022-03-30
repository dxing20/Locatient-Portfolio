import React from "react";

const Testing = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Testing</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Backend Unit Testing</div>
        <div className="text">
          <p>
            Backend testing is required for making sure the API routes are
            responsive and that are data is provided if and only if the provided
            fields are successfully validated.
          </p>
          <div className="case">Unit Testing</div>
          <p>
            Unit testing for backend and API involves writing a set of tests for
            the individual types of requests to aid future bug detection,
            debugging, and avoids error in production[5]. For our purpose, unit
            testing is robust and ensures that integration between different
            part of the system integrates easily, pin-pointing bugs.
          </p>
          <div className="case">Unit Testing Libraries</div>
          <p>
            Node.js is one of the most popular framework for developers and has
            been gaining in popularity [6]. Many testing libraries are available
            because of this. To choose our framework, we looked for ease of
            testing and ease of setting up. We choose three libraries to compare
            between: Mocha, Jest, and Jasmine. Mocha used to be the most popular
            testing framework for JavaScript[5], support easy asynchronou
            testing with and easy to use generator methods. However, it's rely
            on the many other dependencies made us not to proceed with it. Jest
            is a testing framework maintained by facebook and has been gaining
            popularity in the recent years. It is easy to setup and configure,
            has great documentation, and supports many additional features like
            coverage testing. Jest was our final decision on unit testing
            library. Jasmine is an older framework released in 2010. Similar to
            jest, it is easy to set up and has been thoroughly documented.
            However, it has unfriendly error logs and is not as optimized as
            libraries like jest.
          </p>
          <div className="case">Testing</div>
          <p>
            We designed our API to always include an error message when it fails
            to return valid data. Unit tests guarantee that failure and success
            are consistent and predictable. The following shows the test list.
            <img src="images/unit.jpg" alt="" className="longimg" />
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Front End Testing</div>
        <div className="text">
          <p>
            Front End Testing is a testing technique in which the User Interface
            (UI), functionality and usability of web applications or a software
            are tested.[1] It checks that the website’s or app’s presentation
            layer is error-free. This is done after every update to ensure that
            recent changes have not degraded any aspect of the UI.[2]
          </p>
          <div className="case">End-to-End (E2E) Testing</div>
          <p>
            E2E testing refers to testing the functionality and performance of
            an application under product-like circumstances and data to
            replicate live settings. This is to simulate what a real user
            scenario looks like from start to finish. E2E testing, while more
            expensive to build, provides greater returns as they validate that
            our software is functional at every level. They decrease the need to
            repeat tests, and ultimately, also the time and costs associated
            with doing so.[3] We will discuss two E2E testing frameworks in this
            section, mainly between Cypress and Selenium, and conclude why we
            went with Cypress.
          </p>
          <div className="case">Comparison (Cypress vs Selenium)</div>
          <p>
            Selenium is a test automation tool that enables developers to
            automate web browser testing. It has a WebDriver used to execute
            cross-browser tests, and an IDE used to record and replay test
            cases. Selenium provides support for multiple programming languages,
            and has strong backing from the community due to its maturity.
            However, the setup process is more tedious and complex and takes
            more time.[4]
            <br />
            <br />
            On the other hand, Cypress is an end-to-end testing framework for
            web test automation that runs on JavaScript. It enables front-end
            developers to write automated web tests in JavaScript, the main
            language used for developing websites. It is an all-in-one framework
            as it has all the necessary features built-in, and comes with Chrome
            bundled so that users can directly move into writing tests after
            installation.
            <br />
            <br />
            The choice in this case would be strong for Cypress as we are
            running a full-stack based on JavaScript, and running a JS-based
            testing framework would make testing simpler and more convenient.
            Cypress’ library is also vast and contains most functionalities that
            an E2E test would need.
          </p>
          <div className="case">Cypress Testing</div>
          <p>
            Using Cypress, we were able to create 2 medium E2E tests that cover the key features of our dashboard: viewing and filtering logs, and managing favourites. The tests are built in a way that each component tested is distinct from one another, and will not be disrupted by new updates to the dashboard. Adding a new element to the component will not cause the tests to execute on an incorrect element, and will maintain the original testing goals.
            <br />
            <br />
            In the video snippets below, Cypress simulates a user’s path from the start to finish.
          </p>
          <div className="case">Viewing of Logs</div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/41tiybScuwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="case">Managing Favourites</div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0eeTgNuNvdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">User Acceptance Testing</div>
        <div className="text">
          <p>
            User acceptance testing is performed by the end users to verify
            their acceptance of the software design. We will evaluate our user
            acceptance testing based on anonymous testing and client feedback.
          </p>
          <div className="case">Anonymous Testing</div>
          <p>
            During this test, we will designed scenarios where we imagine our
            application will be commonly used. We then find anonymous volunteers
            who understands the concept of our app but have not used it before.
            After providing them with the login, they are requested to follow
            the scenario and accomplish the tasks. Feedbacks were given in the
            end, giving us a general score and comments.
          </p>
          <div className="case">Anonymous Test 1</div>
          <p>
            Scenario: The staff member was just told to take care of a newly
            register patient given his name and identifier. To make management
            easier, he wants to favorite the patient and find out where he is
            now.
          </p>
          <div className="case">Anonymous Test 1 Feedback</div>
          <p>
            Adding favorites is very easy and intuitive. However, my first
            intinct told me that adding a new favorite should be in the manage
            favorite tab where it wasn't. Finding where he last was is also
            simple and intuitive.
            <br />
            <br />
            Score: 8/10 - Navigation was really simple and everything was easily
            found. Except a minor initial confusion, everything else was very
            learnable and is easy to master.
          </p>
          <div className="case">Anonymous Test 2</div>
          <p>
            Scenario: The staff urgently need to find a patient that hasn't
            moved recently. He has not followed the patients.
          </p>
          <div className="case">Anonymous Test 2 Feedback</div>
          <p>
            Finding this on my first try took me 20 seconds. After entering the
            filter, all of his activities showed in a sorted way and the logging
            page navigation was also navigatable from home page. The app seems
            much more intuitive than I thought when I listened to what it does.
            <br />
            <br />
            Score: 9/10 - Data was highly accessible.
          </p>
          <div className="case">Client Feedback</div>
          <p>
            The project did exactly what I initially wanted. You guy did an
            amazing job and absolutly nailed it. Me and my colleagues could
            really use software like this.
          </p >
        </div >
      </div >
      <div className="content-block">
        <div className="subtitle">Summary</div>
        <div className="text">
          <div className="case">References</div>
          <ol>
            <li>
              "What is Front End Testing? Tools & Frameworks", Guru99, 2022.
              [Online]. Available: https://www.guru99.com/frontend-testing.html.
              [Accessed: 29- Mar- 2022].
            </li>
            <li>
              "Front End Testing: A Beginner's Guide | BrowserStack",
              BrowserStack, 2022. [Online]. Available:
              https://www.browserstack.com/guide/front-end-testing. [Accessed:
              29- Mar- 2022].
            </li>
            <li>
              "Combine API and UI Testing For Confidence At Every Layer Of Your
              Application", smartbear.com, 2022. [Online]. Available:
              https://smartbear.com/solutions/end-to-end-testing/#:~:text=End%2Dto%2Dend%20testing%20is,like%20from%20start%20to%20finish.
              [Accessed: 29- Mar- 2022].
            </li>
            <li>
              2022. [Online]. Available:
              https://www.blazemeter.com/blog/selenium-vs-cypress-a-complete-comparison-between-the-two-testing-frameworks.
              [Accessed: 29- Mar- 2022].
            </li>
            <li>
              {
                "LogRocket Blog. 2022. Comparing Node.js unit testing frameworks - LogRocket Blog. [online] Available at: <https://blog.logrocket.com/the-best-unit-testing-frameworks-for-node-js/> [Accessed 30 March 2022]."
              }
            </li>
            <li>
              {
                "SimilarTech. 2022. NodeJs Market Share and Web Usage Statistics. [online] Available at: <https://www.similartech.com/technologies/nodejs> [Accessed 30 March 2022]."
              }
            </li>
          </ol>
        </div>
      </div>
    </div >
  );
};

export default Testing;
