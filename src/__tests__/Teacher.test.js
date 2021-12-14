import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Teacher from '../components/Teacher';
import Wrapper from '../testWrapper';

test('Teacher snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Teacher />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
