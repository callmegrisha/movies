import { Genre } from 'types';

export const createGenresCollection = (genres: Genre[]) => {
  const collection = new Map();

  if (genres?.length > 0) {
    for (const { id, name } of genres) {
      collection.set(id, name);
    }
  }

  return collection;
};
