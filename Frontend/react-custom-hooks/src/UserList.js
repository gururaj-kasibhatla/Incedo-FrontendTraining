import {useEffect,useState} from 'react';
import axios from 'axios'
var useFetch=(url)=>{
    var[data,setData]=useState([])

    var apiData=async()=>{
        try{
        var response= await axios.get(url);
        console.log(response)
        setData( response.data);
        }catch(error){
            console.log("Error while fetching data ",error)
        }
    }

    useEffect(()=>{
        apiData()
    },[])
    return data;

}

export default useFetch;