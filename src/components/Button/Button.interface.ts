import { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}