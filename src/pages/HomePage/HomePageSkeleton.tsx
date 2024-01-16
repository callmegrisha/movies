import { Box, Skeleton, Stack } from '@mui/material';

export const HomePageSkeleton = () => (
  <Box>
    <Skeleton
      sx={{ minHeight: 44, mb: 3 }}
      animation="wave"
      variant="rounded"
    />
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        rowGap: 4,
        columnGap: 5,
      }}
    >
      {[...Array(20)].map((_, index) => (
        <Stack spacing={2} key={index}>
          <Skeleton
            sx={{ maxWidth: 400, minHeight: 174 }}
            animation="wave"
            variant="rounded"
          />
          <Skeleton
            sx={{ maxWidth: 137, minHeight: 16 }}
            animation="wave"
            variant="rounded"
          />
          <Skeleton
            sx={{ maxWidth: 130, minHeight: 23 }}
            animation="wave"
            variant="rounded"
          />
        </Stack>
      ))}
    </Box>
  </Box>
);
