import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../components/Profile';

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();

  
});

describe('Test', () => {
    let screen = renderer.create(<HomeScreen/>).getInstance();

    // it('Creates new Profile if no value is returned', ()=>{

    //     });
})