import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Scroll from '../../components/horizontal-scroll/Scroll';
import Wrapper from '../../testWrapper';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('Scroll snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Scroll onItemClick={jest.fn()} items={[]} />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
