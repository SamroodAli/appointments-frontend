import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Signup from '../components/Signup';
import Wrapper from '../testWrapper';

test('Signup snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Signup />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
