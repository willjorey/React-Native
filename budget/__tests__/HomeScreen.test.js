import HomeScreen from '../screens/HomeScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('works', () => {
    expect(1).toBe(1);
  });