import TodoApp from './components/TodoApp';
import { getNotFoundHandler } from '$src/error/handlers';
import { validateFilter } from './utils';
import { Filters } from './constants';

const renderRoute = (store, fn) => {
  fn(store.getSnapshot());
  const unsubscribe = store.onSnapshot(fn);
  window.addEventListener('popstate', unsubscribe);
  window.addEventListener('pushstate', unsubscribe);
};

export default store => (ctx, next) => {
  const { filter = Filters.SHOW_ALL } = ctx.params;
  if (validateFilter(filter)) {
    store.setFilter(filter);
    return renderRoute(store, () => TodoApp(store));
  }
  getNotFoundHandler(store)(ctx, next);
};
