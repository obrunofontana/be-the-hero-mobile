import { StyleSheet } from 'react-native';
// Impota umas constantes padroes de tamanho dos componetes de um celular;
import Constants from 'expo-constants';

export default StyleSheet.create({
  // Container
  container: {
    flex: 1,
    paddingHorizontal: 24, //Só existe no react-native, adiciona padding nas laterais
    paddingTop: Constants.statusBarHeight + 20,
  },

  // Cabecalho
  header: {
    flexDirection: 'row', // Por padrao na WEB: flex-column é row, no react-native, o padrao é column,sendo necessario informar row
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  // Body
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#12121a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  // Lista de  incidentes
  incidentsList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold',
  },

});