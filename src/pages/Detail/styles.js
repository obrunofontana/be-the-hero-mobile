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

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    fontSize: 15,
    marginTop: 8,
    color: '#737380',
  },

  // Contatos
  contacBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#12121a',
    lineHeight: 30
  },

  heroDescription: {
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
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  }

});