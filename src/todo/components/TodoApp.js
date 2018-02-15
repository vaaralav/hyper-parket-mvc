import mount from '$src/root';
import FilterLinks from './FilterLinks';

export default function renderTodoApp(store) {
  return mount`<h1><a href="/">TODO</a></h1>
    ${FilterLinks}
    <button type="button" onclick="${() =>
      store.addTodo('foo')}">Add Todo</button>
  <pre>${JSON.stringify(store.filteredTodos, null, 2)}</pre>`;
}
