import React from "react";

const SystemDesign = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">System Design</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">General System Architecture</div>
        <div className="text">
          <p>
            Locatient is a system consisting of many parts: the scanners, the
            backend, the dashboard, and the testing application for integration.
            The system landscape diagram is shown below to get a clear
            understanding of how each part interacts with one another.
          </p>
          <img src="images/System.png" alt="" />
          <div className="case">Scanner App</div>
          <p>
            The scanner app is a POC for actual QR code scanning devices. Since
            we cannot manufacture or create such device in this project, a
            mobile app with the corresponding functionality is created as POC.
            The scanner app will only have the single functionality of scanning
            a QR code and updating the hash, time, location, and api key to the
            server. It will be developed in flutter where it can be compiled to
            become cross platform.
          </p>
          <div className="case">Database</div>
          <p>
            Mongodb will be hosted on Mongodb Atlas and will act as our primary
            database. Mongodb features time-series collections which
            automatically index the time field and manages operations related to
            it. This is especially benificial to the logging data locatient
            collects.
          </p>
          <div className="case">POC App for integration with nhs</div>
          <p>
            Since actual integration is not possible as a part of this project,
            an app was created to mimic the api requests. The app is designed to
            allow simulating the steps of making a request and visually shows
            the results returned. The app uses administrative privilege which
            can access and register objects not accessible from the dashboard.
            The app will be hosted on GCP.
          </p>
          <div className="case">Backend</div>
          <p>
            The backend will contain api for the flutter app, the dashboard, and
            the administrative requests. All three of them have separate
            privilege levels and have access to different subsets of the api.
            The api is hosted on GCP.
          </p>
          <div className="case">Dashboard</div>
          <p>
            The dashboard fetches data to be displayed as visually organizated
            graphs and analytics. It is the UI for staffs in the hospital. It is
            also the only interface designed to be interacted by human when
            deployed.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Mongodb Database Diagram</div>
        <div className="text">
          <p>
            Our data schema includes only basic fields. Since we cannot get the
            actual fields stored in NHS servers, we will only be including bare
            minimum the field to prove the usability of the application. If
            others were to work off this implementation, the fields can be added
            easily as they won't be the primary or natural key used in the
            system. The ER diagram in shown below.
          </p>
          <img src="images/dbs.png" alt="" className="smallimg" />
          <p>
            Indices are made specifically for sorted data querying and the time
            of logs are optimized by mongodb time-series collections.
          </p>
          <img src="images/dbi.png" alt="" className="smallimg" />
        </div>
      </div>

      <div className="content-block">
        <div className="subtitle">API</div>
        <div className="text">
          <p>
            The backend API is catergorized into three parts: logging,
            administration, and data. Logging is used by the scanner,
            administration is used by NHS services to manage our system, and
            data are for both NHS services and dashboard apps to retreive
            logging data. The following documentation is recored with postman.
          </p>
          <div className="case">Picture of documentation</div>
          <img src="images/apis.png" alt="" className="smallimg" />
          <div className="case">API Documentation</div>
          <ul>
            <li>
              <a href="https://documenter.getpostman.com/view/19506857/UVyoWJ9N">
                Administration
              </a>
            </li>
            <li>
              <a href="https://documenter.getpostman.com/view/19506857/UVyoWJ56">
                Data
              </a>
            </li>
            <li>
              <a href="https://documenter.getpostman.com/view/19506857/UVyoWJ53">
                Scanner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;
