// import 'todomvc-app-css/index.css';
import hyperApp from 'hyperhtml-app';
import createStore from '$src/store';
import getTodoHandler from '$src/todo/handlers';
import { getNotFoundHandler } from '$src/error/handlers';

const app = hyperApp();
const store = createStore();

app
  .use(['/', '/:filter'], getTodoHandler(store))
  .use('*', getNotFoundHandler());

// Start the app by kicking off the current location
app.navigate(
  window.location.pathname + window.location.search + window.location.hash
);
