import ButtonSubNav from "../../components/subNavbar/ButtonSubNav";
import MobileSubNavbar from "../../components/subNavbar/MobileSubNavbar";

function MarsSubNav() {
  const color = "#d14c32";
  return (
    <nav>
      <ButtonSubNav color={color} />
      <MobileSubNavbar color={color} />
    </nav>
  );
}

export default MarsSubNav;
