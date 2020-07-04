import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import GlobalProvider from './src/Component/Context/Context';
import SplashScr from './src/Pages/SplashScreen/SplashScr';
import Container from './src/Pages/Container/Container';

const App = () => {
  const [splash, setsplash] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setsplash(false)
    },3000)
  },[])
  Container

  if(splash){
    return(<SplashScr/>)
  }else{
    return(<Container/>)
  }
  
}
export default GlobalProvider(App);