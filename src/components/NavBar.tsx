import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import logo from "../assets/logo.webp"; // I'mport or define the 'logo' variable
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" ></Image>
      <Text>NavBar</Text>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;