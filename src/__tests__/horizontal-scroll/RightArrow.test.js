import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import RightArrow from '../../components/horizontal-scroll/RightArrow';
import Wrapper from '../../testWrapper';

jest.mock('react', () => {
  const react = jest.requireActual('react');
  return {
    ...react,
    useContext: jest.fn(() => (
      {
        isLastItemVisible: true,
        scrollNext: jest.fn(),
        visibleItemsWithoutSeparators: [],
      })),
  };
});

test('RightArrow snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <RightArrow />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
