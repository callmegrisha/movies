import { ChangeEvent } from 'react';

export interface SearchBarProps {
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}