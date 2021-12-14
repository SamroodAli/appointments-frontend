import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import AppointmentList from '../components/AppointmentList';

test('App snapshot testing', () => {
  const collection = [{ id: 1, teacher: { name: 'teacher1' }, time: 'time1' }, { id: 2, teacher: { name: 'teacher2' }, time: 'time2' }];
  const tree = renderer.create(<AppointmentList collection={collection} />).toJSON();
  expect(tree).toMatchSnapshot();
});
