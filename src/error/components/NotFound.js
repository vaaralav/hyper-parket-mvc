import mount from '$src/root';
import FilterLinks from '$src/todo/components/FilterLinks';

export default () =>
  mount`<h1>Not Found</h1><h2>Were you looking for these todos maybe?</h2>${FilterLinks()}`;
