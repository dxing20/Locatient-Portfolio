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
            understanding of how each part interact with one another.
          </p>
          <img src="images/System.png" alt="" />
          <div className="case">Scanner App</div>
          <p>
            The scanner app is a Proof-of-Concept (POC) for actual QR code scanning devices. Since
            we cannot manufacture or create such devices in this project, a
            mobile app with the corresponding functionality is created as a PoC.
            The scanner app will only have a single function of scanning
            QR codes and updating the hash, time, location, and API key to the
            server. It will be developed in Flutter where it can be compiled to
            be cross platform.
          </p>
          <div className="case">Database</div>
          <p>
            MongoDB will be hosted on MongoDB Atlas and will act as our primary
            database. MongoDB features time-series collections which
            automatically index the time field and manages operations related to
            it. This is especially benificial to the logging data Locatient
            collects.
          </p>
          <div className="case">PoC App for integration with NHS</div>
          <p>
            Since actual integration is not possible as part of this project,
            an app was created to mimic the API requests. The app is designed to
            allow simulating the steps of making a request and visually show
            the results returned. The app uses administrative privilege which
            can access and register objects not accessible from the dashboard.
            The app will be hosted on Google Cloud Platform (GCP).
          </p>
          <div className="case">Backend</div>
          <p>
            The backend will contain API for the flutter app, the dashboard, and
            the administrative requests. All three of them have separate
            privilege levels and have access to different subsets of the API.
            The API is hosted on GCP.
          </p>
          <div className="case">Dashboard</div>
          <p>
            The dashboard fetches data to be displayed as visually organizated
            graphs and analytics. It is the User Interface (UI) for staff in the hospital. It is
            also the only interface designed to be interacted by human when
            deployed.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">MongoDB Database Diagram</div>
        <div className="text">
          <p>
            Our data schema includes only basic fields. Since we cannot get the
            actual fields stored in NHS servers, this will suffice to prove the
            usability of the design. If others plan to build on this
            implementation, the fields can be added easily as they won't be the
            primary or natural keys used in the system. The Entity Relationship (ER) diagram in shown
            below.
          </p>
          <img src="images/dbs.png" alt="" className="smallimg" />
          <p>
            There are three types of indices we used, compound index for
            specific queries, Time-to-live (TTL) for activity record and expiry, and unique
            indices for sorting and querying general activity data.
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
            data are for both NHS services and dashboard apps to retrieve
            logging data. The following documentation is recorded with Postman.
          </p>
          <div className="case">API Documentation</div>
          <img src="images/adminAPI.png" alt="" className="longimg" />
          <img src="images/loggingAPI.png" alt="" className="longimg" />
          <img src="images/dataAPI.png" alt="" className="longimg" />
          <div className="case">API Documentation Links</div>
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
