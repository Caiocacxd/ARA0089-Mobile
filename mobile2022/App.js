import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import rng from './assets/rng.jpg';


export default function App() {
  return (
   <>
   <View style={styles.container}>
      <Text style={styles.firstText}>Primeira pagina </Text>
      <Text style={styles.secondText}>Desenvolvimento</Text>
      <Image
        style={styles.tinyLogo}
        source={rng}
      ></Image>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    color: 'black',
    backgroundColor: 'red',
    fontSize: 50
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
