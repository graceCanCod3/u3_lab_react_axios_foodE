import axios from 'axios'
import {useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from '../globals'


export default function Breakfast () {
    let navigate = useNavigate()

    const showBreakfast = (index) => {
        navigate(`${index}`)
    }

    const [breakfasts, setBreakfasts] = useState([])

    useEffect(()=> {
        const getBreakfast = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=breakfast`)
            setBreakfasts(response.data.meals)
        }
        getBreakfast()
    },[])

    return (
        <div className="BreakfastList">
            <h1>Breakfast:</h1>
            {
                breakfasts.map((breakfast,index)=> (
                    <div className="BreakfastDiv" onClick={()=>showBreakfast(index)} key = {index}>
                        <h3>{breakfast.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )


}