import ButtonSubNav from "../../components/subNavbar/ButtonSubNav";
import MobileSubNavbar from "../../components/subNavbar/MobileSubNavbar";

function EarthSubNav() {
  const color = "#2d68f0";
  return (
    <nav>
      <ButtonSubNav color={color} />
      <MobileSubNavbar color={color} />
    </nav>
  );
}

export default EarthSubNav;
