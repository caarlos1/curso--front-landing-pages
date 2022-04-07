import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { theme } from 'styles/theme';
import Home from '.';

test('renders learn react link', () => {
  renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', { name: 'Home' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toHaveStyleRule('background', theme.colors.mainBg);
  expect(headingContainer).toMatchSnapshot();
});
