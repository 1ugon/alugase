import React, { useState, useCallback } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import firebase from "firebase";
import "firebase/firestore";

import logoImg from "../../assets/icon.png";

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const firestore = firebase.firestore();

  const [bikes, setBikes] = useState(0);
  const [list, setList] = useState([]);
  const [uid, setUid] = useState("");

  function navigateToDetail() {
    navigation.navigate("Detail", {
      uid: uid,
    });
  }

  function navigateToNewBike() {
    navigation.navigate("NewBike");
  }

  useFocusEffect(
    useCallback(() => {
      checkBikes();
      return () => {};
    }, [bikes])
  );

  function checkBikes() {
    firestore
      .collection("Bicicletas")
      .get()
      .then(function (resultado) {
        var count = 0;
        var li = [];
        resultado.forEach(function (doc) {
          count += 1;
          li.push({
            id: doc.id,
            dono: doc.data().dono,
            local: doc.data().local,
            valor: doc.data().valor,
          });
        });
        setBikes(count);
        setList(li);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Exibindo <Text style={styles.headerTextBold}>{bikes}</Text> bicicletas
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.description}>Escolha uma bicicleta ou </Text>
        <TouchableOpacity onPress={navigateToNewBike}>
          <Text style={styles.newButtonText}>cadastre</Text>
        </TouchableOpacity>
        <Text style={styles.description}> a sua!</Text>
      </View>

      <FlatList
        data={list}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.bike}>
            <Text style={styles.bikeProperty}>DONO:</Text>
            <Text style={styles.bikeValue}>{item.dono}</Text>

            <Text style={styles.bikeProperty}>LOCAL:</Text>
            <Text style={styles.bikeValue}>{item.local}</Text>

            <Text style={styles.bikeProperty}>VALOR:</Text>
            <Text style={styles.bikeValue}>R${item.valor}/mês</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPressIn={() => {
                setUid(item.id);
              }}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>
                Ver detalhes de locação
              </Text>
              <FontAwesome name="star" size={18} color="#dee825" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
