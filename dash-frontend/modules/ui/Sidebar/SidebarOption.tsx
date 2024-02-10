import { SidebarOptionContainer, SidebarOptionTitle } from "./SidebarOption.styled";

type SidebarOptionsProps = {
  name: string;
  associated_page: undefined;
}

export default function SidebarOption({ name, associated_page}: SidebarOptionsProps) {
  function onClick() {}

  return (
    <SidebarOptionContainer>
      <SidebarOptionTitle>{name}</SidebarOptionTitle>
    </SidebarOptionContainer>
  );
}
