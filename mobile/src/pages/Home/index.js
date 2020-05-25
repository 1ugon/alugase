import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/icon.png'

import styles from './styles'

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Existem <Text style={styles.headerTextBold}>3</Text> bicicletas para alugar
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
                onPress={() => {}}>
                <Text style={styles.detailsButtonText}>Tenho interesse!</Text>
                <Feather name="heart" size={16} color="#DED118" />
                </TouchableOpacity>
            </View>
        )}
        />

        </View>

    );
}