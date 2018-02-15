import NotFound from './components/NotFound';

export const getNotFoundHandler = () => (ctx, next) => {
  return NotFound();
};
