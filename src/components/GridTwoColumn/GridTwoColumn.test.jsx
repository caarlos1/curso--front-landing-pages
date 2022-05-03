import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { GridTwoColumn } from '.';

import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByAltText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.text)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
