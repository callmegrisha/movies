import { ChangeEvent, useState } from 'react';

interface UseInputReturnType {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput(initialValue: string): UseInputReturnType {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return { value, onChange };
}
