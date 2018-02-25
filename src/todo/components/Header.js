import { wire } from 'hyperhtml';

const getHandleSubmit = store =>
  function handleSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.elements[0];
    const todoText = input.value;
    if (todoText) {
      store.addTodo(todoText.trim());
      input.value = '';
    }
  };

export default store => {
  return wire(store, ':header')`
<header class="header">
  <h1>todos</h1>
  <form onsubmit=${getHandleSubmit(store)}>
    <input class="new-todo" placeholder="What needs to be done?" autofocus/>
  </form>
</header>
`;
};
