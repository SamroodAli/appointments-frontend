import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Routes from '../components/Routes';
import Wrapper from '../testWrapper';

test('Routes snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Routes />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
