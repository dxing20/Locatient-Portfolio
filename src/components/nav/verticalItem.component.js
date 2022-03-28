import { useNavigate } from "react-router-dom";
import $ from "jquery";

let toggleMenu = function (dir = false) {
  let navMenu = $(".navMenu .toggle");
  navMenu.toggleClass("close");
  $("body").toggleClass("slided");
  $(".page").toggleClass("slided");
  if (!dir) {
    $(".panel").toggleClass("slided");
    $(".panel").toggleClass("no-render");
  } else {
    $(".panel").toggleClass("no-render");
    setTimeout(() => $(".panel").toggleClass("slided"), 200);
  }
};

function VerticalItem({ content, addr, doSlider }) {
  const navigate = useNavigate();
  return (
    <div
      className="verticalItem"
      onClick={() => {
        toggleMenu(true);
        doSlider();
        setTimeout(() => {
          navigate(addr);
          window.scrollTo(0, 0);
        }, 300);
      }}
    >
      <p>{content}</p> <div></div>
    </div>
  );
}

export default VerticalItem;
