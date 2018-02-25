import { wire } from 'hyperhtml';
import { store } from '$src/index';
import { Filters } from '../constants';
import { getFilterLabel } from '../utils';

const filters = wire()`
<ul class="filters">
  ${Object.values(Filters).map(
    filter => wire()`<li><a href="${filter}">${getFilterLabel(filter)}</a></li>`
  )}
</ul>
`;

export default () => wire(store.todos)`
<footer class="footer" style=${
  store.todos.length === 0 ? 'display: none;' : ''
}>
  ${wire(store.todos)`
  <span class="todo-count">
    <strong>${store.todos.length}</strong> items left
  </span>`}
  ${filters}
</footer>
`;
