import { wire } from 'hyperhtml';
import { Filters } from '../constants';
import { getFilterLabel } from '../utils';

const filters = wire(Filters)`
<ul class="filters">
  ${Object.values(Filters).map(
    filter => wire()`<li><a href="${filter}">${getFilterLabel(filter)}</a></li>`
  )}
</ul>
`;

export default store => wire(store, ':footer')`
<footer class="footer" style=${
  store.todos.length === 0 ? 'display: none;' : ''
}>
  <span class="todo-count">
    <strong>${store.todos.length}</strong> item${
  store.todos.length === 1 ? '' : 's'
} left
  </span>
  ${filters}
</footer>
`;
