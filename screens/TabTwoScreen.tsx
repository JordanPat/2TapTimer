import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation, route }: RootTabScreenProps<'TabTwo'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Param: "{ route.params?.timeValue ?? 0 } {route.params?.timeUnit ?? 'seconds' } "</Text>
      <View style={styles.button}>
        <Button 
          title='< Back'
          onPress={()=>navigation.navigate('TabOne')}
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
});
