import React from "react";

const HCI = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">HCI</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Design Principles</div>
        <div className="text">
          <div className="case">Dashboard</div>
          <p>
            Our UI design will strive for the simpliest ways of showing data,
            avoiding custering of text, complex stacking of search results, and
            difficult to access functionalities. A complex dashboard with
            overabundance of information is the last thing staffs need in a
            hurry.
            <br />
            <br />
            Our dashboard design theme will be based on{" "}
            <a href="https://material.io/">Material Design</a>, using edges,
            shadows, and paper-like UI component to mimic real-world objects.
            This makes navigation of UI familiar and intuitive for users. This
            should also help users of our application to learn our application
            more efficiently.
            <br />
            <br />
            Our data display also aims to be customizable, accessible, and
            organized. Filtering options should allow finding singular and sets
            of data. Data should be displayed in an organized and common format
            like data tables with the options to reduce columns. Data should be
            able to be displayed under all tablet and computer resolutions.
            <br />
            <br />
            Lastly, we aim to put all the data with-in two clicks from the main
            dashboard. This should make navigation simple and efficient to use.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Sketches</div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iures?
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Prototype</div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
        </div>
      </div>

      <div className="content-block">
        <div className="subtitle">Summary</div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem culpa voluptates eveniet veritatis aspernatur repellat
            exercitationem soluta, corporis numquam labore iusto, delectus
            corrupti expedita error accusantium assumenda, aut iure?
          </p>
          <div className="case">References</div>
          <ol>
            <li>
              What is material design? The Interaction Design Foundation.
              (n.d.). Retrieved March 28, 2022, from
              https://www.interaction-design.org/literature/topics/material-design#:~:text=Material%20Design%20is%20an%20Android,immersive%2C%20platform%2Dconsistent%20GUIs.{" "}
            </li>
          </ol>
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default HCI;
