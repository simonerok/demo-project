import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaAppStoreIos,
  FaGlobe, 
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';

interface Platform {
  id: number;
  name: string;
}

interface Props {
  platforms: Platform[];
}

const platformIcons: { [key: string]: JSX.Element } = {
  Xbox: <FaXbox size="24px" />,
  PlayStation: <FaPlaystation size="24px" />,
  PC: <FaWindows size="24px" />,
  macOS: <FaApple size="24px" />,
  'Apple Macintosh': <FaApple size="24px" />,
  Linux: <FaLinux size="24px" />,
  Android: <FaAndroid size="24px" />,
  Nintendo: <SiNintendo size="24px" />,
  iOS: <FaAppStoreIos size="24px" />,
  Web: <FaGlobe size="24px" />,  
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <Flex wrap="wrap" gap={2} mt={2}>
      {platforms.map((platform) => (
        <Flex key={platform.id} align="center" justify="center">
          {platformIcons[platform.name] || <Text>{platform.name}</Text>}
        </Flex>
      ))}
    </Flex>
  );
};

export default PlatformIconList;
