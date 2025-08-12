import useTheme from '@theme/useTheme';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { ISignInCredentials } from '../auth/Auth.interface';
import useAuth from '../auth/useAuth';
import Button from './common/Button';
import PasswordTextField from './common/Forms/PasswordTextField';
import TextField from './common/Forms/TextField';
import Divider from './core/Divider';

const scheme = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

interface IProps {
  onGoSingUp: () => void;
}

const SignIn: FC<IProps> = ({ onGoSingUp }) => {
  const { paletteColors } = useTheme();
  const { SignInWithEmailAndPassword } = useAuth();
  const router = useRouter();

  const handleSubmit = async (values: ISignInCredentials) => {
    try {
      console.log('login');
      const response = await SignInWithEmailAndPassword({
        email: values.email,
        password: values.password,
      });
      console.log(response);

      if (!response.success) {
        console.log(response);
      }

      router.navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Welcome to back</Text>
      <Formik<ISignInCredentials>
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={scheme}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
        }) => (
          <View style={{ rowGap: 10 }}>
            <TextField
              label="Email"
              name="email"
              placeholder="Enter your email"
              keyboardType="email-address"
              isIcon
              iconName="mail"
              required
              errors={errors.email}
              touched={touched.email}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              value={values.email}
              brColor={paletteColors.primary.DEFAULT}
            />
            <PasswordTextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              required
              errors={errors.password}
              touched={touched.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              value={values.password}
              brColor={paletteColors.primary.DEFAULT}
            />
            <Button
              text="Continue"
              rounded={10}
              paddingX={10}
              paddingY={13}
              bgColor={paletteColors.primary.DEFAULT}
              color="white"
              marginTop={15}
              onPress={() => handleSubmit()}
            />
          </View>
        )}
      </Formik>

      <Divider text="Or" />

      <View>
        {/* aqui va boton google */}
        {/* aqui va boton facebook */}
      </View>

      <View style={styles.signUpPromptContainer}>
        <Text style={styles.signUpPromptText}>Dont have an account?</Text>
        <TouchableOpacity onPress={onGoSingUp}>
          <Text
            style={[
              styles.signUpLinkText,
              { color: paletteColors.primary.DEFAULT },
            ]}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpPromptContainer: {
    marginTop: 15,
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
  },
  signUpPromptText: {
    fontSize: 16,
    letterSpacing: 0.2,
    color: '#989898',
  },
  signUpLinkText: {
    fontSize: 16,
    letterSpacing: 0.2,
    color: 'tomato',
  },
  title: {
    letterSpacing: 0.2,
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default SignIn;
