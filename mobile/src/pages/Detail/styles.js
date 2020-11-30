import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight+5,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
    },

    backButton: {
        paddingBottom: 15,
    },

    bike: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 20,
        marginTop: -20,
    },

    bikeProperty: {
        marginTop: 10,
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    bikeValue: {
        marginTop: 5,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#13131a',
        lineHeight: 30,
    },

    description: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#dee825',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
    }
})