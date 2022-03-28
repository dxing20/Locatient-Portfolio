import VerticalItem from "./verticalItem.component";
let routes = {
  Home: "/",
  Requirements: "/requirements",
  Research: "/research",
  HCI: "/hci",
  "System Design": "/systemdesign",
  Implementation: "/implementation",
  Testing: "/testing",
  Evaluation: "/evaluation",
  Appendix: "/appendix",
};

function Panel({ doSlider }) {
  return (
    <div className="panel no-render">
      <div className="panel-left"></div>

      <div className="panel-right">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="verticalMenu">
          {Object.keys(routes).map((content) => {
            return (
              <VerticalItem
                key={content}
                content={content}
                addr={routes[content]}
                doSlider={doSlider}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Panel;
