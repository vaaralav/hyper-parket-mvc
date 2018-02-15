import { Filters } from './constants';

export const getFilterLabel = filter =>
  filter
    .split('_')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');

export const validateFilter = filter => {
  for (const key in Filters) {
    if (filter === Filters[key]) {
      return true;
    }
  }
  return false;
};
