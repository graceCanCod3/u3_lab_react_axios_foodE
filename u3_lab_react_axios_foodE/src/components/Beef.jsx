import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Beef () {
    let navigate = useNavigate()
    const showBeef = (mealName) => {
        navigate(`/Beef/${mealName}`)
    }

    const [beefs, setBeefs] = useState([])

    useEffect (()=> {
        const getBeef = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?i=beef`)
            setBeefs(response.data.meals)
        }
        getBeef()
    },[])

    return (
        <div className="protein">
            <h1>Protein Type: Beef</h1>
            {
                beefs.map((beef,index)=> (
                    <div className="beef" onClick={()=>showBeef(beef.idMeal)} key = {index}>
                        <h2>{beef.strMeal}</h2>
                        <img src={beef.strMealThumb} alt={beef.strMeal} />
                    </div>
                ))
            }
        </div>
    )
}