import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import firebase from "firebase";
import "firebase/firestore";

import logoImg from "../../assets/icon.png";

import styles from "./styles";

export default function NewBike() {
  const navigation = useNavigation();
  const firestore = firebase.firestore();

  const [dono, setDono] = useState("");
  const [local, setLocal] = useState("");
  const [valor, setValor] = useState("");

  function navigateBack() {
    navigation.goBack();
  }

  function createBike() {
    if(dono !== "" && local !== "" && valor !== "") {
        firestore.collection("Bicicletas").doc().set({
            dono: dono,
            local: local,
            valor: valor,
        }).then(resultado => {
            navigation.goBack();
        })
        Alert.alert("Bicicleta cadastrada!");
    } else {
        Alert.alert("Por favor preencha todos os campos")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <FontAwesome
            style={styles.backButton}
            name="arrow-left"
            size={30}
            color="#dee825"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bike}>
        <Text style={[styles.bikeProperty, { marginTop: 0 }]}>DONO:</Text>
        <TextInput
          placeholder="Seu Nome"
          style={styles.bikeValue}
          value={dono}
          onChangeText={(dono) => {
            setDono(dono);
          }}
        />

        <Text style={styles.bikeProperty}>LOCAL:</Text>
        <TextInput
          placeholder="Local Onde Mora"
          style={styles.bikeValue}
          value={local}
          onChangeText={(local) => {
            setLocal(local);
          }}
        />

        <Text style={styles.bikeProperty}>VALOR:</Text>
        <TextInput
          placeholder="Preço ao Mês"
          style={styles.bikeValue}
          value={valor}
          onChangeText={(valor) => {
            setValor(valor);
          }}
        />
      </View>

      <TouchableOpacity style={styles.action} onPress={createBike}>
        <Text style={styles.actionText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
