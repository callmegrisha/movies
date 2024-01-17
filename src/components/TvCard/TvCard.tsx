import { BookmarkBorder } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'mui-image';
import { createGenresCollection } from '../../utils/createGenresCollection';
import { getFullYearFromString } from '../../utils/getFullYearFromString';
import { useGetAllTvGenresQuery } from '../../services/movies';
import { CircleDivider } from '../../assets/svg/CircleDivider';
import { TvShow } from '../../types/tvShow';

export function TvCard({  id,
  backdrop_path,
  first_air_date,
  genre_ids,
  name}: TvShow) {
	const { app } = useTheme();
  const { data: { genres } = {} } = useGetAllTvGenresQuery(null);
  const genresCollection = createGenresCollection(genres);

  return (
    <Card
      key={id}
      sx={{
        p: 0,
        m: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <CardContent sx={{ p: 0, ':last-child': { p: 0 } }}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            marginBottom: 1,
            overflow: 'hidden',
            height: 174,
          }}
        >
          <Image
            src={'https://image.tmdb.org/t/p/w500/' + backdrop_path}
            fit="cover"
          />
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              p: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              ':hover': { backgroundColor: 'rgba(0, 0, 0, 1)' },
            }}
          >
            <BookmarkBorder sx={{ fontSize: 17, fill: app.pureWhite }} />
          </IconButton>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          divider={<CircleDivider />}
          spacing={1}
        >
          <Typography variant="bodyS">
            {getFullYearFromString(first_air_date)}
          </Typography>
          {genre_ids.map((genreId) => (
            <Typography variant="bodyS" key={genreId}>
              {genresCollection.get(genreId)}
            </Typography>
          ))}
        </Stack>
        <Typography variant="headingXS">{name}</Typography>
      </CardContent>
    </Card>
  );
}
