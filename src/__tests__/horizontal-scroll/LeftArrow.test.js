import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import LeftArrow from '../../components/horizontal-scroll/LeftArrow';
import Wrapper from '../../testWrapper';

test('LeftArrow snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <LeftArrow />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
