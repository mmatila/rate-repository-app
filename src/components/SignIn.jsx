import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Button } from 'react-native-paper';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  },
  button: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    marginTop: 5
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name={'username'} placeholder={'Username'} />
      <FormikTextInput name={'password'} placeholder={'Password'} secureTextEntry />
      <Button style={styles.button} mode="contained" onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values.username, values.password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;