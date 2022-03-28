import React from "react";

const Requirements = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Requirements</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Project Background</div>
        <div className="text">
          <p>
            With the number of patients in large hospitals, organizing patients,
            planning schedules, and efficiently locating them is not a trivial
            task. Staff often has a tight schedule, making the time used looking
            for patients costly and fruitless. In addition, keeping a record of
            these activities is tricky, often involving monotonous and laborious
            tasks such as manually recording on paper forms. For our specific
            case, excel was used in the NHS hospital for tracking timestamps for
            pre and post opertation activities. However, the timestamps is often
            recorded only after a significant period of time because of the
            inconvinience. This causes inaccurrate timestamps clustered around
            the full minute marks. For the most part, the whole system became an
            annoyance for the staff. Locatient attempts to reduce the hassle of
            this process, making locating patients and recording the activities
            a simple task of checking on an app.
          </p>

          <div className="case">Problems</div>
          <ul>
            <li>Inconvinience of manually entering data into forms.</li>
            <li>
              Staffs have to manually search for patients through different
              rooms, wasting a lot of time.
            </li>
            <li>Records are not realtime and is inefficient to access.</li>
            <li>Lack of dedicated software for organizing the data.</li>
          </ul>
          <div className="case secondary">Locatient Solution</div>
          <ul>
            <li>Automated activity logging process with minimal effort.</li>
            <li>
              Efficient, intuitive and secure dashboard for accessing logging
              data realtime.
            </li>
            <li>Easy integration and data sharing with existing system.</li>
            <li>High accessibilty in multiple platforms.</li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">User Interviews</div>
        <div className="text">
          <p>
            Following the first introduction meeting, interviews are conducted
            which we used to capture requirements. Most of the interview
            questions are predetermiend but some are added to allow better
            understanding. A subset of conversation is listed below.
          </p>

          <ol className="qna">
            <li>
              <div className="QA">
                Q: What are the main expected features for this software?
              </div>
              <br />
              <div className="QA">
                A: This software should track patients location in the hospital
                and log timestamps.
              </div>
            </li>
            <li>
              <div className="QA">
                Q: Why do you want to track patients in a system?
              </div>
              <br />
              <div className="QA">
                A:For example, finding patients enables us to give better care
                to them before and after their operations. Having this system
                would make this process more efficient and would save a lot of
                time.
              </div>
            </li>
            <li>
              <div className="QA">
                Q: What is the most needed improvement to the current system?
              </div>
              <br />
              <div className="QA">
                A: The current system is difficult to use because it is tedious
                for doctors to manually enter all the data into the cells. The
                system for accessing the data with-in the database is also
                inefficient
              </div>
            </li>
            <li>
              <div className="QA">
                Q: Would a online platform work with the available hardwares in
                the hospital?
              </div>
              <br />
              <div className="QA">
                A: A online platform which works on all system is ideal.
              </div>
            </li>
          </ol>

          <div className="case">
            Information Governance, ICO, Ethical Clearance
          </div>

          <p>
            After the first interview, some research was done on the possible
            approaches. However, we encoutered two major issues. First, because
            of the software's need to gain access to personally Identifiable
            information (PID) when deployed, our software must pass&nbsp; NHS
            information governance{" "}
            <a href="https://www.england.nhs.uk/ig/about/">(ig)</a>
            ,&nbsp; Information Commissioner's office{" "}
            <a href="https://ico.org.uk/">(ICO)</a>, and&nbsp; Data protection
            impact assessments{" "}
            <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-impact-assessments/">
              (DPIA)
            </a>
            . Secondly, common indoor positioning systems (IPS) require ethical
            clearence which takes time. We were instructed that this was not
            allowed for this project. Thus, strategies like camera tracking are
            ruled out. A follow-up meeting was scheduled with our client to
            disscuse the deployment requirements of our app.
          </p>

          <ol className="qna">
            <li>
              <div className="QA">
                Q: Is this application going to be a proof of concept or an
                actually deployed application?
              </div>
              <br />
              <div className="QA">
                A: This software will not be expected to be deployed because of
                IG and ICO related reasons; therefore, it will remain as a proof
                of concept. However, the application features should be designed
                to meet deployment requirements.
              </div>
            </li>
            <li>
              <div className="QA">
                Q: Would you prefer us using any of the tracking methods which
                requires ethical clearance? If not, would you expect the
                application to give precise locations?
              </div>
              <br />
              <div className="QA">
                A: I have no preference in the strategies. The app don't need to
                report the exact locations, reporting the last occurence of the
                patient is sufficient.
              </div>
            </li>
          </ol>

          <p>
            With these answers, we can design our app without worrying about IG
            and ICO. However, we will still use a method which does not require
            ethical clearance.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Client Requriements</div>
        <div className="text">
          <p>
            With the information we gathered from the clients, we listed down
            the three primary requirements of our IPS.
          </p>
          <div className="case">Requirement List</div>
          <ul>
            <li>Reliable indoor positioning system.</li>
            <li>IPS should be reliable and minimize human tasks.</li>
            <li>A backend which would integrate with existing nhs system.</li>
            <li>
              Backend should be able to sync with changes like patients leaving
              and joining, replacing scanners, and etc.
            </li>
            <li>
              A dashboard for visualizing patient activities and location
              activities.
            </li>
            <li>
              Dashboard should be intuitive and be able to filter the data fast
              and efficiently.
            </li>
          </ul>
        </div>
      </div>

      <div className="content-block">
        <div className="subtitle">Goals</div>
        <div className="text">
          <p>
            The goals of Locatient is to make a service which can provide staffs
            with accessible and realtime data, including helping staffs to
            locate patients without wasting exesive time and efforts. This will
            allow patients to gain help faster and allow care to be more
            responsive in a large hospital. The dashboard and api will also help
            keep the data organized, preventing the current inconviniences
            caused by massive tables of data.
          </p>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Personas</div>
        <div className="text">
          <p>
            After analyzing the requirements, we wanted to get a more detailed
            understanding of our target users, identifying their needs and
            concerns. To do so, we created the following two personas of Jason
            and Ellie.
          </p>
          <img src="images/ellie.png" alt="Ellie Persona" />
          <img src="images/Jason.png" alt="Jason Persona" />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Use Cases</div>
        <div className="text">
          <p>
            After we gained understanding of our users and conducted the
            nessasary researches to conclude our approach with qrcode, we drawn
            the use case diagram to show how patients and staffs will interact
            with our system. This diagram contains all the must have features
            which are core functionalities of our application. Additional
            features like analytics are not included in this version.
          </p>
          <div className="case">Use Case Diagram</div>
          <img src="images/UCD.png" alt="Use Case Diagram Picture" />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">MoSCoW List</div>
        <div className="text">
          <p>
            Lastly, we elaborated the requirements into a MoSCoW list which can
            be referenced during designing and implementations. It will also
            gave us a basis of prioritizing tasks.
          </p>
          <img src="images/moscow1.png" alt="" />
          <img src="images/moscow2.png" alt="" />
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default Requirements;
