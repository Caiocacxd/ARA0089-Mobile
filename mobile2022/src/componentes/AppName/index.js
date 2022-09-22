import {Text, StyleSheet} from 'react-native';

export default function RedTitle({children}) {
    return(
        <Text style={StyleSheet.appName}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF0000',
    },
});