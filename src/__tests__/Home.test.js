import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Home from '../components/Home';
import Wrapper from '../testWrapper';

test('Home snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Home />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
