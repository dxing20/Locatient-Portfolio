import React from "react";

const Evaluation = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Evaluation</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">MoSCoW List Acheivement</div>
        <div className="text"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Individual Contribution</div>
        <div className="text"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Critical Evaluation</div>
        <div className="text">
          <div className="case">UI</div>
          <p></p>
          <div className="case">Functionality</div>
          <p></p>
          <div className="case">Stability</div>
          <p></p>
          <div className="case">Efficiency</div>
          <p></p>
          <div className="case">Compatibility</div>
          <p></p>
          <div className="case">Maintainability</div>
          <p></p>
          <div className="case">Project management</div>
          <p></p>
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
            <li>Extend data structure </li>
            <li>
              Modify backend to better allow horizontal scaling with Atlas{" "}
            </li>
            <li>
              Add filtering to logging requests and avoids duplicate logging
              information{" "}
            </li>
            <li>Add notification to dashboard</li>
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
