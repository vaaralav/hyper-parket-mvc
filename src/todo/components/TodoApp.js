import html from '$src/root';
import createHeader from './Header';
import createMain from './Main';
import createFooter from './Footer';

export default store => {
  const Header = createHeader(store);
  const Main = createMain(store);
  const Footer = createFooter(store);

  return html`
${Header}
${Main}
${Footer}
`;
};
