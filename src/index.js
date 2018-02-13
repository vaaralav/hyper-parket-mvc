// import 'todomvc-app-css/index.css';
import { hyper } from 'hyperhtml/esm';
import hyperApp from 'hyperhtml-app';
import TodoStore, { SHOW_ALL } from './model/todo';
import { devtools } from 'parket';

const localStorageKey = 'hyper-parket-mvc';
const initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {
      todos: [
        {
          text: 'learn Mobx',
          completed: false,
          id: 0,
          __p_model: 'Todo'
        },
        {
          text: 'learn MST',
          completed: false,
          id: 1,
          __p_model: 'Todo'
        }
      ]
    };

const store = TodoStore(initialState);

const app = hyperApp();

const Link = ({ to, label }) => {
  const link = hyper`<a href="${to}">${label}</a>`;
  link.addEventListener('click', {
    handleEvent: function(event) {
      event.preventDefault();
      app.navigate(to);
    }
  });
  return link;
};

app.use(['/', '/:filter'], function serveTodos(ctx) {
  store.setFilter(ctx.params.filter || SHOW_ALL);
  hyper(document.getElementById('todo'))`<h1>TODO</h1>
  <div>
    ${Link({ to: '/', label: 'all' })}
    ${Link({ to: '/show_completed', label: 'completed' })}
    ${Link({ to: '/show_active', label: 'active' })}
</div><pre>${JSON.stringify(store.filteredTodos, null, 2)}</pre>`;
});

//
app.navigate(window.location.pathname);
