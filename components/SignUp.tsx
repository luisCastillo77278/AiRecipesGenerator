import useTheme from '@theme/useTheme';
import { Formik } from 'formik';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { ISignUpCredentials } from '../auth/Auth.interface';
import useAuth from '../auth/useAuth';
import Button from './common/Button';
import PasswordTextField from './common/Forms/PasswordTextField';
import TextField from './common/Forms/TextField';
import Divider from './core/Divider';

interface IProps {
  onGoSingIn: () => void;
}

const schema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const SignUp: FC<IProps> = ({ onGoSingIn }) => {
  const { paletteColors } = useTheme();
  const { SignUpWithEmailAndPassword } = useAuth();

  const handleSubmit = async (values: ISignUpCredentials) => {
    try {
      const response = await SignUpWithEmailAndPassword({
        email: values.email,
        password: values.password,
        username: values.username,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Create Account</Text>
      <Formik<ISignUpCredentials>
        initialValues={{ password: '', email: '', username: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
        }) => (
          <View style={{ rowGap: 10 }}>
            <TextField
              label="Username"
              name="username"
              placeholder="Enter your username"
              brColor={paletteColors.primary.DEFAULT}
              isIcon
              iconName="person"
              errors={errors.username}
              touched={touched.username}
              onBlur={handleBlur('username')}
              onChangeText={handleChange('username')}
              value={values.username}
            />
            <TextField
              label="Email"
              name="email"
              placeholder="Enter your email"
              required
              brColor={paletteColors.primary.DEFAULT}
              isIcon
              iconName="mail"
              errors={errors.email}
              touched={touched.email}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <PasswordTextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              required
              brColor={paletteColors.primary.DEFAULT}
              errors={errors.password}
              touched={touched.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              value={values.password}
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
        <Text style={styles.signUpPromptText}>Already have an account?</Text>
        <TouchableOpacity onPress={onGoSingIn}>
          <Text
            style={[
              styles.signUpLinkText,
              { color: paletteColors.primary.DEFAULT },
            ]}
          >
            Sign in
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
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default SignUp;
