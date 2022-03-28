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
          <div className="case">Usability</div>
          <p>
            A complex dashboard with overabundance of information is the last
            thing staffs need in a hurry. To avoid this, we will focus on
            learnability, efficiency, Memorability, and Satisfaction.
            <br />
            <br />
            Our dashboard design theme will be based on{" "}
            <a href="https://material.io/">Material Design</a>, using edges,
            shadows, and paper-like UI component to mimic real-world objects.
            Using material design principles, we aim to increase user
            satisfaction by demonstrating a high quality and eye pleasing user
            interface. It would also make things more familiar for users as
            material ui is also used by chrome, android, and many other
            applications.
            <br />
            <br />
            For our dashboard to be learnable and efficient, the data needs to
            be organized and customizable. Filtering options should allow
            finding singular and sets of data. Data should be displayed in an
            organized and common format like data tables with the options to
            reduce columns. Data should be able to be displayed under all tablet
            and computer resolutions for further accessibility. We also
            accommodate mobile devices; However, we won't recommend it because
            of the limited space.
            <br />
            <br />
            Lastly, we aim to reduce interaction cost by making all the features
            easily navigatable. Each interaction must carry the user closer to
            their goals and user should find their desired data in reasonable
            clicks. The most memorable designs are often simplest to navigate.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Sketches</div>
        <div className="text">
          <p>
            After analyzing the UI requirements and functional requirements, we
            drew two sets of sketches for comparison. This helped us choose
            between the basic layouts of navigation and data organization. (Only
            a subset of sketch drawings are shown for better view)
          </p>
          <div className="case">Sketch 1</div>
          <img
            className="smallimg"
            src="images/s1_2.png"
            alt="<Sketch 1 Picture 1>"
          />
          <img
            className="smallimg"
            src="images/s1_3.png"
            alt="<Sketch 1 Picture 2>"
          />
          <p>
            Sketch 1 displayed data in a large organized table. With more
            complex data in development, the column will need to become
            collapsable. The search function is a place holder for more advanced
            and intuitive filtering in actual developoment.
          </p>
          <div className="case">Sketch 2</div>
          <img
            className="smallimg"
            src="images/s2_1.png"
            alt="<Sketch 2 Picture 1>"
          />
          <img
            className="smallimg"
            src="images/s2_2.png"
            alt="<Sketch 2 Picture 2>"
          />
          <p>
            Sketch 2 displayed data in a smaller but more viewable table. A
            sub-table opens up when a row of the main table gets clicked on. The
            sketch 2 also proposes to add some sort of map into the history
            page.
          </p>
          <div className="case">Comparison</div>
          <p>
            Sketch 1 is more intuitive and simple. Data are clearly presented
            and requries less interaction from the user. Sketch 2 takes a more
            complex approach to UI which the user may find useful. Based on the
            UI requirement, sketch 1 was our choice. It provided learnability,
            clearity, and memorability which exceeds the sketch 2's possible
            benifits. However, sketch 1 is also not perfect and we will be
            enhancing them as we enter prototyping and development stages.
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
            <li>
              World Leaders in Research-Based User Experience. (n.d.). How to
              measure learnability of a user interface. Nielsen Norman Group.
              Retrieved March 28, 2022, from
              https://www.nngroup.com/articles/measure-learnability/#:~:text=Learnability%20considers%20how%20easy%20it,become%20efficient%20at%20that%20task.
            </li>
            <li>
              World Leaders in Research-Based User Experience. (n.d.). 10
              usability heuristics for user interface design. Nielsen Norman
              Group. Retrieved March 28, 2022, from
              https://www.nngroup.com/articles/ten-usability-heuristics/
            </li>
          </ol>
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default HCI;
