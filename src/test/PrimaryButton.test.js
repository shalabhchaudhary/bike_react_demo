import React from "react";
import PrimaryButton from "./PrimaryButton";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Checking Primary Button', () => {
    const tree = renderer.create(<PrimaryButton styles={{color:'#7F23D3',alignItems:'center',
    justifyContent:'center'}}>Login</PrimaryButton>);
    expect(tree).toMatchSnapshot();
});

// test('onPress', () => {
//     let i = 0
//     const onPress = () => i++
//     const wrapperPress = shallow(<PrimaryButton onPress={onPress} text='hi' />)
  
//     expect(wrapperPress.prop('onPress')).toBe(onPress) // uses the right handler
//     expect(i).toBe(0)
//     wrapperPress.simulate('press')
//     expect(i).toBe(1)
//   });