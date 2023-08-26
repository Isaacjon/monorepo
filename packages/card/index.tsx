import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useStore } from "store";

export const MovieCard: React.FunctionComponent<{
  title: string;
  image: string;
  showAddButton?: boolean;
  showDeleteButton?: boolean;
}> = ({ title, image, showAddButton, showDeleteButton }) => {
  const theme = useMantineTheme();
  const { addMovie, deleteMovie, movies } = useStore();

  const isAdded = movies.some(mov=> mov.title === title);

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={image} height={320} alt={title} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{title}</Text>
      </Group>

      {showAddButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => addMovie({ title, image })}
          disabled={isAdded}
          sx={{
            '&:disabled':{
              color:'#ccc !important'
            }
          }}
        >
          {isAdded ? "Added √" : "Add To List"}
        </Button>
      )}
      {showDeleteButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => deleteMovie({ title, image })}
        >
          Delete From List
        </Button>
      )}
    </Card>
  );
};
