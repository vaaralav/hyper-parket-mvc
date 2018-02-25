import { wire } from 'hyperhtml';
import html from '$src/root';
import FilterLinks from './FilterLinks';
import createHeader from './Header';
import createMain from './Main';
import createFooter from './Footer';

export default () => {
  const Header = createHeader();
  const Main = createMain();
  const Footer = createFooter();

  return html`
${Header}
${Main}
${Footer}
`;
};
