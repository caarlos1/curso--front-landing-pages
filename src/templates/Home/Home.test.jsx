import { renderTheme } from 'styles/render-theme';
import Home from '.';

describe('<Home />', () => {
  test('should render home', () => {
    renderTheme(<Home />);
  });
});
