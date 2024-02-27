import ButtonSubNav from "../../components/subNavbar/ButtonSubNav";
import MobileSubNavbar from "../../components/subNavbar/MobileSubNavbar";

function MercurySubNav() {
  const color = "#4193bb";
  return (
    <nav>
      <ButtonSubNav color={color} />
      <MobileSubNavbar color={color} />
    </nav>
  );
}

export default MercurySubNav;
