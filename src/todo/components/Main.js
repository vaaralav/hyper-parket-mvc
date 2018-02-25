import { wire } from 'hyperhtml';
import { store } from '$src/index';

export default () => wire(store.todos)`
<section class="main" style=${store.todos.length === 0 ? 'display: none;' : ''}>
<input id="toggle-all" name="toggle-all" class="toggle-all" type="checkbox"/>
<label for="toggle-all">Mark all as complete</label>
<ul class="todo-list">
${store.filteredTodos.map(
  todo => wire(todo)`
  <li class=${todo.completed ? 'completed' : ''}>
    <div class="view">
      <label>
        <input class="toggle" type="checkbox" checked=${todo.completed}/>
        ${todo.text}
      </label>
      <button type="button" class="destroy"></button>
    </div>
    <input class="edit" value=${todo.text}>
  </li>
  `
)}
</ul>
</section>
`;
