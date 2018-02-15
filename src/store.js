import devtools from 'parket/devtools';
import TodoStore from '$src/todo/model';

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

export default function createStore() {
  const store = TodoStore(initialState);

  devtools(store);

  store.onSnapshot(snapshot => {
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot));
  });
  if (console && console.log) {
    // eslint-disable no-console

    store.onAction(console.log.bind(console, 'action'));
    // store.onPatch(console.log.bind(console, 'patch'));
    store.onSnapshot(console.log.bind(console, 'snapshot'));

    // eslint-enable no-console
  }

  return store;
}
