import { screen } from '@testing-library/react';
import { renderTheme, rerenderTheme } from 'styles/render-theme';
import { theme } from 'styles/theme';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>heading</Heading>);

    expect(screen.getByRole('heading', { name: 'heading' })).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>heading</Heading>);

    expect(screen.getByRole('heading', { name: 'heading' })).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render with white color', () => {
    const render = renderTheme(<Heading size="small">small</Heading>);
    expect(screen.getByRole('heading', { name: 'small' })).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerenderTheme(render, <Heading size="medium">medium</Heading>);
    expect(screen.getByRole('heading', { name: 'medium' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerenderTheme(render, <Heading size="big">big</Heading>);
    expect(screen.getByRole('heading', { name: 'big' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerenderTheme(render, <Heading size="huge">huge</Heading>);
    expect(screen.getByRole('heading', { name: 'huge' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">huge</Heading>);

    expect(screen.getByRole('heading', { name: 'huge' })).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.fonts.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>heading</Heading>);

    expect(screen.getByRole('heading', { name: 'heading' })).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">heading</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
