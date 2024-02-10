import { OptionsContainer, SidebarContainer, SidebarTitle } from "./Sidebar.styled";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle>My Dashboard</SidebarTitle>
      <OptionsContainer>
        <SidebarOption name={'Home'} />
      </OptionsContainer>
    </SidebarContainer>
  );
}
