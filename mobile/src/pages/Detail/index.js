import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/icon.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá, estou entrando em contato pois gostaria de alugar sua bicicleta encontrada no app do Aluga-se';

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Gostaria de alugar sua bicicleta',
            recipients: ['teste@gmail.com'],
            body: message,
        })
    }

    function sendWpp() {
        Linking.openURL(`whatsapp://send?phone=5561991137756&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <FontAwesome style={styles.backButton} name="arrow-left" size={30} color="#dee825" />
                </TouchableOpacity>
            </View>

            <View style={styles.bike}>
                <Text style={[styles.bikeProperty, { marginTop: 0 }]}>DONO:</Text>
                <Text style={styles.bikeValue}>Edson</Text>

                <Text style={styles.bikeProperty}>LOCAL:</Text>
                <Text style={styles.bikeValue}>Taguatinga</Text>

                <Text style={styles.bikeProperty}>VALOR:</Text>
                <Text style={styles.bikeValue}>R$100/mês</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.title}>Alugue essa bicicleta agora mesmo!</Text>
                <Text style={styles.description}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWpp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}