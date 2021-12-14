import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Card from '../../components/horizontal-scroll/Card';
import Wrapper from '../../testWrapper';

test('Card snapshot testing', () => {
  const tree = renderer.create(
    <Wrapper>
      <Card item={{ id: '1', name: 'Samrood', index: 1 }} onClick={() => {}} />
    </Wrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
