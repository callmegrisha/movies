import { HttpMethods } from 'types';

interface RequestOptions<T> {
  url: string;
  method: HttpMethods;
  headers: Record<string, string>;
  body?: T;
}

export const createRequest = <T>(
  url: string,
  method: HttpMethods,
  headers: Record<string, string>,
  body?: T
): RequestOptions<T> => ({
  url,
  method,
  headers,
  body,
});
