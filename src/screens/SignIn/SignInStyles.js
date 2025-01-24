import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gradientBackground: {
    height: 254,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
    paddingTop: 210,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#aaa',
  },
  activeTabWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    color: '#fff',
  },
  underline: {
    height: 2,
    backgroundColor: '#fff',
    width: '100%',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0078D7',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 70,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#aaa',
  },
  signupButton: {
    backgroundColor: '#0078D7',
    paddingVertical: 15,
    borderRadius: 40,
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#0055A5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#003f5c',
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#333',
  },
  passwordOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    fontSize: 18,
    marginRight: 5,
  },
  rememberText: {
    fontSize: 14,
    color: '#003f5c',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'red',
  },
});

export default styles;
