import { Button, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buttons</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput style={styles.TextInput} placeholderTextColor='red' value='5 seconds'/>
      <View style={styles.button}>
      <Button 
        title='5 s'
        onPress={()=>navigation.navigate('TabTwo', {
          screen: 'TabTwo', 
          params:{ timeValue: 10, timeUnit: 'seconds' }
        })}
      />
      </View>
      <TextInput style={styles.TextInput} placeholder='Time Value' placeholderTextColor='red'/>
      <View style={styles.button}>
        <Button 
          title='1 m'
          onPress={()=>navigation.navigate('TabTwo', {
            screen: 'TabTwo', 
            params:{ timeValue: 10, timeUnit: 'seconds' }
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button:{
    width: '80%',
    borderWidth: 3,
    borderColor: 'blue',
  },
  TextInput: {
    width: '80%',
    backgroundColor: 'white',
  },
});
