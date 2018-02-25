import { wire } from 'hyperhtml';

function doubleClickToEdit() {
  const li = this.closest('li');
  li.classList.add('editing');
  li.querySelector('.edit').focus();
}

const getOnSubmit = todo =>
  function onSave(ev) {
    ev.preventDefault();
    const input = ev.target.elements[0];
    const value = input.value.trim();
    if (value) {
      todo.edit(value);
      const li = this.closest('li');
      li.classList.remove('editing');
    } else {
      todo.remove();
    }
  };

function onBlur() {
  const form = this.closest('form');
  form.submit();
}

function toggleAll(store) {
  return function() {
    store.completeAll();
  };
}

export default store => wire(store, ':main')`
<section class="main" style=${store.todos.length === 0 ? 'display: none;' : ''}>
<input id="toggle-all" name="toggle-all" class="toggle-all" type="checkbox" onchange=${toggleAll(
  store
)} />
<label for="toggle-all">Mark all as complete</label>
<ul class="todo-list">
${store.filteredTodos.map(
  todo => wire(todo)`
  <li class=${todo.completed ? 'completed' : ''}>
    <div class="view">
        <input class="toggle" type="checkbox" checked=${
          todo.completed
        } onchange=${todo.toggle} />
        <label onDblClick=${doubleClickToEdit}>
          ${todo.text}
        </label>
      <button type="button" class="destroy" onclick=${todo.remove}></button>
    </div>
    <form onsubmit=${getOnSubmit(todo)}>
      <input class="edit" value=${todo.text} onblur=${onBlur}>
    </form>
  </li>
  `
)}
</ul>
</section>
`;
