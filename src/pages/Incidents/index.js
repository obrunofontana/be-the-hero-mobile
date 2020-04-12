import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  // Estados
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Funções de navegação 
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  // Funções chamada da API
  async function loadIncidents() {
    if(loading) { return; }

    if(total > 0 && incidents.length === total) { return; }

    setLoading(true);
    
    const response = await api.get('/incidents', {
      params: { page }
    });
    // Anexo  dois vetores um um só (react)
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  //  useEffect,  funciona como se fosse uma computada ou um observer, 
  // A funcao sera disparada quando a variavel(s) que for passada pelo param, for alterada
  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      {/* Sempre que precisar utilizar listar utilizar o Flat list, ele é como se fosse o each do ember */}
      <FlatList
        style={styles.incidentsList}
        data={incidents}
        // Pra cada  itemm deve ser passado um valor unico, que geralmente sera o ID
        keyExtractor={incident => String(incident.id)}
        // Tira o scroll feio que aparece
        showsVerticalScrollIndicator={false}
        // Funcao que eh disparada quando chega no final da lista
        onEndReached={loadIncidents}
        // Qual o percetual proximo a final da lista que precisa estar para carregar novos itens? 
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              // Sempre que precisar passsar parametros para uma funcao precisa criar uma funcao para chamar outra;
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}