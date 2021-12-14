import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Appointments from '../components/Appointments';
import Wrapper from '../testWrapper';

test('Appointments snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Appointments />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
