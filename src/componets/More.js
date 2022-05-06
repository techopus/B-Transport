import React from 'react';   
import { useParams } from 'react-router'; 
import { useEffect } from 'react'; 
import { useState } from 'react';
import axios from 'axios'; 
import Moredisplay from './Moredisplay'; 


const More = ({arr}) => { 
    const { id } = useParams(); 
    const [depdata,setdepdata] = useState([]); 
    useEffect(() =>{ 
        axios.get(`https://berlin-trasnportation-app.herokuapp.com/api/stopdepartures/${id}`) 
        .then(res =>{ 
            setdepdata(res.data); 
        }) 
        .catch(err =>{ 
            console.log(err);
        })
    })
    return (
        <div> 
            <Moredisplay ary = {depdata} />
        </div>
    )
} 
export default More
