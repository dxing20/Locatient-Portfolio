import Brand from "./brand.component";
import NavItems from "./navItems.component";
import NavMenu from "./navMenu.component";

function Nav({ doSlider }) {
  return (
    <header>
      <Brand doSlider={doSlider} /> <NavItems doSlider={doSlider} />
      <NavMenu />
    </header>
  );
}

export default Nav;
