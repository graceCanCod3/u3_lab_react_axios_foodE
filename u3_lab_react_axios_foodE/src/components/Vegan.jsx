import axios from 'axios'
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { BASE_URL } from '../globals'

export default function Vegan () {
    let navigate = useNavigate()
    const showVegan = (mealId) => {
        navigate(`/Vegan/${mealId}`)
    }

    const [vegans, setVegans] = useState([])

    useEffect (()=> {
        const getVegan = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=vegan`)
            setVegans(response.data.meals)
        }
        getVegan()
    },[])

    return (
        <div className="VeganList">
            <h1>Vegan food:</h1>
            {
                vegans.map((vegan,index)=> (
                    <div className="VeganDiv" onClick={()=>showVegan(vegan.idMeal)} key = {index}>
                        <h3>{vegan.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )
}