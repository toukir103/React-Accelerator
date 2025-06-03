import { useState } from 'react';
const useWeather=()=>{
        const  [weatheData,setWeatherData]=useState({
            location:"",
            climate:"",
            temparature:"",
            maxTemperature:"",
            minTemperature:"",
            humidity:"",
            cloudPercentage:"",
            wind:"",
            time:"",
            longitude:"",
            latitude:""
        })
        const [loading,setLoading]=useState({
            state:false,
            message:""
        });
        const [error,setError]=useState(null);
        const fetchWeatherData=async(latitude,longitude)=>{
            try{
            setLoading({
                 ...loading,
             state:true,
             message:"fetching weather Data"
            })
            const response = await fetch(``);
            
            }catch(err){

            }finally{
             setLoading({
                ...loading,
                state:false,
                message:""
             })
            }

        }

}