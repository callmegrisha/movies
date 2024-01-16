import { useTheme } from '@emotion/react';
import { Search } from '@mui/icons-material';
import { Box, FormControl, TextField, Theme } from '@mui/material';
import { ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const { app } = useTheme() as Theme;

  return (
    <FormControl variant="standard" sx={{ width: '100%', mb: 4 }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center	', gap: 3.5, width: '100%' }}
      >
        <Search sx={{ fontSize: 32, fill: app.pureWhite }} />
        <TextField
          placeholder="Search for movies or TV series"
          type="search"
          variant="standard"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Box>
    </FormControl>
  );
}
