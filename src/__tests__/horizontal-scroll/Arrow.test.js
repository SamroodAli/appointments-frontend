import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Arrow from '../../components/horizontal-scroll/Arrow';
import Wrapper from '../../testWrapper';

test('Arrow snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Arrow className="arrow">
        Left Arrow
      </Arrow>
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
