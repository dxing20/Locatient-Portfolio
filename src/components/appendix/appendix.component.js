import React from "react";

const Appendix = () => {
  return (
    <div>
      <div className="heading-block">
        <div className="title">Appendix</div>
        <div className="border"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">User Manual</div>
        <div className="text">
          <a href="files/UserManual.pdf">User Manual PDF</a>
        </div>

        <div className="subtitle">Deployment Manual</div>
        <div className="text">
          <a href="files/deployment.pdf">Deployment Manual PDF</a>
        </div>

        <div className="subtitle">GDPR and Privacy of Data</div>
        <div className="text">
          <a href="files/GDPR and Privacy of Data.pdf">
            GDPR and Privacy of Data PDF
          </a>
        </div>

        <div className="subtitle">EULA</div>
        <div className="text">
          <a href="files/EULA-agreement.pdf">EULA PDF</a>
        </div>

        <div className="subtitle">Licensing</div>
        <div className="text">
          <div className="case">Licensing Table</div>
          <img src="images/licensing.png" alt="" />
          <br />
          <br />
          <div className="subtitle">Licensing Chart</div>
          <img src="images/licensing-chart.png" alt="" />
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default Appendix;
