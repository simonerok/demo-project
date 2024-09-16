import React from 'react';
import { Game } from '../hooks/useGames';
import PlatformIconList from '../components/PlatformIconList';
import { Card, Image, CardBody, Heading } from '@chakra-ui/react';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image 
        src={game.background_image}
        aspectRatio={"16/9"}
        rounded={'md'}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(pp => pp.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;