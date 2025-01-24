import { StyleSheet } from 'react-native';
import fontSizes from '../../styles/fontSizes';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gradientBackground: {
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'WorkSans-Medium',
  },
  username: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'WorkSans-Bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  note: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    padding: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  servicesContainer: {
    padding: 20,
  },
  serviceCard: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  serviceGradient: {
    padding: 20,
  },
  serviceName: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'WorkSans-Bold',
  },
  serviceStatus: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    fontFamily: 'WorkSans-Regular',
  },
  statusDot: {
    width: 13,
    height: 13,
    borderRadius: 20,
},
statusContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
statusIndicator: {
  flexDirection: 'row',
  alignItems: 'center',
},
statusText: {
  fontFamily: 'WorkSans-ExtraLight',
  color: '#fff',
  fontSize: 12,
  marginLeft: 5,
},
greenDot: {
    backgroundColor: 'lime',
},
redDot: {
    backgroundColor: 'red',
},
grayDot: {
    backgroundColor: 'gray',
},
orangeDot: {
    backgroundColor: 'orange',
},
});


  export default styles;