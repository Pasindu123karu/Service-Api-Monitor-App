import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';  []
import styles from './HomeStyles';

type Component = {
  name: string;
  url: string;
  active: 'Active' | 'Inactive' | null;
  loading: boolean;
};

type Service = {
  name: string;
  components: Component[];
  overallStatus: 'Active' | 'Inactive' | 'Mixed' | 'Not Checked';
};

const Home: React.FC = () => {
  const navigation = useNavigation(); 
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  let backPressCount = 0;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          'https://66c7ee41732bf1b79fa7c99a.mockapi.io/connected-app/api/login'
        );
        const data = response.data[0];

        const initializedServices = data.data.map((service: Service) => ({
          ...service,
          components: service.components.map((component: Component) => ({
            ...component,
            active: null,
            loading: false,
          })),
          overallStatus: 'Not Checked',
        }));

        setServices(initializedServices);
        setFilteredServices(initializedServices);

        await checkServicesStatus(initializedServices);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        if (backPressCount === 0) {
          backPressCount += 1;
          ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
          setTimeout(() => {
            backPressCount = 0;
          }, 2000);
          return true;
        } else {
          BackHandler.exitApp();
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [])
  );

  const checkServicesStatus = async (servicesToCheck: Service[]) => {
    const updatedServices = [...servicesToCheck];

    for (let i = 0; i < updatedServices.length; i++) {
      const service = updatedServices[i];

      for (let j = 0; j < service.components.length; j++) {
        const component = service.components[j];
        component.loading = true;

        try {
          const response = await axios.get(component.url);
          component.active = response.data[0]?.status === 1000 ? 'Active' : 'Inactive';
        } catch (error) {
          component.active = 'Inactive';
        } finally {
          component.loading = false;
        }
      }

      const statuses = service.components.map((comp) => comp.active);
      if (statuses.every((status) => status === 'Active')) {
        service.overallStatus = 'Active';
      } else if (statuses.every((status) => status === 'Inactive')) {
        service.overallStatus = 'Inactive';
      } else {
        service.overallStatus = 'Mixed';
      }
    }

    setServices([...updatedServices]);
    setFilteredServices([...updatedServices]);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === '') {
      setFilteredServices(services);
    } else {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredServices(results);
    }
  };

  const handleServicePress = (serviceName: string) => {
    navigation.navigate('ServiceDetails', { serviceName });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#001B27" barStyle="light-content" />
      <ScrollView>
        <LinearGradient colors={['#001B27', '#0078D7']} style={styles.gradientBackground}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Hello,</Text>
              <Text style={styles.username}>Pasindu</Text>
            </View>
            <Image
              style={styles.profileIcon}
              source={require('../../assets/images/google2x.png')}
            />
          </View>
          <Text style={styles.note}>Which service do{'\n'}you need?</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Type here..."
              placeholderTextColor="#aaa"
              value={searchText}
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Image
                style={styles.searchIcon}
                source={require('../../assets/images/fi-br-search.png')}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {loading ? (
          <ActivityIndicator size="large" color="#0055A5" style={{ marginTop: 20 }} />
        ) : (
          <ScrollView contentContainerStyle={styles.servicesContainer}>
            {filteredServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceCard}
                onPress={() => handleServicePress(service.name)}
              >
                <LinearGradient colors={['#003952', '#0078D7']} style={styles.serviceGradient}>
                  <Text style={styles.serviceName}>{service.name}</Text>
                  <Text style={styles.serviceStatus}>
                    Status: {service.overallStatus === 'Not Checked' ? 'Unknown' : service.overallStatus}
                  </Text>
                  <View style={styles.statusContainer}>
                    <View style={styles.statusIndicator}>
                      <View
                        style={[
                          styles.statusDot,
                          service.overallStatus === 'Active'
                            ? styles.greenDot
                            : service.overallStatus === 'Inactive'
                            ? styles.redDot
                            : service.overallStatus === 'Mixed'
                            ? styles.orangeDot
                            : styles.grayDot,
                        ]}
                      />
                      <Text style={styles.statusText}>{service.overallStatus}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;