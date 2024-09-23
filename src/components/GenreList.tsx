import { Heading, HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(genre.image_background)} />
              <Button
                onClick={() => onSelectGenre(genre)}
                sx={{
                  _hover: {
                    textDecoration: "underline",
                  },
                  _active: {
                    bg: "gray.700",
                  },
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
