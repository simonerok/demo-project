import React from 'react';
import { Game } from '../hooks/useGames';
import PlatformIconList from '../components/PlatformIconList';
import CriticScore from './CriticScore';
import { Card, Image, CardBody, Heading, Flex } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const croppedImageUrl = getCroppedImageUrl(game.background_image);
  /* console.log('Original URL:', game.background_image);
  console.log('Cropped URL:', croppedImageUrl); */

  return (
    <Card>
      <Image 
        src={croppedImageUrl}
        aspectRatio={"16/9"}
        rounded={'md'}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Flex justify="space-between" align="center" mt={2}>
          <PlatformIconList platforms={game.parent_platforms.map(pp => pp.platform)} />
          <CriticScore score={game.metacritic} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;