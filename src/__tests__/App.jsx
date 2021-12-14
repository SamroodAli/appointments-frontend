import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import App from '../components/App';

test('App snapshot testing', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
