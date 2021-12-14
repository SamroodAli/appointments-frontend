import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Signin from '../components/Signin';
import Wrapper from '../testWrapper';

test('Signin snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Signin />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
