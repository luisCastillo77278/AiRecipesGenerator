import { Formik } from "formik";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Yup from 'yup';
import Button from "./common/Button";
import TextField from "./common/Forms/TextField";
import Divider from "./core/Divider";

const scheme = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
})

interface IProps {
  onGoSingUp: () => void
}

const SignIn: FC<IProps> = ({
  onGoSingUp
}) => {

  return (
    <View>
      <Text style={styles.title}>Welcome to back</Text>
      <Formik 
        initialValues={{ email: '', password: '' }} 
        onSubmit={(values) => console.log(values)}
        validationSchema={scheme}
      >
        {
          () => (
            <View style={{ rowGap: 10 }}>
              <TextField 
                label="Your Email" 
                name="email" 
                placeholder="Enter your email" 
              />
              <TextField 
                label="Password" 
                name="password" 
                placeholder="Enter your password" 
              />
              <Button 
                text="Continue" 
                rounded={10} 
                paddingX={10} 
                paddingY={13} 
                bgColor="tomato" 
                color="white"  
                marginTop={15} 
              />
            </View>     
          )
        }
      </Formik>
        
      <Divider text="Or" />
      
      <View>
        {/* aqui va boton google */}
        {/* aqui va boton facebook */}
      </View>


      <View style={styles.signUpPromptContainer}>
        <Text style={styles.signUpPromptText}>Don't have an account?</Text>
        <TouchableOpacity onPress={onGoSingUp}>
          <Text style={styles.signUpLinkText}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

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
    marginBottom: 10,
    textAlign: 'center',
  }
})

export default SignIn;