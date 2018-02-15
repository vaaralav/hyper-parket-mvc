import NotFound from './components/NotFound';

export const getNotFoundHandler = () => () => {
  return NotFound();
};
