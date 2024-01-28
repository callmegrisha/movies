import { Box, Typography } from '@mui/material';
import { TvShow } from 'types/tvShow';
import { TvCard } from '../TvCard';

interface TvListProps {
  tvs: TvShow[];
}

export function TvList({ tvs }: TvListProps) {
  return (
    <>
      {tvs && tvs.length > 0 ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            rowGap: 4,
            columnGap: 5,
          }}
        >
          {tvs?.map((tv: TvShow) => <TvCard key={tv.id} {...tv} />)}
        </Box>
      ) : (
        <Typography variant="headingL" sx={{ display: 'block', mb: 4 }}>
          Movies not found
        </Typography>
      )}
    </>
  );
}
