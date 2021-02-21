import React from 'react';
import { useHistory } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Button } from 'react-native-paper';
import theme from '../theme';
import * as yup from 'yup';


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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username required'),
  password: yup
    .string()
    .required('Password required')
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;