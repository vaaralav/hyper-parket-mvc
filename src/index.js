// import 'todomvc-app-css/index.css';
import { hyper } from 'hyperhtml/esm';
import hyperApp from 'hyperhtml-app';
import TodoStore, { SHOW_ALL } from './model/todo';
import devtools from 'parket/devtools';

const localStorageKey = 'hyper-parket-mvc';
const initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {
      todos: [
        {
          text: 'learn Mobx',
          completed: false,
          id: 0,
          __p_model: 'Todo',
        },
        {
          text: 'learn MST',
          completed: false,
          id: 1,
          __p_model: 'Todo',
        },
      ],
    };

const store = TodoStore(initialState);

devtools(store);

store.onSnapshot(snapshot => {
  localStorage.setItem(localStorageKey, JSON.stringify(snapshot));
});

const app = hyperApp();

const Links = hyper`
<div>
  <ul>
  <li><a href="/">all</a></li>
  <li><a href="/show_completed">completed</a></li>
  <li><a href="/show_active">active</a></li>
  </ul>
</div>
`;

function serveTodos(ctx) {
  store.setFilter(ctx.params.filter || SHOW_ALL);
  hyper(document.getElementById('todo'))`<h1>TODO</h1>
    ${Links}
  <pre>${JSON.stringify(store.filteredTodos, null, 2)}</pre>`;
}
app.use(['/', '/:filter'], serveTodos);

app.navigate(window.location.pathname);
