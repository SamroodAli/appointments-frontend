import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Teachers from '../components/Teachers';
import Wrapper from '../testWrapper';

test('Teachers snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Teachers />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
