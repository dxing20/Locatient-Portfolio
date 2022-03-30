import React from "react";

const Evaluation = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Evaluation</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">MoSCoW List Achievement</div>
        <div className="text">
          <img src="images/achievement-table.png" alt="" />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Individual Contributions</div>
        <div className="text">
          <img src="images/individual-contributions-table.png" alt="" />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Critical Evaluation</div>
        <div className="text">
          <div className="case">UI</div>
          <p>
            Our UI utilized material design principles and followed UX
            guidelines strictly. Each step of our UI development focused on
            extending new feature while retaining the efficiency and
            learnability. Innovations were given when our application features
            deviated from common dashboard designs, making it unique but not
            unnatural. All of our pages are also made to be responsive, granting
            the best accessibility to users as we could. The client also
            complimented our UX especially during the feedback sections of
            client meeting. Overall, we think we did a{" "}
            <div className="r">Very Good</div> job on the UI.{" "}
          </p>
          <div className="case">Functionality</div>
          <p>
            Using a combination of the scanner app, the dashboard, and our API,
            the functionality requested by the client is fully satisfied. We
            even proposed and implemented features which we think could be
            beneficial to the users but were not specifically covered in the
            original requirements, such as focusing on a set of patients to
            track. However, we think many of the functionalities still have
            potential to be enhanced. The patient favoriting can be synchronized
            for each user on different devices, the analytics chart could
            become exportable, and so on. Overall, we think we did{" "}
            <div className="r">Good</div>, and there is still room for
            improvement given more time.
          </p>
          <div className="case">Stability</div>
          <p>
            Rigorous testing is present during and after developement phases. The
            backend contains error catching in every layer - middleware, routes,
            and controllers - and respond with formated json when the error
            happens. The frontend API calls have also been tested and most, if
            not all, user interactions were tested to function. However, we still
            could have done more performance testing, security testing, and unit
            testing on filtering of graph data. Because of this, we think the
            stability of our system is <div className="r">Good</div>, but there
            is still room for improvement given more time.
          </p>
          <div className="case">Efficiency</div>
          <p>
            Our efficiency with data querying is good as all query data is
            indexed on the necessary fields. The graph rendering calculation can
            be made in the backend so the frontend can simply request it. But
            since the analytics are not intensive in complexity, making
            additional data requests might slow the program more. Considering the sizes
            of most hospitals, this solution should suffice. However, for a very
            busy hospital with thousands of patients and staff, we could have
            added caching of logs and dynamic data requests to reduce
            network request time in the frontend and reduce backend computation
            time. Overall we think that our application design is scalable and
            that the overall efficiency is <div className="r">Good</div>. With
            time, this can easily be extended to{" "}
            <div className="r">Very Good</div> with the changes mentioned in
            future works.
          </p>
          <div className="case">Compatibility</div>
          <p>
            Compatibility of our app is one of our main considerations.
            Different hospitals have different set of devices available and
            higher compatibility can minimize the cost for integrating our
            system. Our system's frontend is chosen to be a web app because of
            this reason. It supports viewing of data on all tablets, laptops,
            desktops, and even mobile devices when nessasary. We give our
            application a <div className="r">Very Good</div> on compatibility.
          </p>
          <div className="case">Maintainability</div>
          <p>
            Our backend and frontend follow common practices of the tech stack
            and will be easy to pick up for developers with moderate experience.
            The API is also well documented and very easy to extend. Because of
            this, we will rate our maintainability{" "}
            <div className="r">Very Good</div>.
          </p>
          <div className="case">Project Management</div>
          <p>
            Since our system consists of different parts, defining jobs became a
            more intuitive task. We could work concurrently on different tasks
            while only keeping in mind of endpoints. We also used Netlify to
            watch our Git repository during frontend designs so we were able to share
            and view the combined progress. Although progress did lack behind in
            the earlier weeks of development, we were able to finish our project
            with all the additional features and beyond; Therefore, we think our
            project management is <div className="r">Good</div>, but could be
            more organized when starting development.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Bug List</div>
        <div className="text">
          <ul>
            <li>
              API does not constraint timezone and does not check specific iso
              layout. Validator could be improved. (Medium)
            </li>
            <li>
              Data grid toolbar UI slightly overlaps under and around 500px.
              (Minor)
            </li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Future Work</div>
        <div className="text">
          <div className="case">Given More Time</div>
          <ul>
            <li>Optimize graph data formatting </li>
            <li>Add advanced querying option </li>
            <li>Exportable graphs </li>
            <li>Synchronized Favoriting for same user on different devices </li>
            <li>Extend data structure </li>
            <li>
              Modify backend to better allow horizontal scaling with Atlas{" "}
            </li>
            <li>
              Add filtering to logging requests and avoids duplicate logging
              information{" "}
            </li>
            <li>Add notifications to dashboard</li>
            <li>
              Add specific page to view extended patient and location data
              (after extending data structure)
            </li>
            <li>Optimize graph data formatting </li>
            <li>Organize code base and add more documentation</li>
            <li>Nodes with redis for caching logs</li>
            <li>Data streaming for current dashboard view </li>
          </ul>
          <div className="case">Given Resources</div>
          <ul>
            <li>
              Create an actual scanner capable of scanning and making request
            </li>
            <li>
              Improve app security further and goes through stages of the ig
              security testing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
