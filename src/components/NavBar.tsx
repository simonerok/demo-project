import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" marginInline={6}>
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <h1>KEA Games</h1>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;