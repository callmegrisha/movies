import { HttpMethods } from 'types';

interface RequestOptions {
  url: string;
  method: HttpMethods;
  headers: Record<string, string>;
}

export const createRequest = (
  url: string,
  method: HttpMethods,
  headers: Record<string, string>
): RequestOptions => ({
  url,
  method,
  headers,
});
