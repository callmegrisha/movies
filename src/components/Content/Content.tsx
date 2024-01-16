import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <Box>{children}</Box>;
}
