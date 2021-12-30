import { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation, route }: RootTabScreenProps<'TabTwo'>) {
  const [time, setTime] = useState({val:route.params?.timeValue})
  const handleStop = ()=>{
    setTime({ val: 0 })
    alert('handle stop')
    navigation.navigate("TabOne")
  }

  useEffect(()=>{
    const timerId = setInterval(() => {
      if(!route.params?.isPaused){
          if ( time.val <= 0) {}
          else setTime({...time,val:time.val-1})
        } else {}
      }, 1000)
    if( time.val < 0){ 
      if(timerId) {
        clearInterval(timerId)
        } 
      return
      }
    return () => clearInterval(timerId);
    }, [time, route.params?.isPaused])

  // useEffect(()=>{
  //   const timerId = setInterval(() => {
  //       if(!route.params?.isPaused){
  //           if (time.sec <= 0) {
  //               if (time.min <= 0) { 
  //                   if(time.hrs <= 0){
  //                       // setTime({...time,hrs:time.hrs-1,min:time.min,sec:time.sec,milli:time.milli}) 
  //                       return async()=>await schedulePushNotification();
  //                   }
  //                   else setTime({...time,hrs:time.hrs-1,min:59,sec:59})
  //               }
  //               else setTime({...time,min:time.min-1,sec:59})
  //           }
  //           else setTime({...time,sec:time.sec-1})
  //       }
  //       else{}
  //   }, 1000)

  //   if(time.sec<0){ 
  //       if(timerId) {
  //           clearInterval(timerId)
  //       } 
  //       return
  //   }
  //   return () => clearInterval(timerId);
  // }, [time, props.isPaused])
  const handlePause = ()=>{
    // setPause(!pause)
    // return (console.log("Pause = "+pause));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Param: "{ time.val ?? 0 } {route.params?.timeUnit ?? 'seconds' } "</Text>
      <View style={styles.buttonRow}>
          <Button title={!route.params?.isPaused ? "Start":"Pause"} onPress={()=>handlePause()} />
          <Button title='Stop' onPress={()=>handleStop()} />
      </View>
      
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
  buttonRow: { 
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // alignContent:'space-around',
  },
});
