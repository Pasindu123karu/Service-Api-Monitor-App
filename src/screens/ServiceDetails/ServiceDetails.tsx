import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import styles from './ServiceStyles';

interface Component {
    name: string;
    url: string;
    active: 'Active' | 'Inactive' | null;
    loading: boolean;
}

interface Application {
    name: string;
    type: string;
    components: Component[];
}

const ServiceDetails: React.FC = () => {
    const route = useRoute();
    const { serviceName } = route.params as { serviceName: string };
    const [applications, setApplications] = useState<Application[]>([]);
    const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
    const [overallStatus, setOverallStatus] = useState<'Active' | 'Inactive' | 'Mixed' | 'Not Checked'>('Not Checked');
    const [lastRefreshTime, setLastRefreshTime] = useState<string>('');

    useEffect(() => {
        const fetchAPIs = async () => {
            try {
                const response = await axios.get(
                    'https://66c7ee41732bf1b79fa7c99a.mockapi.io/connected-app/api/login'
                );
                const data = response.data[0];

                const initializedApplications = data.data.map((app: Application) => ({
                    ...app,
                    components: app.components.map((component) => ({
                        ...component,
                        active: null,
                        loading: false,
                    })),
                }));

                setApplications(initializedApplications);
                filterApplicationsByServiceName(initializedApplications, serviceName);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch APIs. Please try again later.');
            }
        };

        fetchAPIs();
    }, []);

    const filterApplicationsByServiceName = (applications: Application[], serviceName: string) => {
        const filtered = applications.filter(app => app.name === serviceName);
        setFilteredApplications(filtered);
    };

    const refreshAllComponents = async () => {
        const updatedApplications = [...filteredApplications];

        for (let appIndex = 0; appIndex < updatedApplications.length; appIndex++) {
            for (let compIndex = 0; compIndex < updatedApplications[appIndex].components.length; compIndex++) {
                updatedApplications[appIndex].components[compIndex].loading = true;
                setFilteredApplications([...updatedApplications]);

                try {
                    const response = await axios.get(updatedApplications[appIndex].components[compIndex].url);

                    updatedApplications[appIndex].components[compIndex].active =
                        response.data[0]?.status === 1000 ? 'Active' : 'Inactive';
                } catch (error) {
                    updatedApplications[appIndex].components[compIndex].active = 'Inactive';
                } finally {
                    updatedApplications[appIndex].components[compIndex].loading = false;
                }
            }
        }

        setFilteredApplications([...updatedApplications]);
        updateOverallStatus(updatedApplications);

        const currentDate = new Date();
        setLastRefreshTime(`${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`);
    };

    const refreshAPIStatus = async (appIndex: number, componentIndex: number) => {
        const updatedApplications = [...filteredApplications];
        updatedApplications[appIndex].components[componentIndex].loading = true;
        setFilteredApplications([...updatedApplications]);

        try {
            const response = await axios.get(updatedApplications[appIndex].components[componentIndex].url);

            updatedApplications[appIndex].components[componentIndex].active =
                response.data[0]?.status === 1000 ? 'Active' : 'Inactive';
        } catch (error) {
            updatedApplications[appIndex].components[componentIndex].active = 'Inactive';
        } finally {
            updatedApplications[appIndex].components[componentIndex].loading = false;
            setFilteredApplications([...updatedApplications]);
            updateOverallStatus(updatedApplications);
        }
    };

    const updateOverallStatus = (updatedApplications: Application[]) => {
        const allActive = updatedApplications.every((app) =>
            app.components.every((component) => component.active === 'Active')
        );
        const allInactive = updatedApplications.every((app) =>
            app.components.every((component) => component.active === 'Inactive')
        );

        if (allActive) {
            setOverallStatus('Active');
        } else if (allInactive) {
            setOverallStatus('Inactive');
        } else {
            setOverallStatus('Mixed');
        }
    };

    const copyToClipboard = (link: string) => {
        Clipboard.setString(link);
        Alert.alert('Copied to Clipboard', `Link: ${link}`);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <LinearGradient colors={['#001B27', '#0078D7']} style={styles.gradientBackground}>
                    <View style={styles.header}>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerTitle}>{serviceName}</Text>
                            <Text style={styles.statusLabel}>Last checked</Text>
                            <Text style={styles.headerSubtitle}>{lastRefreshTime || 'Not Checked'}</Text>
                            <Text style={styles.statusLabel}>Status</Text>
                            <View style={styles.statusContainer}>
                                <View style={styles.statusIndicator}>
                                    <View
                                        style={[
                                            styles.statusDot,
                                            overallStatus === 'Active'
                                                ? styles.greenDot
                                                : overallStatus === 'Inactive'
                                                    ? styles.redDot
                                                    : overallStatus === 'Mixed'
                                                        ? styles.orangeDot
                                                        : styles.grayDot,
                                        ]}
                                    />
                                    <Text style={styles.statusText}>{overallStatus}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.servicesContainer}>
                    <Text style={styles.servicesTitle}>Services</Text>
                    <View style={styles.servicesList}>
                        <TouchableOpacity onPress={refreshAllComponents} style={styles.topRefreshButton}>
                            <Image
                                source={require('../../assets/images/refresh.png')}
                                style={styles.refreshIcon}
                            />
                        </TouchableOpacity>

                        {filteredApplications.map((app, appIndex) => (
                            <View key={appIndex} style={styles.serviceItem}>
                                <View style={styles.serviceInfo}>
                                    {app.components.map((component, compIndex) => (
                                        <View key={compIndex}>
                                            <Text style={styles.serviceName}>{component.name}</Text>
                                            <View style={styles.linkContainer}>
                                                <TouchableOpacity onPress={() => refreshAPIStatus(appIndex, compIndex)}>
                                                    <Image
                                                        source={require('../../assets/images/refresh.png')}
                                                        style={styles.copyIcon}
                                                    />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => copyToClipboard(component.url)}>
                                                    <Text style={styles.serviceLink} numberOfLines={1}>
                                                        {component.url}
                                                    </Text>
                                                </TouchableOpacity>
                                                <View
                                                    style={[
                                                        styles.statusDot,
                                                        component.active === 'Active'
                                                            ? styles.greenDot
                                                            : component.active === 'Inactive'
                                                                ? styles.redDot
                                                                : styles.grayDot,
                                                    ]}
                                                />
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {filteredApplications.some((app) =>
                app.components.some((component) => component.loading)
            ) && (
                    <View style={styles.loaderOverlay}>
                        <ActivityIndicator size="large" color="#0055A5" />
                    </View>
                )}
        </View>
    );
};

export default ServiceDetails;
