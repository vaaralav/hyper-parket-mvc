import { hyper } from 'hyperhtml';
import FilterLinks from '$src/todo/components/FilterLinks';

export default () =>
  hyper(
    document.getElementById('todo')
  )`<h1>Not Found</h1><h2>Were you looking for these todos maybe?</h2>${FilterLinks()}`;
