import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hi Title!" />);
    expect(screen.getByRole('heading', { name: 'Hi Title!' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Hi Title!' })).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Image Logo..." srcImg="image.jpg" />);

    expect(screen.getByRole('img', { name: 'Image Logo...' })).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Image Logo..." srcImg="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
