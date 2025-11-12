import { useEffect, useState } from "react";


const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

type TrafficLightColors = keyof typeof colors;



export const UseTrafficLight = () => {


    const [light, setLight] = useState<TrafficLightColors>('red');
    const [countdown, setCountdown] = useState(5)

    //countdown wffect
    useEffect(() => {
      if(countdown === 0) return
        const intervalId = setInterval(() => {
        setCountdown( prev => prev - 1)
      }, 1000);
      
      return () => {
        clearInterval(intervalId) 
      }
    }, [countdown])
    
    //change light color
    useEffect(() => {
      if(countdown > 0) return;
        if(light === 'red'){
          setLight('green');
          setCountdown(5)
          return;
        }
        if(light === 'green'){
          setLight('yellow');
          setCountdown(3)
          return;
        }
        if(light === 'yellow'){
          setLight('red');
          setCountdown(5)
          return;
        }
      
    
    }, [countdown, light])
  return {
    countdown,
    light,
    colors,

    //Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    //methods
    
  }
}
