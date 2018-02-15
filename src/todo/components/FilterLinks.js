import { hyper } from 'hyperhtml';
import { getFilterLabel } from '../utils';
import { Filters } from '../constants';

export default () => hyper`
<ul>
  ${Object.values(Filters).map(
    filter =>
      `<li>
      <a href="/${filter}">${getFilterLabel(filter)}</a>
    </li>
    `
  )}
</ul>
`;
