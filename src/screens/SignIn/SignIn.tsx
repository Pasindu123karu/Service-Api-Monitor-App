import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp } from '@react-navigation/native';
import styles from './SignInStyles'; // Import external styles

type SignInProps = {
  navigation: NavigationProp<any>;
};

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSignIn = () => {
    if (email === 'mobitel@gmail.com' && password === '1234') {
      navigation.navigate('Home');
    } else {
      setAlertMessage('Invalid credentials. Please try again!');
      setAlertVisible(true);
    }
  };

  return (
    <View style={styles.mainContainer}>
         <ScrollView>
           {/* Gradient Background */}
           <LinearGradient
             colors={['#001B27', '#0078D7']}
             style={styles.gradientBackground}>
             <View style={styles.header}>
               <TouchableOpacity>
                 <View style={styles.activeTabWrapper}>
                   <Text style={[styles.headerText, styles.activeTab]}>
                     Sign In
                   </Text>
                   <View style={styles.underline} />
                 </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                 <Text style={styles.headerText}>Sign Up</Text>
               </TouchableOpacity>
             </View>
           </LinearGradient>
   
           {/* Main Content */}
           <View style={styles.main}>
             <Text style={styles.title}>Welcome Back!</Text>
   
             {/* Input Fields */}
             <View style={styles.inputContainer}>
               <Image
                 source={require('../../assets/images/fi-br-envelope.png')}
                 style={styles.icon}
               />
               <TextInput
                 style={styles.input}
                 placeholder="Email"
                 placeholderTextColor="#aaa"
                 keyboardType="email-address"
                 value={email}
                 onChangeText={(text) => setEmail(text)}
               />
             </View>
   
             <View style={styles.inputContainer}>
               <Image
                 source={require('../../assets/images/fi-br-lock.png')}
                 style={styles.icon}
               />
               <TextInput
                 style={styles.input}
                 placeholder="Password"
                 placeholderTextColor="#aaa"
                 secureTextEntry={!isPasswordVisible}
                 value={password}
                 onChangeText={(text) => setPassword(text)}
               />
               <TouchableOpacity
                 onPress={() => setPasswordVisible(!isPasswordVisible)}>
                 <Image
                   source={require('../../assets/images/Vector.png')}
                   style={styles.eyeIcon}
                 />
               </TouchableOpacity>
             </View>
   
              {/* Remember & Forgot Password */}
           <View style={styles.passwordOptions}>
             <View style={styles.row}>
               <TouchableOpacity>
                 <Text style={styles.checkbox}>☐</Text>
               </TouchableOpacity>
               <Text style={styles.rememberText}>Remember Password</Text>
             </View>
             <TouchableOpacity>
               <Text style={styles.forgotPassword}>Forgot Password?</Text>
             </TouchableOpacity>
           </View>
   
             {/* Sign In Button */}
             <TouchableOpacity style={styles.signupButton} onPress={handleSignIn}>
               <Text style={styles.signupButtonText}>Sign In</Text>
             </TouchableOpacity>
           
   
           {/* Social Sign-In Options */}
           <Text style={styles.orText}>Or sign in with</Text>
           <View style={styles.socialButtons}>
             <TouchableOpacity style={styles.socialButton}>
               <Image
                 source={require('../../assets/images/google.png')}
                 style={styles.socialIcon}
               />
               <Text style={styles.socialText}>Google</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.socialButton}>
               <Image
                 source={require('../../assets/images/facebook.png')}
                 style={styles.socialIcon}
               />
               <Text style={styles.socialText}>Facebook</Text>
             </TouchableOpacity>
           </View>
           </View>
         </ScrollView>
   
         {/* Custom Alert Modal */}
         <Modal
           transparent
           visible={isAlertVisible}
           animationType="fade"
           onRequestClose={() => setAlertVisible(false)}>
           <View style={styles.modalBackground}>
             <View style={styles.modalContainer}>
               <Text style={styles.modalText}>{alertMessage}</Text>
               <TouchableOpacity
                 style={styles.modalButton}
                 onPress={() => setAlertVisible(false)}>
                 <Text style={styles.modalButtonText}>OK</Text>
               </TouchableOpacity>
             </View>
           </View>
         </Modal>
       </View>
  );
};

export default SignIn;
