import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Pork () {
    let navigate = useNavigate()
    const showPork = (mealName) => {
        navigate(`/Pork/${mealName}`)
    }

    const [porks, setPorks] = useState([])

    useEffect (()=> {
        const getPork = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?i=pork`)
            setPorks(response.data.meals)
        }
        getPork()
    },[])

    return (
        <div className="protein">
            <h1>Protein Type: Pork</h1>
            {
                porks.map((pork,index)=> (
                    <div className="pork" onClick={()=>showPork(pork.idMeal)} key = {index}>
                        <h2>{pork.strMeal}</h2>
                        <img src={pork.strMealThumb} alt={pork.strMeal} />
                    </div>
                ))
            }
        </div>
    )
}