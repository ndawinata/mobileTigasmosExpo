// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
// import Splash from './src/Pages/SplashScreen/Splash';
// import About from './src/Pages/About/About';
// import Weather from './src/Pages/Weather/Weather';
import GlobalProvider from './src/Component/Context/Context';
import Home from './src/Pages/Home/Home';
// import Notifications from './src/Pages/Notifications/Notifications';
// import { About } from './src/Pages';
// import { Splash, About } from './src/Pages';

const App = () => {
  const [splash, setsplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setsplash(false)
    },3000)
  },[])

  return(<Home/>)
  // if(splash){
  //   return(<Splash/>)
  // }else{
  //   return(<Splash/>)
  // }
  
}

export default GlobalProvider(App);
// export default App;