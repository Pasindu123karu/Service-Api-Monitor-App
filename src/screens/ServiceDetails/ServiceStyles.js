import { StyleSheet } from 'react-native';
import fontSizes from '../../styles/fontSizes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loaderOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    gradientBackground: {
        resizeMode: 'cover',
        height: 180,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    header: {
        marginTop: 5,
        flexDirection: 'row',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTextContainer: {
        marginLeft: 20,
    },
    headerTitle: {
        fontFamily: 'WorkSans-Medium',
        color: '#fff',
        fontSize: 30,
    },
    headerSubtitle: {
        fontSize: fontSizes.small,
        fontFamily: 'WorkSans-Light',
        color: '#ddd',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusLabel: {
        color: '#fff',
        fontFamily: 'WorkSans-Medium',
        fontSize: 14,
        marginRight: 5,
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
    servicesContainer: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    servicesTitle: {
        fontSize: 30,
        color: '#666666',
        fontFamily: 'WorkSans-Medium',
        textAlign: 'center',
    },
    servicesList: {
        marginTop: 10,
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    serviceInfo: {
        flex: 1,
        marginRight: 10,
    },
    serviceName: {
        fontFamily: 'WorkSans-Medium',
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    copyIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: '#9c9c9c',
    },
    topRefreshButton: {
        alignSelf: 'flex-end', 
        marginRight: 10,       
    },
    
    refreshIcon: {
        width: 18, 
        height: 18,
        tintColor: '#0078D7',
    },
    serviceLink: {
        fontFamily: 'WorkSans-ExtraLight',
        color: 'blue',
        fontSize: 12,
        flex: 1,
    },
    statusDot: {
        width: 13,
        height: 13,
        borderRadius: 20,
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
