import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/icon.png'

import styles from './styles'

export default function Home() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Exibindo <Text style={styles.headerTextBold}>3</Text> bicicletas
                </Text>
            </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha uma bicicleta para alugar.
        </Text>

        <FlatList 
        data={[1, 2, 3]}
        style={styles.list}
        keyExtractor={bike => String(bike)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
            <View style={styles.bike}>
                <Text style={styles.bikeProperty}>DONO:</Text>
                <Text style={styles.bikeValue}>Edson</Text>

                <Text style={styles.bikeProperty}>LOCAL:</Text>
                <Text style={styles.bikeValue}>Taguatinga</Text>

                <Text style={styles.bikeProperty}>VALOR:</Text>
                <Text style={styles.bikeValue}>R$100/mês</Text>

                <TouchableOpacity style={styles.detailsButton}
                onPress={navigateToDetail}>
                <Text style={styles.detailsButtonText}>Ver detalhes de locação</Text>
                <FontAwesome name="star" size={18} color="#dee825" />
                </TouchableOpacity>
            </View>
        )}
        />

        </View>

    );
}