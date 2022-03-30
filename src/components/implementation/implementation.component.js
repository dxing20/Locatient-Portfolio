import React from "react";

const Implementation = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Implementation</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Backend Implementation</div>
        <div className="text">
          <div className="case">Framework and Structure</div>
          <p>
            We used Express.js and Node.js to implement our backend API,
            structuring the app in the Model-Route-Controller-Service structure
            common to express.
            <img className="tinyimg" src="images/Backend.png" alt="" />
          </p>
          <div className="case">MongoDB, Mongoose, and Atlas</div>
          <p>
            Mongoose was used with MongoDB to create the models in the backend.
            The schema is first defined using mongoose Schema inside the models
            folder. The corresponding models are then created using the schema.
            In here, we also defined functions in stages of our life cycles to
            add additional fields such as generating the unique indentifier of
            each patient for the qrcode.
          </p>
          <img src="images/chema.png" alt="" className="smallimg" />
          <p>
            Notice that unique and compound indice are placed upon documents
            which are more heavily queried to increase scalability.
          </p>
          <p>
            We hosted MongoDB on MongoDB Atlas. MongoDB Atlas provides scalable
            database hosting and guarentees database availability by creating
            replica custers. The connection is established by mongoose as shown
            below.
          </p>
          <img src="images/dbcon.png" alt="" className="smallimg" />
          <div className="case">Authentication</div>
          <p>
            There are two different authentication methods and 3 different
            privileges. The scanner uses an API key to authenticate their
            requests and can only access location and update logs. The user
            privilege using JSON Web Token authentication can access data
            regarding logs, locations, and patients. The admin privilege using
            JSON Web Token authentication is designed to be used directly by NHS
            service and can modify all data and can register new users.
          </p>
          <p>
            The authentication is accomplished with the aid of passportjs and
            the jsonwebtoken module. In the configuration section, the passport
            configuration defines what the middleware should do when the jwt
            payload/apikey is extracted from the header. For example, all of the
            jwt payloads will carry the users object id in the document. We need
            to try finding the user object in our database and if successful,
            return the user object to the callback function. If unsuccessful,
            for example the user has been unregistered, the callback will be
          </p>
          <img className="smallimg" src="images/jwtExtract.png" alt="" />
          <img className="smallimg" src="images/apiKeyExtract.png" alt="" />
          <p>
            Next, after the payload has been extracted, we need to define what
            we need to do with the extracted object. For example, after the jwt
            payload is extracted as explained in the previous steps, we want to
            attach it to the request object so that other middlewares and
            controllers down the line can access it. This is handled in the
            middlewares section. If no valid payload is extracted, then the
            attached object will be empty.
          </p>
          <img className="smallimg" src="images/jwtMiddle.png" alt="" />
          <p>
            Lastly, for certain routes, we want to disallow users with
            insufficient privilege. The middleware responsible for this is the
            permission middleware. It checks whether a valid authorized object
            is attached to the resquest body and disallows all the requests
            without the object or with objects that didnt match the criteria.
            For example, the jwt authentication will check whether the attached
            user is a privilege user.
          </p>
          <img className="smallimg" src="images/priv.png" alt="" />
          <div className="case">Controllers</div>
          <p>
            The controllers are simple. They will validate the request body and
            parameter, find the wanted data, and remove linked data related to
            objects scheduled to be unregisterd.
          </p>
          <div className="case">Main Tools and Dependencies</div>
          <ul>
            <li>Express JS version 4.17.2</li>
            <li>Mongoose version 6.2.1</li>
            <li>Passport version 0.6.1</li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Dashboard Implementation</div>
        <div className="text">
          <img src="images/fash.png" alt="" className="tinyimg" />
          <div className="case">Framework and Structure</div>
          <p>
            The framework used for the dashboard is React, a component-based
            JavaScript library for building frontend UI. The project structure
            follow React standards with a public and src folder in theroot
            directory.
            <br />
            <img src="images/root.png" alt="" className="tinyimg" />
            <br />
            The public directory contains static files and styling for the
            interface. Styling is written in SCSS, a preprocessor scripting
            language which, combined with{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass">
              VSCode live SASS compiler{" "}
            </a>
            gets compiled live into CSS.
            <br />
            <img src="images/scss.png" alt="" className="tinyimg" />
            <br />
            The src directory contains components, services, App.js, atom.js,
            and index.js. Components folder contains UI componenents gets
            selectively rendered inside "App.js", and the service folder
            contains axio's API request definitions.
          </p>
          <div className="case">Fetching data from API</div>
          <img src="images/Axio.png" alt="" className="tinyimg" />
          <p>
            We used Axios to fetch data from the backend into the dashboard.
            First, we define a service class for the different types of api
            calls we will be making. In our case, the dashboard only need to
            retreive data and authenticate it's users; Therefore, we created
            AuthService and DataService. In each of these classes, we created
            functions corresponding to API endpoints. Take authentication for
            example, the only function we need is to retrieve a valid json web
            token from the server given users credentials. Using Axios, this
            task is made simple by only requiring us to provide it with the
            username and password to the correct address.
          </p>
          <img src="images/axios.png" alt="" className="smallimg" />
          <p>
            After the structure of the request is defined, we can use it by
            importing the service in any of our components. For example, the
            authentication service is imported and used in the login components.
            <img src="images/onAxioSuccess.png" alt="" />
            After calling the service function, Axios will return a promise
            which we can attach callbacks to, depending on the status of the
            requests.
          </p>
          <div className="case">Charts and Graphs</div>
          <img src="images/ana.png" alt="" className="tinyimg" />
          <p>
            We created the graphs and charts in the analytics section by
            utilizing Chartjs and react-chartjs-2. After each time the data has
            been updated into the recoil states, the related graph will
            re-render using the react useEffect hooks. When the hook is
            triggered, data for the graphs are recalculated and displayed.
            <img src="images/dataEffect.png" alt="" />
            After the data used for the graph has been extracted and formated,
            configuration and styling for the graphs are defined. For more
            specifics on configurations, see the chartjs official documentation.
            Lastly, we can render the chart by providing the graph component
            with corresponding data. <img src="images/graph.png" alt="" />
          </p>
          <div className="case">Datatables, Filtering, and Export</div>
          <p>
            We looked for multiple approaches for rendering our datatables but
            settled on using MUI's data grid.The MUI data grid provided powerful
            functionalities when provided with the required data and
            configuration. By mapping our data into their required formats, we
            can take full advantage for their advanced filtering options and
            exporting options while allowing us to keep the UI clean and
            concise.
          </p>
          <img src="images/table.png" alt="" className="smallimg" />
          <div className="case">Main Tools and Dependencies</div>
          <ul>
            <li>React versoin 17.0.1</li>
            <li>Axios versoin 0.26.1</li>
            <li>Chart.js versoin 3.7.1 and react-chartjs-2 version 4.0.1</li>
            <li>Recoil version 0.6.1</li>
            <li>MUI data grid version 5.6.1</li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Others</div>
        <div className="text">
          <div className="case">Intergration app</div>
          <p>
            The structure of this administrative app is developed similar to the
            dashboard application to simulate data management from NHS services.
            Since the implementation are mostly similar to the dashboard, no
            repetitive explaination will be given.
          </p>
          <div className="case">Scanner app</div>
          <p>
            Similar to the integration app, this is not expected to be further
            developed and improved and is only a POC. This app uses Flutter and
            it's libraries for scanning QR codes and making requests to the
            server.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
