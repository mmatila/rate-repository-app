import React from 'react';
import { TextInput as NativeTextInput } from 'react-native-paper';
import theme from '../theme';


const TextInput = ({ ...props }) => {

  return <NativeTextInput mode={'outlined'} theme={{colors: { primary: theme.colors.primary, error: '#d73a4a' }}} {...props} />;
};

export default TextInput;