import { useNavigate } from "react-router-dom";

function NavItem({ content, addr, doSlider }) {
  const navigate = useNavigate();
  return (
    <div
      className="navItem"
      onClick={() => {
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

export default NavItem;
