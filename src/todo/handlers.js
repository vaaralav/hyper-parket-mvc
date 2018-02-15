import TodoApp from './components/TodoApp';
import { getNotFoundHandler } from '$src/error/handlers';
import { validateFilter } from './utils';
import { Filters } from './constants';

export default store => (ctx, next) => {
  const { filter = Filters.SHOW_ALL } = ctx.params;
  if (validateFilter(filter)) {
    store.setFilter(filter);
    return TodoApp(store);
  }
  getNotFoundHandler(store)(ctx, next);
};
