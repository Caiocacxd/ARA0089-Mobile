import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import carnelogo from './assets/carnelogo.jpg';
import RedTitle from './src/componentes/AppName'; 


export default function App() {
  return (
   <>
   <View style={styles.container}>
   <Image
        style={styles.tinyLogo}
        source={carnelogo} defaultSource={carnelogo}
      ></Image>
      <RedTitle>MENU</RedTitle>
      <Text style={styles.secondText}>Restaurante e Churrascaria</Text>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://resultadosdigitais.com.br/files/2015/08/thestocks-imagem.jpg'}}
      ></Image>
      <StatusBar style="auto" />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 40
  },
  secondText: {
    color: 'red',
    backgroundColor: 'black',
    fontSize: 20
  },
  tinyLogo: {
    width: 100,
    height: 100
  }
});
