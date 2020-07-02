// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Splash from './src/Pages/SplashScreen/Splash';
import About from './src/Pages/About/About';
// import GlobalProvider from './src/Component/Context/Context';
// import { About } from './src/Pages';
// import { Splash, About } from './src/Pages';

const App = () => {
  const [splash, setsplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setsplash(false)
    },3000)
  },[])

  return(<About/>)
  // if(splash){
  //   return(<Splash/>)
  // }else{
  //   return(<Splash/>)
  // }
  
}

// export default GlobalProvider(App);
export default App;