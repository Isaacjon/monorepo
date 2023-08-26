import React from "react";
import { Box, Title, Grid } from "@mantine/core";

import { useStore } from "store";
import { MovieCard } from "card";

export const Playlist = () => {
  const { movies } = useStore();
  return (
    <>
      <div style={{ display: "flex" }}>
          <Title>Viewing List</Title>
      </div>
      <Grid
        mt={20}
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} showDeleteButton />
        ))}
      </Grid>
    </>
  );
};
