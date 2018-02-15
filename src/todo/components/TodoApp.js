import { hyper } from 'hyperhtml';
import FilterLinks from './FilterLinks';

export default function renderTodoApp(store) {
  return hyper(document.getElementById('todo'))`<h1><a href="/">TODO</a></h1>
    ${FilterLinks()}
  <pre>${JSON.stringify(store.filteredTodos, null, 2)}</pre>`;
}
