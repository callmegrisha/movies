import { Box, Typography } from '@mui/material';
import { Movie } from '../../types';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[] | undefined;
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <>
      {movies && movies?.length > 0 ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: 4,
            columnGap: 5,
          }}
        >
          {movies?.map((movie: Movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Box>
      ) : (
        <Typography variant="headingL" sx={{ display: 'block', mb: 4 }}>
          Movies not found
        </Typography>
      )}
    </>
  );
}
