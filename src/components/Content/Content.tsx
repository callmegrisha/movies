import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <Box>{children}</Box>;
}
