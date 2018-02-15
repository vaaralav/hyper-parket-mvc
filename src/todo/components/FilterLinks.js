import { hyper } from 'hyperhtml';
import { getFilterLabel } from '../utils';
import { Filters } from '../constants';

export default hyper`
<ul>
  ${Object.values(Filters).map(
    filter =>
      `<li>
      <a href="/${filter}">${getFilterLabel(filter)}</a>
    </li>
    `
  )}
  <li><a href="/404">Not Found</a></li>
</ul>
`;
