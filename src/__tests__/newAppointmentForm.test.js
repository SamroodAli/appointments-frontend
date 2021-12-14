import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import NewAppointmentForm from '../components/NewAppointmentForm';
import Wrapper from '../testWrapper';

test('NewAppointmentForm snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <NewAppointmentForm id="1" name="Samrood" color="indigo" />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
