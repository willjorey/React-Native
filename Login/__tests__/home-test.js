import React from 'react';
import Home from '../components/home';
import renderer from 'react-test-renderer';
import App from '../App';

test('App Renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('test', () => {
    
    expect(1).toBe(1);
})