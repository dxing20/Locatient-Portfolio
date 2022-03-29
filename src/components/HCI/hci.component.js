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
          <div className="case">Wireframe 1</div>
          <p>
            Based on the sketch, we made the first version of our interactive
            wireframes on figma. We followed most of the layouts on sketch 1 but
            made some minor adjustments. The following is the picture of the
            login and data display. For reason disscussed below, this was not
            our final wireframe.
          </p>
          <img className="smallimg" src="images/wf1_2.png" alt="" />
          <img className="smallimg" src="images/wf1_1.png" alt="" />
          <p>
            There wasn't any significant problem with this design; However, we
            felt it was not good enough. Firstly, it would not be very
            extendible with new features if another group were to carry on with
            this project. As a POC, we want our app to be a good foundation for
            future work. Secondly, the UI design does not demonstrate the
            material UI theme we planned for the actual UI frontend. During
            simulated user testing, we noted that the design is not
            particularily eye pleasing. Lastly, we wanted to include at least
            some analytics in the "could have" sections of the MoSCoW list, and
            this, as a template to work upon, does not seem ideal.
          </p>
          <div className="case">Wireframe 2</div>
          <p>
            Learning the lesson from Wireframe 1, we switched up the tools to
            adobe XD and designed with many additional features in mind. The
            following is created using the adobe material UI pack.
          </p>
          <img className="smallimg" src="images/wf2_1.png" alt="" />
          <img className="smallimg" src="images/wf2_2.png" alt="" />
          <p>
            Although the basic functionalities are the same, we thought that
            this version was a better template to begin development with. It had
            a more intuitive and navigatable layout. Tables and controls seem to
            be much more organized. With the card based layout, It also has a
            lot more room we can extend features into.
          </p>
        </div>
      </div>

      <div className="content-block">
        <div className="subtitle">Highlights</div>
        <div className="text">
          <p>
            With the decision in HCI, we created a solid foundation to build up
            a our application. Following are pictures from the home page which
            we think demonstrates the manifestation perfectly.
          </p>
          <div className="case">Material Design</div>
          <img className="smallimg" src="images/fash.png" alt="" />
          <div className="case">Additional Analytics</div>
          <img className="smallimg" src="images/ana.png" alt="" />
          <div className="case">Intuitive Components</div>
          <img className="smallimg" src="images/login.png" alt="" />
          <div className="case">Clear & Powerful Table</div>
          <img className="smallimg" src="images/table.png" alt="" />
          <div className="case">Responsive Design</div>
          <img className="smallimg" src="images/respon.png" alt="" />
        </div>
      </div>

      <div className="content-block">
        <div className="subtitle">Additional Information</div>
        <div className="text">
          <div className="case">NHS Server Integration Dashboard</div>
          <p>
            The mock application for api syncing interaction/admin dashboard was
            not designed specifically for user usage since it was created due to
            limitations of integration with any existing NHS servers. It
            followed the single rule of simplicity while allowing it to simulate
            the operations the server would take to make the same syncing api
            calls.
          </p>
          <div className="case">Scanning App</div>
          <p>
            The scanning app was created due to limitation in manufacturing pcb
            and custom devices in this project. It was never intened to have a
            user interface during deployment and the poc we created for it only
            needed to scan and make a request; Therefore, it would not make
            sense for it to be included in HCI.
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
            <li>
              How to make a website more engaging in 15 easy steps. WebFX.
              (2022, February 22). Retrieved March 29, 2022, from
              https://www.webfx.com/web-design/learn/how-to-make-website-more-engaging/{" "}
            </li>
            <li>
              Veeraraghavan, D. (2020, July 27). Let's design data tables.
              Medium. Retrieved March 29, 2022, from
              https://uxdesign.cc/lets-design-data-tables-bf065a60e588{" "}
            </li>
          </ol>
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default HCI;
