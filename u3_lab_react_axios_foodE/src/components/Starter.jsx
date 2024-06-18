import axios from 'axios'
import {useEffect, useState} from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function Starter () {
    let navigate = useNavigate()

    const showStarters = (index) => {
        navigate(`${index}`)
    }

    const [starters, setStarters] = useState ([])

    useEffect(()=>{
        const getStarters = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=Starter`)
            setStarters(response.data.meals)
        }
        getStarters()
    },[])

    return(
        <div className="StarterList">
            <h1>Starters</h1>
            {
                starters.map((starter, index)=> (
                    <div className="StarterDiv" onClick={()=>showStarters(index)} key = {index}>
                        <h3>{starter.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )



}

