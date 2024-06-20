import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Poultry () {
    let navigate = useNavigate()
    const showPoultry = (mealName) => {
        navigate(`/Poultry/${mealName}`)
    }

    const [poultries, setPoultries] = useState([])

    useEffect (()=> {
        const getPoultry = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?i=chicken`)
            setPoultries(response.data.meals)
        }
        getPoultry()
    },[])

    return (
        <div className="protein">
            <h1>Protein Type: Chicken</h1>
            {
                poultries.map((poultry,index)=> (
                    <div className="poultry" onClick={()=>showPoultry(poultry.idMeal)} key = {index}>
                        <h2>{poultry.strMeal}</h2>
                        <img src={poultry.strMealThumb} alt={poultry.strMeal} />
                    </div>
                ))
            }
        </div>
    )
}
