import { wire } from 'hyperhtml';
import { store } from '$src/index';

function handleSubmit(ev) {
  ev.preventDefault();
  console.log(ev.target.elements);
  const input = ev.target.elements[0];
  const todoText = input.value;
  if (todoText) {
    store.addTodo(todoText.trim());
    input.value = '';
  }
}

export default () => {
  return wire()`
<header class="header">
  <h1>todos</h1>
  <form onsubmit=${handleSubmit}>
    <input class="new-todo" placeholder="What needs to be done?" autofocus/>
  </form>
</header>
`;
};
